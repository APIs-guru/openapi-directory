# openapi_client.DocumentBlockApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_document_block**](DocumentBlockApi.md#list_document_block) | **GET** /document-blocks | List all document blocks


# **list_document_block**
> DocumentBlockList list_document_block(page=page, per_page=per_page)

List all document blocks

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_block_list import DocumentBlockList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
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
    api_instance = openapi_client.DocumentBlockApi(api_client)
    page = 56 # int |  (optional)
    per_page = 25 # int |  (optional) (default to 25)

    try:
        # List all document blocks
        api_response = api_instance.list_document_block(page=page, per_page=per_page)
        print("The response of DocumentBlockApi->list_document_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentBlockApi->list_document_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **per_page** | **int**|  | [optional] [default to 25]

### Return type

[**DocumentBlockList**](DocumentBlockList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

