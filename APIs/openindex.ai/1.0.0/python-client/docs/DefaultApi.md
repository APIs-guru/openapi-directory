# openapi_client.DefaultApi

All URIs are relative to */sub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_query_post**](DefaultApi.md#query_query_post) | **POST** /query | Query


# **query_query_post**
> QueryResponse query_query_post(query_request)

Query

Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.query_request import QueryRequest
from openapi_client.models.query_response import QueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /sub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/sub"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query_request = openapi_client.QueryRequest() # QueryRequest | 

    try:
        # Query
        api_response = api_instance.query_query_post(query_request)
        print("The response of DefaultApi->query_query_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query_request** | [**QueryRequest**](QueryRequest.md)|  | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

