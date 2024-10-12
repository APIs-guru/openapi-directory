# openapi_client.EntityApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_check_entity**](EntityApi.md#create_check_entity) | **POST** /entity/new/verify/{checkType}/{resultLevel} | Create and Verify Entity
[**create_check_entity_push_to_mobile**](EntityApi.md#create_check_entity_push_to_mobile) | **POST** /entity/new/verify/pushToMobile | Create Entity and Push Self-Verification Link
[**create_entity**](EntityApi.md#create_entity) | **POST** /entity | Create New Entity.
[**create_entity_get_idv_token**](EntityApi.md#create_entity_get_idv_token) | **POST** /entity/new/idvalidate/getToken | Create Entity and Get IDV Token
[**delete_entity**](EntityApi.md#delete_entity) | **DELETE** /entity/{entityId} | Delete Entity
[**query_entity**](EntityApi.md#query_entity) | **GET** /entity/{entityId} | Retrieve Entity Details
[**query_entity_checks**](EntityApi.md#query_entity_checks) | **GET** /entity/{entityId}/checks | Retrieve Entity Verication Check Details 
[**query_entity_full**](EntityApi.md#query_entity_full) | **GET** /entity/{entityId}/full | Retrieve Entity Details and Document Scan Data 
[**search_entity**](EntityApi.md#search_entity) | **POST** /entity/search | Search for Entity
[**update_check_class_result**](EntityApi.md#update_check_class_result) | **POST** /entity/{entityId}/check/{checkId}/{checkClass}/{checkClassId} | Update Check Result State
[**update_check_class_results**](EntityApi.md#update_check_class_results) | **POST** /entity/{entityId}/check/{checkId}/{checkClass} | Update Check Result States (Batch)
[**update_check_entity**](EntityApi.md#update_check_entity) | **POST** /entity/{entityId}/verify/{checkType}/{resultLevel} | Update Entity and Verify Details
[**update_check_entity_push_to_mobile**](EntityApi.md#update_check_entity_push_to_mobile) | **POST** /entity/{entityId}/verify/pushToMobile | Update Entity and Push Self-Verification Link
[**update_entity**](EntityApi.md#update_entity) | **POST** /entity/{entityId} | Update Existing Entity.
[**update_entity_get_idv_token**](EntityApi.md#update_entity_get_idv_token) | **POST** /entity/{entityId}/idvalidate/getToken | Update Entity and Get IDV Token
[**update_entity_init_idv_process**](EntityApi.md#update_entity_init_idv_process) | **POST** /entity/{entityId}/idvalidate/initProcess | Update Entity and Initiate IDV Process
[**update_entity_state**](EntityApi.md#update_entity_state) | **POST** /entity/{entityId}/status | Update Entity States


# **create_check_entity**
> CheckEntityCheckResultObject create_check_entity(x_frankie_customer_id, check_type, result_level, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Create and Verify Entity

Create an entity object. An entity object can be used to simply store data around a given identity. You can attach ID documents, scans, PDFs, photos, videos, etc to the entity if you wish and these may be processed later (using the /scan function) to extract useful information. Or you can manually supply the  information if you choose.  If the entity is successfully created, take the details and documents provided, and set about verifying them all. So for example, you might extract:  * The name from the entity.name object * The address from the entity.address object * The DoB..  All documents that are attached to the entity will also be verified (if possible).  You can also specify the level of detail returned using the resultLevel parameter. You can choose \"summary\" or \"full\". For the \"profile\" check type you can also select \"simple\" to only get the entity profile result.  SPECIAL NOTE: A \"Full\" response includes details of all checks and how they map against each element, along with all the details of pep/sanctions/etc checks too.  Your account also needs to be configured to support a full response too (talk to your account manager for more information). If you're not configured for full responses, we'll only return summary level data regardless. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    check_type = 'default' # str | When creating a new check, you need to define the checks you wish to run.    The checkType is make up of a comma separated list of the types of check you wish to run. The order of the requested checks is not important, they will be re-ordered by the service and in some cases, depending on your account configuration, may be skipped.    The validation that is performed on the requested checks is to:   - ensure the check type is known   - is suitable for the type of entity (no KYC for organisations)   - disallow manual (mKYC) check with any other kind of KYC   - disallow mixing the \"profile\" check with any other kind of check.  The supported check types are:  Profile:   - \"profile\": By arrangement with Frankie we will create a \"profile\" check type that applies checks according to a recipe that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles provide a pre-defined combination of individual checkTypes (see the list below). But they offer a lot more besides, including rules for determining default settings, inbuilt data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are a recent feature (since v1.4.0) but are now the default checkType to use with Frankie Financial.  **Individual Check Types**  Whilst we strongly recommend the use of the \"profile\" checktype, it does map of any combination of the types below. If you wish to use these individually, please contact developer support for more details on how to use these effectively.  Entity Checks - One of:   - \"one_plus\": Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \"two_plus\": Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \"id\": Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.   - \"visa\":    ID Validate - One of:   - \"idvalidate\": Checks to see if photo ID has had OCR scanning, ID document validation and photo comparison run against it. Can be used in conjunction with any of the KYC/ID/AML checks.    Manual Check:   - \"manual\": (mKYC) Checks user has a sufficient amount of operator verified ID and will then \"pass\" all Entity and ID related checks.    Fraud Checks - One or more of:   - \"fraudlist\": Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \"fraudcheck\": Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \"pep\": Will only run PEP/Sanctions checks (no identity verification)   - \"pep_media\": Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \"standard\" two_plus or one_plus (note, these can be overridden too).  (default to 'default')
    result_level = 'result_level_example' # str | How much detail we return.   Acceptable values are:   * simple - Only available with \"profile\" check type. Returns just an EntityProfileResultObject (which is also included for \"profile\" checks at the other result levels), and a CheckEntityCheckResultObjectEntityResult with just the entity details but no separate results.   * summary   * full - You need to have your account configured for this. 
    entity_details = openapi_client.EntityCheckDetailsObject() # EntityCheckDetailsObject | The entity and any associated / additional information to be checked
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Create and Verify Entity
        api_response = api_instance.create_check_entity(x_frankie_customer_id, check_type, result_level, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of EntityApi->create_check_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->create_check_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **check_type** | **str**| When creating a new check, you need to define the checks you wish to run.    The checkType is make up of a comma separated list of the types of check you wish to run. The order of the requested checks is not important, they will be re-ordered by the service and in some cases, depending on your account configuration, may be skipped.    The validation that is performed on the requested checks is to:   - ensure the check type is known   - is suitable for the type of entity (no KYC for organisations)   - disallow manual (mKYC) check with any other kind of KYC   - disallow mixing the \&quot;profile\&quot; check with any other kind of check.  The supported check types are:  Profile:   - \&quot;profile\&quot;: By arrangement with Frankie we will create a \&quot;profile\&quot; check type that applies checks according to a recipe that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles provide a pre-defined combination of individual checkTypes (see the list below). But they offer a lot more besides, including rules for determining default settings, inbuilt data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are a recent feature (since v1.4.0) but are now the default checkType to use with Frankie Financial.  **Individual Check Types**  Whilst we strongly recommend the use of the \&quot;profile\&quot; checktype, it does map of any combination of the types below. If you wish to use these individually, please contact developer support for more details on how to use these effectively.  Entity Checks - One of:   - \&quot;one_plus\&quot;: Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \&quot;two_plus\&quot;: Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \&quot;id\&quot;: Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.   - \&quot;visa\&quot;:    ID Validate - One of:   - \&quot;idvalidate\&quot;: Checks to see if photo ID has had OCR scanning, ID document validation and photo comparison run against it. Can be used in conjunction with any of the KYC/ID/AML checks.    Manual Check:   - \&quot;manual\&quot;: (mKYC) Checks user has a sufficient amount of operator verified ID and will then \&quot;pass\&quot; all Entity and ID related checks.    Fraud Checks - One or more of:   - \&quot;fraudlist\&quot;: Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \&quot;fraudcheck\&quot;: Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \&quot;pep\&quot;: Will only run PEP/Sanctions checks (no identity verification)   - \&quot;pep_media\&quot;: Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \&quot;standard\&quot; two_plus or one_plus (note, these can be overridden too).  | [default to &#39;default&#39;]
 **result_level** | **str**| How much detail we return.   Acceptable values are:   * simple - Only available with \&quot;profile\&quot; check type. Returns just an EntityProfileResultObject (which is also included for \&quot;profile\&quot; checks at the other result levels), and a CheckEntityCheckResultObjectEntityResult with just the entity details but no separate results.   * summary   * full - You need to have your account configured for this.  | 
 **entity_details** | [**EntityCheckDetailsObject**](EntityCheckDetailsObject.md)| The entity and any associated / additional information to be checked | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_check_entity_push_to_mobile**
> AcceptedEntityResultObject create_check_entity_push_to_mobile(x_frankie_customer_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, nopush=nopush)

Create Entity and Push Self-Verification Link

Create an entity object and begin the process of verification after pushing a message to a mobile number.  The entity will receive a link on their mobile and will then be guided through a series of steps to capture and OCR scan their ID, and perform a selfie comparison. We'll then attempt to verify the data received and push a notification back to the calling customer.  At a minimum, you will need to supply the name and a MOBILE_PHONE document type.   SPECIAL NOTE: This will only ever return a 202 response if successfully accepted. You will need to ensure your account is configured for push notifications. Contact developer supprt to arrange this. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.accepted_entity_result_object import AcceptedEntityResultObject
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_details = openapi_client.EntityCheckDetailsObject() # EntityCheckDetailsObject | The entity and any associated / additional information to be checked
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    nopush = True # bool | If set to true, then no SMS/email will be pushed. It will be up to the API caller to manage the delivery of the link.  (optional)

    try:
        # Create Entity and Push Self-Verification Link
        api_response = api_instance.create_check_entity_push_to_mobile(x_frankie_customer_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, nopush=nopush)
        print("The response of EntityApi->create_check_entity_push_to_mobile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->create_check_entity_push_to_mobile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_details** | [**EntityCheckDetailsObject**](EntityCheckDetailsObject.md)| The entity and any associated / additional information to be checked | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **nopush** | **bool**| If set to true, then no SMS/email will be pushed. It will be up to the API caller to manage the delivery of the link.  | [optional] 

### Return type

[**AcceptedEntityResultObject**](AcceptedEntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_entity**
> EntityResultObject create_entity(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, entity=entity)

Create New Entity.

Create an entity object. An entity object can be used to simply store data around a given identity. You can attach ID documents, scans, PDFs, photos, videos, etc to the entity if you wish and these may be processed later (using the /scan function) to extract useful information. Or you can manually supply the  information if you choose.  Entity objects can be used to run a check, using the data held in the records. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_object import EntityObject
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    entity = openapi_client.EntityObject() # EntityObject |  (optional)

    try:
        # Create New Entity.
        api_response = api_instance.create_entity(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, entity=entity)
        print("The response of EntityApi->create_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->create_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **entity** | [**EntityObject**](EntityObject.md)|  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_entity_get_idv_token**
> EntityIDVResultObject create_entity_get_idv_token(x_frankie_customer_id, entity_idv_details, x_frankie_customer_child_id=x_frankie_customer_child_id)

Create Entity and Get IDV Token

Create an entity object and if successful, obtain a token for use in an ID Validation service SDK (web or native app)   At a minimum, you will need to supply:  - the entity familyName.   - the entity givenName    For best results, you should gather the DoB, address, ID document details as well before  calling the initProcess function.  SPECIAL NOTE 1: Tokens have a limited lifespan, typically only 1 hour. Make sure you've used it or you will need to create another using update version of this function.   SPECIAL NOTE 2: This function will need to be followed up with a call to /entity/{id}/idvalidate/initProcess once you've collected all your data in your app/web capture process. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_idv_details_object import EntityIDVDetailsObject
from openapi_client.models.entity_idv_result_object import EntityIDVResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_idv_details = openapi_client.EntityIDVDetailsObject() # EntityIDVDetailsObject | The entity and required data to generate an IDV token
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Create Entity and Get IDV Token
        api_response = api_instance.create_entity_get_idv_token(x_frankie_customer_id, entity_idv_details, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->create_entity_get_idv_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->create_entity_get_idv_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_idv_details** | [**EntityIDVDetailsObject**](EntityIDVDetailsObject.md)| The entity and required data to generate an IDV token | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityIDVResultObject**](EntityIDVResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested.  Also returned is the applicantId and token to be in the IDV process.  |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_entity**
> BasicStatusResultObject delete_entity(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Delete Entity

Marks the entity as deleted in the system, and no further operations or general queries may be executed against it by the Customer. If another customer is presently relying on this data, it will still be available to them (but only in the partially anonymised form they originally had.  An entity and its related data is only completely deleted from the database when either:    - a) There are no more references to it (i.e. it has been DELETEd by all Customers relying on the data), and 12 months have passed.      - b) The actual consumer who owns the data makes a direct request. If this occurs, then all subscribing Customers will be notified that this entity has been removed and they will need to contact them if needed in order to update their own records again. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.basic_status_result_object import BasicStatusResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Delete Entity
        api_response = api_instance.delete_entity(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of EntityApi->delete_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->delete_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**BasicStatusResultObject**](BasicStatusResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Returns a simple status to indicate that the deletion has taken place.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_entity**
> EntityResultObject query_entity(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id)

Retrieve Entity Details

Query the current status and details of a given entityId. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Retrieve Entity Details
        api_response = api_instance.query_entity(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->query_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->query_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_entity_checks**
> CheckEntityCheckResultObject query_entity_checks(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, alldata=alldata)

Retrieve Entity Verication Check Details 

Get the complete list of all checks that have been performed upon a given entity and its documents, including the checks that have been performed by others (in those cases you just get the id, status and date run, none of the details). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    alldata = True # bool | Requests that literally all data should be included in the response to a \"get checks\" request. This is as opposed to a filtered view where expired results are by default not included for entities that have an assigned profile.  (optional)

    try:
        # Retrieve Entity Verication Check Details 
        api_response = api_instance.query_entity_checks(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, alldata=alldata)
        print("The response of EntityApi->query_entity_checks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->query_entity_checks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **alldata** | **bool**| Requests that literally all data should be included in the response to a \&quot;get checks\&quot; request. This is as opposed to a filtered view where expired results are by default not included for entities that have an assigned profile.  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_entity_full**
> EntityResultObject query_entity_full(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id)

Retrieve Entity Details and Document Scan Data 

Query the current status and details of a given entityId. Also returns all attached document file data, not just the metadata. Equivalent to a get /document/{documentId}/full) 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Retrieve Entity Details and Document Scan Data 
        api_response = api_instance.query_entity_full(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->query_entity_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->query_entity_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_entity**
> EntitySearchResultObject search_entity(x_frankie_customer_id, search_entity, x_frankie_customer_child_id=x_frankie_customer_child_id)

Search for Entity

 Search for an existing entity that matches the criteria supplied  Criteria are supplied in the form of a populated entity object, with the name/address/DoB details supplied. You can also include documents that can be used to further refine your search (see the /document/search function for minimum requirements for a document search)  At an absolute minimum, you must supply one of the following combinations:    * name.familyName +   * name.givenNames      or      * name.familyName +   * one identityDocument object (that meets minimum criteria)    Obviously, the more data you provide, the better search results we can provide.  The service will return a list of matching entities with confidence levels.  If you are the \"owner\" of the entity - i.e. the same CustomerID and CustomerChildID (if relevant) - then the full details of the entity and any owned documents will be returned, except for the contents of any attached scans.  If you are not the owner of the entity (or linked documents), then just the ID and confidence level is returned. You can still use this ID to retrieve any check results (see GET  /entity/{entityId}/checks and GET /document/{documentId}/checks)  Note: This functionality must be enabled by Frankie administrators. Please contact your sales representative if you wish to discuss this. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_object import EntityObject
from openapi_client.models.entity_search_result_object import EntitySearchResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    search_entity = openapi_client.EntityObject() # EntityObject | An entity object with the parameters you wish to search on. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Search for Entity
        api_response = api_instance.search_entity(x_frankie_customer_id, search_entity, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->search_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->search_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **search_entity** | [**EntityObject**](EntityObject.md)| An entity object with the parameters you wish to search on.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntitySearchResultObject**](EntitySearchResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Returns a list of potentially matching entity or entity references, along with a confidence level in the match.  |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_check_class_result**
> CheckEntityCheckResultObject update_check_class_result(x_frankie_customer_id, entity_id, check_id, check_class, check_class_id, status, x_frankie_customer_child_id=x_frankie_customer_child_id, undo=undo)

Update Check Result State

Internal only  Update a given KYC or AML check result status in order to force a re-evaluation of the overall check result. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    check_id = 'check_id_example' # str | The checkId returned previously from an earlier call to */verify
    check_class = 'check_class_example' # str | Specify which check Class this action will apply to (PRO, BCRO etc.). Valid values are:   - \"pro\": Update a Process Result Object   - \"bcro\": Update a Background Check Result Object. The class IDs in the request must be the IDs from Background Check Result Object Containers.   - \"fraudlist\": Update a fraud list Process Result Object. The class IDs in the request must be check sources from fraudlist Process Result Objects. 
    check_class_id = 'check_class_id_example' # str | A PRO/BCRO ID 
    status = 'status_example' # str | Set the new status of the Check Class (PRO/BCRO). Valid values are:   - \"unknown\"   - \"true_positive\"   - \"true_positive_accept\"   - \"true_positive_reject\"   - \"false_positive\"   - \"stale\" 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    undo = True # bool | Undo a prior operation.  (optional)

    try:
        # Update Check Result State
        api_response = api_instance.update_check_class_result(x_frankie_customer_id, entity_id, check_id, check_class, check_class_id, status, x_frankie_customer_child_id=x_frankie_customer_child_id, undo=undo)
        print("The response of EntityApi->update_check_class_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_check_class_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **check_id** | **str**| The checkId returned previously from an earlier call to */verify | 
 **check_class** | **str**| Specify which check Class this action will apply to (PRO, BCRO etc.). Valid values are:   - \&quot;pro\&quot;: Update a Process Result Object   - \&quot;bcro\&quot;: Update a Background Check Result Object. The class IDs in the request must be the IDs from Background Check Result Object Containers.   - \&quot;fraudlist\&quot;: Update a fraud list Process Result Object. The class IDs in the request must be check sources from fraudlist Process Result Objects.  | 
 **check_class_id** | **str**| A PRO/BCRO ID  | 
 **status** | **str**| Set the new status of the Check Class (PRO/BCRO). Valid values are:   - \&quot;unknown\&quot;   - \&quot;true_positive\&quot;   - \&quot;true_positive_accept\&quot;   - \&quot;true_positive_reject\&quot;   - \&quot;false_positive\&quot;   - \&quot;stale\&quot;  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **undo** | **bool**| Undo a prior operation.  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_check_class_results**
> CheckEntityCheckResultObject update_check_class_results(x_frankie_customer_id, entity_id, check_id, check_class, check_result_update, x_frankie_customer_child_id=x_frankie_customer_child_id)

Update Check Result States (Batch)

Internal only  Update a given set of KYC and/or AML check result statuses in order to force a re-evaluation of the overall check result. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.models.check_result_update_object import CheckResultUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    check_id = 'check_id_example' # str | The checkId returned previously from an earlier call to */verify
    check_class = 'check_class_example' # str | Specify which check Class this action will apply to (PRO, BCRO etc.). Valid values are:   - \"pro\": Update a Process Result Object   - \"bcro\": Update a Background Check Result Object. The class IDs in the request must be the IDs from Background Check Result Object Containers.   - \"fraudlist\": Update a fraud list Process Result Object. The class IDs in the request must be check sources from fraudlist Process Result Objects. 
    check_result_update = openapi_client.CheckResultUpdateObject() # CheckResultUpdateObject | The check result status change details to apply
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Update Check Result States (Batch)
        api_response = api_instance.update_check_class_results(x_frankie_customer_id, entity_id, check_id, check_class, check_result_update, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->update_check_class_results:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_check_class_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **check_id** | **str**| The checkId returned previously from an earlier call to */verify | 
 **check_class** | **str**| Specify which check Class this action will apply to (PRO, BCRO etc.). Valid values are:   - \&quot;pro\&quot;: Update a Process Result Object   - \&quot;bcro\&quot;: Update a Background Check Result Object. The class IDs in the request must be the IDs from Background Check Result Object Containers.   - \&quot;fraudlist\&quot;: Update a fraud list Process Result Object. The class IDs in the request must be check sources from fraudlist Process Result Objects.  | 
 **check_result_update** | [**CheckResultUpdateObject**](CheckResultUpdateObject.md)| The check result status change details to apply | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_check_entity**
> CheckEntityCheckResultObject update_check_entity(x_frankie_customer_id, entity_id, check_type, result_level, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, force=force, no_invalidate=no_invalidate)

Update Entity and Verify Details

Take the details and documents provided in the entity, and set about verifying them all. So for example, you might extract:  * The name from the entity.name object * The address from the entity.address object * The DoB..  All documents that are presently attached to the entity will also be verified (if requested)  You can also specify the level of detail returned using the resultLevel parameter. You can choose \"summary\" or \"full\". For the \"profile\" check type you can also select \"simple\" to only get the entity profile result.  SPECIAL NOTE: A \"Full\" response includes details of all checks and how they map against each element, along with all the details of pep/sanctions/etc checks too.  Your account also needs to be configured to support a full response too (talk to your account manager for more information). If you're not configured for full responses, we'll only return summary level data regardless. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    check_type = 'default' # str | When creating a new check, you need to define the checks you wish to run.    The checkType is make up of a comma separated list of the types of check you wish to run. The order of the requested checks is not important, they will be re-ordered by the service and in some cases, depending on your account configuration, may be skipped.    The validation that is performed on the requested checks is to:   - ensure the check type is known   - is suitable for the type of entity (no KYC for organisations)   - disallow manual (mKYC) check with any other kind of KYC   - disallow mixing the \"profile\" check with any other kind of check.  The supported check types are:  Profile:   - \"profile\": By arrangement with Frankie we will create a \"profile\" check type that applies checks according to a recipe that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles provide a pre-defined combination of individual checkTypes (see the list below). But they offer a lot more besides, including rules for determining default settings, inbuilt data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are a recent feature (since v1.4.0) but are now the default checkType to use with Frankie Financial.  **Individual Check Types**  Whilst we strongly recommend the use of the \"profile\" checktype, it does map of any combination of the types below. If you wish to use these individually, please contact developer support for more details on how to use these effectively.  Entity Checks - One of:   - \"one_plus\": Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \"two_plus\": Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \"id\": Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.   - \"visa\":    ID Validate - One of:   - \"idvalidate\": Checks to see if photo ID has had OCR scanning, ID document validation and photo comparison run against it. Can be used in conjunction with any of the KYC/ID/AML checks.    Manual Check:   - \"manual\": (mKYC) Checks user has a sufficient amount of operator verified ID and will then \"pass\" all Entity and ID related checks.    Fraud Checks - One or more of:   - \"fraudlist\": Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \"fraudcheck\": Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \"pep\": Will only run PEP/Sanctions checks (no identity verification)   - \"pep_media\": Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \"standard\" two_plus or one_plus (note, these can be overridden too).  (default to 'default')
    result_level = 'result_level_example' # str | How much detail we return.   Acceptable values are:   * simple - Only available with \"profile\" check type. Returns just an EntityProfileResultObject (which is also included for \"profile\" checks at the other result levels), and a CheckEntityCheckResultObjectEntityResult with just the entity details but no separate results.   * summary   * full - You need to have your account configured for this. 
    entity_details = openapi_client.EntityCheckDetailsObject() # EntityCheckDetailsObject | The entity to be checked
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    force = True # bool | Force the verification to run, overriding any data aging or past check  (optional)
    no_invalidate = True # bool | Disable check result invalidation for this update request.  (optional)

    try:
        # Update Entity and Verify Details
        api_response = api_instance.update_check_entity(x_frankie_customer_id, entity_id, check_type, result_level, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, force=force, no_invalidate=no_invalidate)
        print("The response of EntityApi->update_check_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_check_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **check_type** | **str**| When creating a new check, you need to define the checks you wish to run.    The checkType is make up of a comma separated list of the types of check you wish to run. The order of the requested checks is not important, they will be re-ordered by the service and in some cases, depending on your account configuration, may be skipped.    The validation that is performed on the requested checks is to:   - ensure the check type is known   - is suitable for the type of entity (no KYC for organisations)   - disallow manual (mKYC) check with any other kind of KYC   - disallow mixing the \&quot;profile\&quot; check with any other kind of check.  The supported check types are:  Profile:   - \&quot;profile\&quot;: By arrangement with Frankie we will create a \&quot;profile\&quot; check type that applies checks according to a recipe that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles provide a pre-defined combination of individual checkTypes (see the list below). But they offer a lot more besides, including rules for determining default settings, inbuilt data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are a recent feature (since v1.4.0) but are now the default checkType to use with Frankie Financial.  **Individual Check Types**  Whilst we strongly recommend the use of the \&quot;profile\&quot; checktype, it does map of any combination of the types below. If you wish to use these individually, please contact developer support for more details on how to use these effectively.  Entity Checks - One of:   - \&quot;one_plus\&quot;: Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \&quot;two_plus\&quot;: Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \&quot;id\&quot;: Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.   - \&quot;visa\&quot;:    ID Validate - One of:   - \&quot;idvalidate\&quot;: Checks to see if photo ID has had OCR scanning, ID document validation and photo comparison run against it. Can be used in conjunction with any of the KYC/ID/AML checks.    Manual Check:   - \&quot;manual\&quot;: (mKYC) Checks user has a sufficient amount of operator verified ID and will then \&quot;pass\&quot; all Entity and ID related checks.    Fraud Checks - One or more of:   - \&quot;fraudlist\&quot;: Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \&quot;fraudcheck\&quot;: Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \&quot;pep\&quot;: Will only run PEP/Sanctions checks (no identity verification)   - \&quot;pep_media\&quot;: Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \&quot;standard\&quot; two_plus or one_plus (note, these can be overridden too).  | [default to &#39;default&#39;]
 **result_level** | **str**| How much detail we return.   Acceptable values are:   * simple - Only available with \&quot;profile\&quot; check type. Returns just an EntityProfileResultObject (which is also included for \&quot;profile\&quot; checks at the other result levels), and a CheckEntityCheckResultObjectEntityResult with just the entity details but no separate results.   * summary   * full - You need to have your account configured for this.  | 
 **entity_details** | [**EntityCheckDetailsObject**](EntityCheckDetailsObject.md)| The entity to be checked | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **force** | **bool**| Force the verification to run, overriding any data aging or past check  | [optional] 
 **no_invalidate** | **bool**| Disable check result invalidation for this update request.  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_check_entity_push_to_mobile**
> AcceptedEntityResultObject update_check_entity_push_to_mobile(x_frankie_customer_id, entity_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, nopush=nopush, phase=phase)

Update Entity and Push Self-Verification Link

Update an existing entity object and begin the process of verification after pushing a message to a mobile number.  The entity will receive a link on their mobile and will then be guided through a series of steps to capture and OCR scan their ID, and perform a selfie comparison. We'll then attempt to verify the data received and push a notification back to the calling customer.  At a minimum, you will need to supply the name and a MOBILE_PHONE document type.         If you wish to skip the detail capture and jump straight to the ID and selfie capture, the append the call with the ?phase=2 parameter.   SPECIAL NOTE: This will only ever return a 202 response if successfully accepted. You will need to ensure your account is configured for push notifications. Contact developer supprt to arrange this. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.accepted_entity_result_object import AcceptedEntityResultObject
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    entity_details = openapi_client.EntityCheckDetailsObject() # EntityCheckDetailsObject | The entity and any associated / additional information to be checked
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    nopush = True # bool | If set to true, then no SMS/email will be pushed. It will be up to the API caller to manage the delivery of the link.  (optional)
    phase = 56 # int | Set the Push To Mobile phase.  Currently supported values: - 2  (optional)

    try:
        # Update Entity and Push Self-Verification Link
        api_response = api_instance.update_check_entity_push_to_mobile(x_frankie_customer_id, entity_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, nopush=nopush, phase=phase)
        print("The response of EntityApi->update_check_entity_push_to_mobile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_check_entity_push_to_mobile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **entity_details** | [**EntityCheckDetailsObject**](EntityCheckDetailsObject.md)| The entity and any associated / additional information to be checked | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **nopush** | **bool**| If set to true, then no SMS/email will be pushed. It will be up to the API caller to manage the delivery of the link.  | [optional] 
 **phase** | **int**| Set the Push To Mobile phase.  Currently supported values: - 2  | [optional] 

### Return type

[**AcceptedEntityResultObject**](AcceptedEntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_entity**
> EntityResultObject update_entity(x_frankie_customer_id, entity_id, entity, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, no_invalidate=no_invalidate)

Update Existing Entity.

Using a previously uploaded but incomplete Entity, you can optionally supply updated details (such as corrections on a previous address), along with one or more additional ID docs/scans (e.g. new documents to parse, etc). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_object import EntityObject
from openapi_client.models.entity_result_object import EntityResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    entity = openapi_client.EntityObject() # EntityObject | The entity to be updated
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    no_invalidate = True # bool | Disable check result invalidation for this update request.  (optional)

    try:
        # Update Existing Entity.
        api_response = api_instance.update_entity(x_frankie_customer_id, entity_id, entity, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, no_invalidate=no_invalidate)
        print("The response of EntityApi->update_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **entity** | [**EntityObject**](EntityObject.md)| The entity to be updated | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **no_invalidate** | **bool**| Disable check result invalidation for this update request.  | [optional] 

### Return type

[**EntityResultObject**](EntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_entity_get_idv_token**
> EntityIDVResultObject update_entity_get_idv_token(x_frankie_customer_id, entity_id, entity_idv_details, x_frankie_customer_child_id=x_frankie_customer_child_id)

Update Entity and Get IDV Token

Update an entity object and if successful, obtain a token for use in an ID Validation service SDK (web or native app)   At a minimum, the entity will need to have a name. For best results, you should gather the DoB, address, ID document details as well before calling the initProcess function.  SPECIAL NOTE 1: Tokens have a limited lifespan, typically only 1 hour. Make sure you've used it or you will need to create another using update version of this function.   SPECIAL NOTE 2: This function will need to be followed up with a call to /entity/{id}/idvalidate/initProcess once you've collected all your data in your app/web capture process. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_idv_details_object import EntityIDVDetailsObject
from openapi_client.models.entity_idv_result_object import EntityIDVResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    entity_idv_details = openapi_client.EntityIDVDetailsObject() # EntityIDVDetailsObject | The entity to update and required data to generate an IDV token
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Update Entity and Get IDV Token
        api_response = api_instance.update_entity_get_idv_token(x_frankie_customer_id, entity_id, entity_idv_details, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->update_entity_get_idv_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_entity_get_idv_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **entity_idv_details** | [**EntityIDVDetailsObject**](EntityIDVDetailsObject.md)| The entity to update and required data to generate an IDV token | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityIDVResultObject**](EntityIDVResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested.  Also returned is the applicantId and token to be in the IDV process.  |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_entity_init_idv_process**
> EntityIDVResultObject update_entity_init_idv_process(x_frankie_customer_id, entity_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id)

Update Entity and Initiate IDV Process

Update an entity object and if successful, start the process of downloading the captured data and processing the reports and results of the ID validation process.   At a minimum, the entity will need to have a name. For best results, you should gather the DoB, address, ID document details as well before calling this initProcess function, or supply the details as part of this update. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.entity_check_details_object import EntityCheckDetailsObject
from openapi_client.models.entity_idv_result_object import EntityIDVResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    entity_details = openapi_client.EntityCheckDetailsObject() # EntityCheckDetailsObject | The entity to update
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Update Entity and Initiate IDV Process
        api_response = api_instance.update_entity_init_idv_process(x_frankie_customer_id, entity_id, entity_details, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of EntityApi->update_entity_init_idv_process:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_entity_init_idv_process: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **entity_details** | [**EntityCheckDetailsObject**](EntityCheckDetailsObject.md)| The entity to update | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**EntityIDVResultObject**](EntityIDVResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested.  Also returned is the applicantId and token to be in the IDV process.  |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_entity_state**
> CheckEntityCheckResultObject update_entity_state(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, set=set, risk=risk, comment=comment)

Update Entity States

Internal only  Add a special internal 'entity result' to superceed any previous real checks until the next one. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EntityApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    set = 'set_example' # str | The status of an entity. Valid values are:   - \"wait\": Waiting for new details from entity.   - \"fail\": Manually fail the onboarding process.   - \"archived\": Hide entity from on onboarding.   - \"clear\": Remove any of the above manual states as well as any manual risk.   - \"inactive\": Hide entity and prevent any further operations on it. Cannot be cleared.  (optional)
    risk = 'risk_example' # str | The risk override setting for an entity. This value will be used until a verify result updates a real risk factor. Valid values are:   - \"low\"   - \"medium\"   - \"high\"   - \"unacceptable\"   - \"significant\"  (optional)
    comment = 'comment_example' # str | A comment describing the reason for a request.  (optional)

    try:
        # Update Entity States
        api_response = api_instance.update_entity_state(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, set=set, risk=risk, comment=comment)
        print("The response of EntityApi->update_entity_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntityApi->update_entity_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **set** | **str**| The status of an entity. Valid values are:   - \&quot;wait\&quot;: Waiting for new details from entity.   - \&quot;fail\&quot;: Manually fail the onboarding process.   - \&quot;archived\&quot;: Hide entity from on onboarding.   - \&quot;clear\&quot;: Remove any of the above manual states as well as any manual risk.   - \&quot;inactive\&quot;: Hide entity and prevent any further operations on it. Cannot be cleared.  | [optional] 
 **risk** | **str**| The risk override setting for an entity. This value will be used until a verify result updates a real risk factor. Valid values are:   - \&quot;low\&quot;   - \&quot;medium\&quot;   - \&quot;high\&quot;   - \&quot;unacceptable\&quot;   - \&quot;significant\&quot;  | [optional] 
 **comment** | **str**| A comment describing the reason for a request.  | [optional] 

### Return type

[**CheckEntityCheckResultObject**](CheckEntityCheckResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the entity object as it stands now. No docScan file data from any attached ID documents will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

