# openapi_client.BusinessApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**business_ownership_query**](BusinessApi.md#business_ownership_query) | **POST** /business/ownership/query | Create Business Entity and Query UBO (AUS Only)
[**check_organisation**](BusinessApi.md#check_organisation) | **POST** /business/{entityId}/verify | Run KYC/AML Checks on Organisation and/or Associated Individuals.
[**international_business_profile**](BusinessApi.md#international_business_profile) | **POST** /business/international/profile | Retrieve a business profile from any country (AUS included).
[**international_business_search**](BusinessApi.md#international_business_search) | **POST** /business/international/search | Search for a business from any country (AUS included).
[**run_business_reports**](BusinessApi.md#run_business_reports) | **POST** /business/reports | Run Report(s) against a new or existing organisation entity (AUS Only).


# **business_ownership_query**
> OrganisationCheckResponseObject business_ownership_query(x_frankie_customer_id, query, x_frankie_customer_child_id=x_frankie_customer_child_id, check_type=check_type, entity_categories=entity_categories, result_level=result_level, validation=validation, generate_report=generate_report, include_historical=include_historical, only_profile=only_profile)

Create Business Entity and Query UBO (AUS Only)

Process a request for ownership details for an Australian organisation.  See below for more generic international queries.  At a minimum, you just need to supply an ACN or ABN and we can retrieve the rest. You also have the option of supplying company name, type (as per ABR types) and both ABN/ACN and we'll attempt to verfy that that data matches what is on record before attempting any further verification and validation.  KYC/AML for a selection of entities associated with an organisation and/or the organisation itself can optionally be run, but not by default. To enable KYC/AML checks one or more entity categories must be provided. If such a list of entity categories is given then default checks based on configuration will be run for those categories. If a check type is also provided in the request then that type will be used for entities representing individual entities, and the AML subset of that check will be used for organisations if any. Specifying a check type without an entity category will result in an error.  NOTE: This query will always run asynchronously and you will only ever be returned a 202 ACCEPT response, or an error. Results will be pushed using the Push Notification API below and you will be able to retrieve the results using the Retrieve API.  We have supplied the 200 response in the definition below only so what will be sent to you when you later retrieve the details.  More details on how to use this API and interpret the results can be found here:      https://apidocs.frankiefinancial.com/docs/which-function-to-use 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.organisation_check_response_object import OrganisationCheckResponseObject
from openapi_client.models.ownership_query import OwnershipQuery
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
    api_instance = openapi_client.BusinessApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    query = openapi_client.OwnershipQuery() # OwnershipQuery | The organisation to be queried. An entity object that must have an organisation object with at least one organisation number. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    check_type = ['check_type_example'] # List[str] | When creating a new check, we need to define the checks we wish to run. If this parameter is not supplied then the check will be based on a configured check type for each entity category.    The checkType is make up of a comma separated list of the types of check we wish to run.  The order is important, and must be of the form:   - Entity Check (if you're running this). Choose one from the available options   - ID Check (If you want this)   - PEP Checks (again if you want this, choose one of the options)  Entity Checks - One of:   - \"one_plus\": Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \"two_plus\": Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \"id\": Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.    Fraud Checks - One or more  of:   - \"fraudlist\": Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \"fraudid\": Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \"pep\": Will only run PEP/Sanctions checks (no identity verification)   - \"pep_media\": Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Pre-defined combinations:   - \"full\": equivalent to \"two_plus,id,pep_media\" or \"pep_media\" if the target is an organisation.   - \"default\": Currently defined as \"two_plus,id\" or \"pep\" if the target is an organisation.  Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \"standard\" two_plus or one_plus (note, these can be overridden too).    Profile:   - \"profile\": By arrangement with Frankie you can have a \"profile\" check type that applies checks according to a profile that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles act a little like the Pre-defined combinations above in that they can map to a defined list. But they offer a lot more besides, including rules for determining default settings, inbuild data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are the future of checks with Frankie Financial.  (optional)
    entity_categories = ['entity_categories_example'] # List[str] | A comma separated list that specifies the categories of entities associated with the target organisation that will be checked.    - organisation - Just the organisation itself.   - ubos - All ultimate beneficial owners.   - pseudo_ubos - Use an alterntive category when an organisation has no actual UBOs. The actual category to use is defined via configuration, default is no alterntive category.   - direct_owners - All direct owners of the company, both organisations and individuals, may include UBOs for for simple ownership.   - officers - All officers of the company   - officers_directors - All directors of the company   - officers_other - All non-director officers of the company   - all - All direct and indirect owners, both organisations and individuals (including UBOs), and officers of all organisations.  (optional)
    result_level = summary # str | The result level allows you to specify the level of detail returned for the entity check. You can choose summary or full.  (optional) (default to summary)
    validation = 'validation_example' # str | Should a validation check be run before the ownership query. The default is specified via configuration. The validation checks to see if the provided organisation is suitable for an ownership query by looking for the ACN in public data sources.  Options are: - \"on\": Validate only when ACN is not provided. This is the typical default. - \"acn\": Validate even if ACN is provided. - \"only\": Like \"acn\" but only do validation query, don't proceed with ownership query. This option cannot be set as the default via configuration. - \"off\": Never validate. The Ownership query will then fail if an ACN is not provided.  (optional)
    generate_report = 'generate_report_example' # str | The type of human readable report, if any, to generate based on the ownership query results.  (optional)
    include_historical = True # bool | If set to true, historical ownership data will be requested.  (optional)
    only_profile = True # bool | If set to true, a full UBO report will not be requested.  (optional)

    try:
        # Create Business Entity and Query UBO (AUS Only)
        api_response = api_instance.business_ownership_query(x_frankie_customer_id, query, x_frankie_customer_child_id=x_frankie_customer_child_id, check_type=check_type, entity_categories=entity_categories, result_level=result_level, validation=validation, generate_report=generate_report, include_historical=include_historical, only_profile=only_profile)
        print("The response of BusinessApi->business_ownership_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessApi->business_ownership_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **query** | [**OwnershipQuery**](OwnershipQuery.md)| The organisation to be queried. An entity object that must have an organisation object with at least one organisation number.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **check_type** | [**List[str]**](str.md)| When creating a new check, we need to define the checks we wish to run. If this parameter is not supplied then the check will be based on a configured check type for each entity category.    The checkType is make up of a comma separated list of the types of check we wish to run.  The order is important, and must be of the form:   - Entity Check (if you&#39;re running this). Choose one from the available options   - ID Check (If you want this)   - PEP Checks (again if you want this, choose one of the options)  Entity Checks - One of:   - \&quot;one_plus\&quot;: Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \&quot;two_plus\&quot;: Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \&quot;id\&quot;: Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.    Fraud Checks - One or more  of:   - \&quot;fraudlist\&quot;: Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \&quot;fraudid\&quot;: Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \&quot;pep\&quot;: Will only run PEP/Sanctions checks (no identity verification)   - \&quot;pep_media\&quot;: Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Pre-defined combinations:   - \&quot;full\&quot;: equivalent to \&quot;two_plus,id,pep_media\&quot; or \&quot;pep_media\&quot; if the target is an organisation.   - \&quot;default\&quot;: Currently defined as \&quot;two_plus,id\&quot; or \&quot;pep\&quot; if the target is an organisation.  Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \&quot;standard\&quot; two_plus or one_plus (note, these can be overridden too).    Profile:   - \&quot;profile\&quot;: By arrangement with Frankie you can have a \&quot;profile\&quot; check type that applies checks according to a profile that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles act a little like the Pre-defined combinations above in that they can map to a defined list. But they offer a lot more besides, including rules for determining default settings, inbuild data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are the future of checks with Frankie Financial.  | [optional] 
 **entity_categories** | [**List[str]**](str.md)| A comma separated list that specifies the categories of entities associated with the target organisation that will be checked.    - organisation - Just the organisation itself.   - ubos - All ultimate beneficial owners.   - pseudo_ubos - Use an alterntive category when an organisation has no actual UBOs. The actual category to use is defined via configuration, default is no alterntive category.   - direct_owners - All direct owners of the company, both organisations and individuals, may include UBOs for for simple ownership.   - officers - All officers of the company   - officers_directors - All directors of the company   - officers_other - All non-director officers of the company   - all - All direct and indirect owners, both organisations and individuals (including UBOs), and officers of all organisations.  | [optional] 
 **result_level** | **str**| The result level allows you to specify the level of detail returned for the entity check. You can choose summary or full.  | [optional] [default to summary]
 **validation** | **str**| Should a validation check be run before the ownership query. The default is specified via configuration. The validation checks to see if the provided organisation is suitable for an ownership query by looking for the ACN in public data sources.  Options are: - \&quot;on\&quot;: Validate only when ACN is not provided. This is the typical default. - \&quot;acn\&quot;: Validate even if ACN is provided. - \&quot;only\&quot;: Like \&quot;acn\&quot; but only do validation query, don&#39;t proceed with ownership query. This option cannot be set as the default via configuration. - \&quot;off\&quot;: Never validate. The Ownership query will then fail if an ACN is not provided.  | [optional] 
 **generate_report** | **str**| The type of human readable report, if any, to generate based on the ownership query results.  | [optional] 
 **include_historical** | **bool**| If set to true, historical ownership data will be requested.  | [optional] 
 **only_profile** | **bool**| If set to true, a full UBO report will not be requested.  | [optional] 

### Return type

[**OrganisationCheckResponseObject**](OrganisationCheckResponseObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | !!!! This response will never be sent synchronously !!!!  This is what you will find in the payload of a retrieved response should the ownership query succeed.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_organisation**
> AcceptedEntityResultObject check_organisation(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, check_type=check_type, entity_categories=entity_categories, result_level=result_level, generate_report=generate_report)

Run KYC/AML Checks on Organisation and/or Associated Individuals.

Run KYC/AML for a selection of entities associated with an organisation and/or the organisation itself based on a previous ownership query. By default AML will be checked for just the organisation itself. If a list of entity categories is given then default checks based on configuration will be run for those categories. If a check type is also provided in the request then that type will be used for entities representing individual entities, and the AML subset of that check will be used for organisations if any. If no ownership query has been run, then this operation will return an error. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.accepted_entity_result_object import AcceptedEntityResultObject
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
    api_instance = openapi_client.BusinessApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    entity_id = 'entity_id_example' # str | The entityId returned previously from an earlier call to /check or /entity
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    check_type = ['check_type_example'] # List[str] | When creating a new check, we need to define the checks we wish to run. If this parameter is not supplied then the check will be based on a configured check type for each entity category.    The checkType is make up of a comma separated list of the types of check we wish to run.  The order is important, and must be of the form:   - Entity Check (if you're running this). Choose one from the available options   - ID Check (If you want this)   - PEP Checks (again if you want this, choose one of the options)  Entity Checks - One of:   - \"one_plus\": Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \"two_plus\": Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \"id\": Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.    Fraud Checks - One or more  of:   - \"fraudlist\": Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \"fraudid\": Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \"pep\": Will only run PEP/Sanctions checks (no identity verification)   - \"pep_media\": Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Pre-defined combinations:   - \"full\": equivalent to \"two_plus,id,pep_media\" or \"pep_media\" if the target is an organisation.   - \"default\": Currently defined as \"two_plus,id\" or \"pep\" if the target is an organisation.  Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \"standard\" two_plus or one_plus (note, these can be overridden too).    Profile:   - \"profile\": By arrangement with Frankie you can have a \"profile\" check type that applies checks according to a profile that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles act a little like the Pre-defined combinations above in that they can map to a defined list. But they offer a lot more besides, including rules for determining default settings, inbuild data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are the future of checks with Frankie Financial.  (optional)
    entity_categories = ['entity_categories_example'] # List[str] | A comma separated list that specifies the categories of entities associated with the target organisation that will be checked.    - organisation - Just the organisation itself.   - ubos - All ultimate beneficial owners.   - pseudo_ubos - Use an alterntive category when an organisation has no actual UBOs. The actual category to use is defined via configuration, default is no alterntive category.   - direct_owners - All direct owners of the company, both organisations and individuals, may include UBOs for for simple ownership.   - officers - All officers of the company   - officers_directors - All directors of the company   - officers_other - All non-director officers of the company   - all - All direct and indirect owners, both organisations and individuals (including UBOs), and officers of all organisations.  (optional)
    result_level = summary # str | The result level allows you to specify the level of detail returned for the entity check. You can choose summary or full.  (optional) (default to summary)
    generate_report = 'generate_report_example' # str | The type of human readable report, if any, to generate based on the ownership query results.  (optional)

    try:
        # Run KYC/AML Checks on Organisation and/or Associated Individuals.
        api_response = api_instance.check_organisation(x_frankie_customer_id, entity_id, x_frankie_customer_child_id=x_frankie_customer_child_id, check_type=check_type, entity_categories=entity_categories, result_level=result_level, generate_report=generate_report)
        print("The response of BusinessApi->check_organisation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessApi->check_organisation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **entity_id** | **str**| The entityId returned previously from an earlier call to /check or /entity | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **check_type** | [**List[str]**](str.md)| When creating a new check, we need to define the checks we wish to run. If this parameter is not supplied then the check will be based on a configured check type for each entity category.    The checkType is make up of a comma separated list of the types of check we wish to run.  The order is important, and must be of the form:   - Entity Check (if you&#39;re running this). Choose one from the available options   - ID Check (If you want this)   - PEP Checks (again if you want this, choose one of the options)  Entity Checks - One of:   - \&quot;one_plus\&quot;: Checks name, address and DoB against a minimum of 1 data source. (also known as a 1+1)   - \&quot;two_plus\&quot;: Checks name, address and DoB against a minimum of 2 independent data sources (also known as a 2+2)  ID Checks - One of:   - \&quot;id\&quot;: Checks all of the identity documents, but not necessarily the entity itself independently. Use this in conjunction with a one_plus or two_plus for more.    Fraud Checks - One or more  of:   - \&quot;fraudlist\&quot;: Checks to see if the identity appears on any known fraud lists. Should be run after KYC/ID checks have passed.   - \&quot;fraudid\&quot;: Checks external ID services to see if details appear in fraud detection services (e.g. EmailAge or FraudNet)    PEP Checks - One of:   - \&quot;pep\&quot;: Will only run PEP/Sanctions checks (no identity verification)   - \&quot;pep_media\&quot;: Will run PEP/Sanctions checks, as well as watchlist and adverse media checks. (no identity verification)      * NOTE: These checks will ONLY run if either the KYC/ID checks have been run prior, or it is the only check requested.    Pre-defined combinations:   - \&quot;full\&quot;: equivalent to \&quot;two_plus,id,pep_media\&quot; or \&quot;pep_media\&quot; if the target is an organisation.   - \&quot;default\&quot;: Currently defined as \&quot;two_plus,id\&quot; or \&quot;pep\&quot; if the target is an organisation.  Custom:   - By arrangement with Frankie you can define your own KYC check type.      This will allow you to set the minimum number of matches for:     - name      - date of birth     - address     - government id      This allows for alternatives to the \&quot;standard\&quot; two_plus or one_plus (note, these can be overridden too).    Profile:   - \&quot;profile\&quot;: By arrangement with Frankie you can have a \&quot;profile\&quot; check type that applies checks according to a profile that you assign to the entity from a predefined set of profiles.      The profile to use will be taken from the entity.entityProfile field if set, or be run through a set of configurable rules to determine which one to use.      Profiles act a little like the Pre-defined combinations above in that they can map to a defined list. But they offer a lot more besides, including rules for determining default settings, inbuild data aging and other configurable features.   They also allow for a new result set top be returned that provides a more detailed and useful breakdown of the check/verification process.      Entity Profiles are the future of checks with Frankie Financial.  | [optional] 
 **entity_categories** | [**List[str]**](str.md)| A comma separated list that specifies the categories of entities associated with the target organisation that will be checked.    - organisation - Just the organisation itself.   - ubos - All ultimate beneficial owners.   - pseudo_ubos - Use an alterntive category when an organisation has no actual UBOs. The actual category to use is defined via configuration, default is no alterntive category.   - direct_owners - All direct owners of the company, both organisations and individuals, may include UBOs for for simple ownership.   - officers - All officers of the company   - officers_directors - All directors of the company   - officers_other - All non-director officers of the company   - all - All direct and indirect owners, both organisations and individuals (including UBOs), and officers of all organisations.  | [optional] 
 **result_level** | **str**| The result level allows you to specify the level of detail returned for the entity check. You can choose summary or full.  | [optional] [default to summary]
 **generate_report** | **str**| The type of human readable report, if any, to generate based on the ownership query results.  | [optional] 

### Return type

[**AcceptedEntityResultObject**](AcceptedEntityResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **international_business_profile**
> InternationalBusinessProfileResponse international_business_profile(x_frankie_customer_id, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)

Retrieve a business profile from any country (AUS included).

Using the Company Code retrieved from the search response (see above) you can pull back the details of the company.  The Frankie platform will save the details of the response as an ORGANISATION type entity with the profile attached as a report which you can potentially re-retrieve later if you wish. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.international_business_profile_criteria import InternationalBusinessProfileCriteria
from openapi_client.models.international_business_profile_response import InternationalBusinessProfileResponse
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
    api_instance = openapi_client.BusinessApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    organisation = openapi_client.InternationalBusinessProfileCriteria() # InternationalBusinessProfileCriteria | The country, cxompany code and optional registry of the organisation to be queried. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Retrieve a business profile from any country (AUS included).
        api_response = api_instance.international_business_profile(x_frankie_customer_id, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of BusinessApi->international_business_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessApi->international_business_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **organisation** | [**InternationalBusinessProfileCriteria**](InternationalBusinessProfileCriteria.md)| The country, cxompany code and optional registry of the organisation to be queried.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**InternationalBusinessProfileResponse**](InternationalBusinessProfileResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and was successfully processed. The search has been carried out and the results are attached. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **international_business_search**
> InternationalBusinessSearchResponse international_business_search(x_frankie_customer_id, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)

Search for a business from any country (AUS included).

Search for a given business name or business number across international business registers.  The search will return a list of matching companies that you can then potentially query using the international profile query (see below). Each search result will have a CompanyCode that you use to retrieve the specific company details using the profile function.  This process will not save any details from the search results. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.international_business_search_criteria import InternationalBusinessSearchCriteria
from openapi_client.models.international_business_search_response import InternationalBusinessSearchResponse
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
    api_instance = openapi_client.BusinessApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    organisation = openapi_client.InternationalBusinessSearchCriteria() # InternationalBusinessSearchCriteria | The country, name or business number of the organisation to be queried. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Search for a business from any country (AUS included).
        api_response = api_instance.international_business_search(x_frankie_customer_id, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of BusinessApi->international_business_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessApi->international_business_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **organisation** | [**InternationalBusinessSearchCriteria**](InternationalBusinessSearchCriteria.md)| The country, name or business number of the organisation to be queried.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**InternationalBusinessSearchResponse**](InternationalBusinessSearchResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and was successfully processed. The search has been carried out and the results are attached. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_business_reports**
> BusinessReportResponseDetails run_business_reports(x_frankie_customer_id, report_types, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)

Run Report(s) against a new or existing organisation entity (AUS Only).

NOTE: Australian companies ONLY. Create or find and update an ORGANISATION type entity, then run the requested reports. Reports include:  - Credit Report  - Credit Score  At a minimum, you just need to supply an ACN and/or ABN and an entity type set to ORGANISATION. Alternatively the entity ID of an existing ORGANISATION entity gan be given in the request body  Note: these reports are different to the Ultimate Beneficial Owner and Business Detail requests - these reports are independent data and analysis over and above company information and verification details.  You can request multiple reports to be run at once and they will be returned as a group (where feasible).  If a report can only be generated over time, then a temporary response will be returned and a webhook notification will be pushed later once the report has been completed. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.business_report_response_details import BusinessReportResponseDetails
from openapi_client.models.entity_object import EntityObject
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
    api_instance = openapi_client.BusinessApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    report_types = 'report_types_example' # str | Define the report(s) you wish to run.  You can request more than one as a comma separated list.  Duplicates will be ignored.  Note: These reports are different to the business details and UBO queries and are meant to provide deeper detail and background on a business or organisation.    Current valid report types are:   - creditScore   - creditReport 
    organisation = openapi_client.EntityObject() # EntityObject | The organisation to be queried. An entity object that must have be an ORGANISATION type with at least one organisation number (ABN or ACN). 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Run Report(s) against a new or existing organisation entity (AUS Only).
        api_response = api_instance.run_business_reports(x_frankie_customer_id, report_types, organisation, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of BusinessApi->run_business_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessApi->run_business_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **report_types** | **str**| Define the report(s) you wish to run.  You can request more than one as a comma separated list.  Duplicates will be ignored.  Note: These reports are different to the business details and UBO queries and are meant to provide deeper detail and background on a business or organisation.    Current valid report types are:   - creditScore   - creditReport  | 
 **organisation** | [**EntityObject**](EntityObject.md)| The organisation to be queried. An entity object that must have be an ORGANISATION type with at least one organisation number (ABN or ACN).  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**BusinessReportResponseDetails**](BusinessReportResponseDetails.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and was successfully processed. The report was run and the results have been attached. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

