# openapi_client.RetrieveApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_result**](RetrieveApi.md#retrieve_result) | **GET** /retrieve/response/{requestId} | (Re)retrieve Response Result.


# **retrieve_result**
> RetrievedResponseObject retrieve_result(x_frankie_customer_id, request_id, x_frankie_customer_child_id=x_frankie_customer_child_id, payload=payload)

(Re)retrieve Response Result.

If you've received a notification that you previously backgrounded transaction has completed, or you wish to re-retrive a result from an earlier transaction, then you can simply request the result from our encrypted cache  The response will return the original HTTP code, along with the payload that would have been returned in the original request. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.retrieved_response_object import RetrievedResponseObject
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
    api_instance = openapi_client.RetrieveApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    request_id = 'request_id_example' # str | This will be the same RequestId that was sent in the 202 acceptance response. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    payload = 'payload_example' # str | Specifies the type of the payload field in the retrieved response. Default is 'string'.  (optional)

    try:
        # (Re)retrieve Response Result.
        api_response = api_instance.retrieve_result(x_frankie_customer_id, request_id, x_frankie_customer_child_id=x_frankie_customer_child_id, payload=payload)
        print("The response of RetrieveApi->retrieve_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RetrieveApi->retrieve_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **request_id** | **str**| This will be the same RequestId that was sent in the 202 acceptance response.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **payload** | **str**| Specifies the type of the payload field in the retrieved response. Default is &#39;string&#39;.  | [optional] 

### Return type

[**RetrievedResponseObject**](RetrievedResponseObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

