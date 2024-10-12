# openapi_client.LogsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logs_all**](LogsApi.md#logs_all) | **GET** /vault/logs | Get all consumer request logs


# **logs_all**
> GetLogsResponse logs_all(x_apideck_app_id, x_apideck_consumer_id, filter=filter, cursor=cursor, limit=limit)

Get all consumer request logs

This endpoint includes all consumer request logs. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_logs_response import GetLogsResponse
from openapi_client.models.logs_filter import LogsFilter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    filter = openapi_client.LogsFilter() # LogsFilter | Filter results (optional)
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)

    try:
        # Get all consumer request logs
        api_response = api_instance.logs_all(x_apideck_app_id, x_apideck_consumer_id, filter=filter, cursor=cursor, limit=limit)
        print("The response of LogsApi->logs_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->logs_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **filter** | [**LogsFilter**](.md)| Filter results | [optional] 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]

### Return type

[**GetLogsResponse**](GetLogsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Logs |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

