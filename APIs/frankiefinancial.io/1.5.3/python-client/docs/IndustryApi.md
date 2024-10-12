# openapi_client.IndustryApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_process_industry_utility_document**](IndustryApi.md#create_process_industry_utility_document) | **POST** /document/new/utility/process/compare | Create Document and Run Utility Price Comparison.
[**update_process_industry_utility_document**](IndustryApi.md#update_process_industry_utility_document) | **POST** /document/{documentId}/utility/process/compare | Update Document and Run Utility Price Comparison.
[**update_process_industry_utility_document_consent**](IndustryApi.md#update_process_industry_utility_document_consent) | **POST** /document/{documentId}/utility/process/consent | Provide Explicit Consent to Switch Utility Plans.
[**update_process_industry_utility_document_switch**](IndustryApi.md#update_process_industry_utility_document_switch) | **POST** /document/{documentId}/utility/process/switch | Initiate Switching of Utility Plan.


# **create_process_industry_utility_document**
> DocumentIndustryUtilityProcessResultObject create_process_industry_utility_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, plan_limit=plan_limit, document=document)

Create Document and Run Utility Price Comparison.

Create a document object. This is then processed to extract useful information, just like a normal OCR scan. The service will then push the document through an industry specific comparison process, where the details are used to find a better plan, based on the bill.  100's of datapoints are accurately extracted from the uploaded document. This data is then used to compare the bill against the whole market. A personalised comparison is returned that is a best fit for the customer's energy profile.  * NOTE: It is expected that the type of document being uploaded will be a PDF and the idType is UTILITY_BILL. (These values will be set automatically if not supplied).    You can optionally include the utility name (e.g. Origin Energy) in the idSubType if you wish. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_industry_utility_process_result_object import DocumentIndustryUtilityProcessResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
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
    api_instance = openapi_client.IndustryApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    plan_limit = 30 # int | The maximum number of plans to return (optional) (default to 30)
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject |  (optional)

    try:
        # Create Document and Run Utility Price Comparison.
        api_response = api_instance.create_process_industry_utility_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, plan_limit=plan_limit, document=document)
        print("The response of IndustryApi->create_process_industry_utility_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndustryApi->create_process_industry_utility_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **plan_limit** | **int**| The maximum number of plans to return | [optional] [default to 30]
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)|  | [optional] 

### Return type

[**DocumentIndustryUtilityProcessResultObject**](DocumentIndustryUtilityProcessResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors.  Returns the results of the utility comparison directly from the service provider.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_process_industry_utility_document**
> DocumentIndustryUtilityProcessResultObject update_process_industry_utility_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, plan_limit=plan_limit, document=document)

Update Document and Run Utility Price Comparison.

Using a previously uploaded but incomplete document, you can optionally supply updated details or simply request that the document be re-processed through the industry comparison service.   100's of datapoints are accurately extracted from the uploaded document. This data is then used to compare the bill against the whole market. A personalised comparison is returned that is a best fit for the customer's energy profile.  * NOTE: It is expected that the type of document being uploaded will be a PDF and the idType is UTILITY_BILL. (These values will be set automatically if not supplied).    You can optionally include the utility name (e.g. Origin Energy) in the idSubType if you wish. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_industry_utility_process_result_object import DocumentIndustryUtilityProcessResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
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
    api_instance = openapi_client.IndustryApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    plan_limit = 30 # int | The maximum number of plans to return (optional) (default to 30)
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject |  (optional)

    try:
        # Update Document and Run Utility Price Comparison.
        api_response = api_instance.update_process_industry_utility_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, plan_limit=plan_limit, document=document)
        print("The response of IndustryApi->update_process_industry_utility_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndustryApi->update_process_industry_utility_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **plan_limit** | **int**| The maximum number of plans to return | [optional] [default to 30]
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)|  | [optional] 

### Return type

[**DocumentIndustryUtilityProcessResultObject**](DocumentIndustryUtilityProcessResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors.  Returns the results of the utility comparison directly from the service provider.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_process_industry_utility_document_consent**
> DocumentIndustryUtilityConsentResultObject update_process_industry_utility_document_consent(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, consent_request=consent_request)

Provide Explicit Consent to Switch Utility Plans.

Using a previously uploaded and processed document, the user must provide explicit consent before being able to call the /switch function.   Before entering into a contract with a new energy retailer, consumers are first obliged to review the retailer's contractual terms and conditions, confirm they understand these terms as well as give explicit, informed consent (EIC) for the switch to occur. This API call retrieves all information        that must be displayed in order for a compliant EIC to be captured from a consumer.  * NOTE: as part of this call, you must provide a previously returned corellationId that is associated with this document and the returned plan options. Failure to do so will result in an error response. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_industry_utility_consent_result_object import DocumentIndustryUtilityConsentResultObject
from openapi_client.models.eic_request import EICRequest
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
    api_instance = openapi_client.IndustryApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    consent_request = openapi_client.EICRequest() # EICRequest |  (optional)

    try:
        # Provide Explicit Consent to Switch Utility Plans.
        api_response = api_instance.update_process_industry_utility_document_consent(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, consent_request=consent_request)
        print("The response of IndustryApi->update_process_industry_utility_document_consent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndustryApi->update_process_industry_utility_document_consent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **consent_request** | [**EICRequest**](EICRequest.md)|  | [optional] 

### Return type

[**DocumentIndustryUtilityConsentResultObject**](DocumentIndustryUtilityConsentResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results directly from the service provider.  Returns the results of the provision of explicit informed consent directly from the service provider.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_process_industry_utility_document_switch**
> DocumentIndustryUtilitySwitchResultObject update_process_industry_utility_document_switch(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, switch_request=switch_request)

Initiate Switching of Utility Plan.

Using a previously uploaded and processed document, the user must provide explicit consent before being able to call the /switch function.   The bill payer has uploaded their current bill, selected a new plan, accepted the terms and conditions and given their consent for the switch to occur. This API call will finalise the switch request and send all the customers data along with the requested plan to the selected retailer.  * NOTE: as part of this call, you must provide a previously returned corellationId that is associated with this document and the returned plan options. Failure to do so will result in an error response. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_industry_utility_switch_result_object import DocumentIndustryUtilitySwitchResultObject
from openapi_client.models.switch_request import SwitchRequest
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
    api_instance = openapi_client.IndustryApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    switch_request = openapi_client.SwitchRequest() # SwitchRequest |  (optional)

    try:
        # Initiate Switching of Utility Plan.
        api_response = api_instance.update_process_industry_utility_document_switch(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, switch_request=switch_request)
        print("The response of IndustryApi->update_process_industry_utility_document_switch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IndustryApi->update_process_industry_utility_document_switch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **switch_request** | [**SwitchRequest**](SwitchRequest.md)|  | [optional] 

### Return type

[**DocumentIndustryUtilitySwitchResultObject**](DocumentIndustryUtilitySwitchResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results directly from the service provider. Returns the results of the utility switch over directly from the service provider.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

