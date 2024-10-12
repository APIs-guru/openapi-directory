# openapi_client.LogsApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_logs**](LogsApi.md#get_logs) | **POST** /v1/logs/get | Get logs


# **get_logs**
> bytearray get_logs(logs_request_body)

Get logs

### Example


```python
import openapi_client
from openapi_client.models.logs_request_body import LogsRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    logs_request_body = openapi_client.LogsRequestBody() # LogsRequestBody | 

    try:
        # Get logs
        api_response = api_instance.get_logs(logs_request_body)
        print("The response of LogsApi->get_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->get_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logs_request_body** | [**LogsRequestBody**](LogsRequestBody.md)|  | 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the log file |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

