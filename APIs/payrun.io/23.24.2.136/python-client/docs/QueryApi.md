# openapi_client.QueryApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_query_response**](QueryApi.md#get_query_response) | **POST** /Query | Get the query result


# **get_query_response**
> bytearray get_query_response(authorization, api_version, query)

Get the query result

Get the results for the specified query

### Example


```python
import openapi_client
from openapi_client.models.query import Query
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    query = openapi_client.Query() # Query | The query object to be executed against the application data.

    try:
        # Get the query result
        api_response = api_instance.get_query_response(authorization, api_version, query)
        print("The response of QueryApi->get_query_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->get_query_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **query** | [**Query**](Query.md)| The query object to be executed against the application data. | 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the query execution |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

