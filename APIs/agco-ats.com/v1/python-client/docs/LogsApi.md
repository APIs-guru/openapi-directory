# openapi_client.LogsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logs_get_log**](LogsApi.md#logs_get_log) | **GET** /api/v2/Logs/{ID} | Get a log by ID
[**logs_get_logs**](LogsApi.md#logs_get_logs) | **GET** /api/v2/Logs | Get the API System logs, most recent first.
[**logs_post_log**](LogsApi.md#logs_post_log) | **POST** /api/v2/Logs | Add a Log entry


# **logs_get_log**
> APIModelsLog logs_get_log(id)

Get a log by ID

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_log import APIModelsLog
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    id = 'id_example' # str | The Log ID

    try:
        # Get a log by ID
        api_response = api_instance.logs_get_log(id)
        print("The response of LogsApi->logs_get_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->logs_get_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Log ID | 

### Return type

[**APIModelsLog**](APIModelsLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_get_logs**
> APIPagedResponseAPIModelsLog logs_get_logs(limit=limit, offset=offset)

Get the API System logs, most recent first.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_log import APIPagedResponseAPIModelsLog
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get the API System logs, most recent first.
        api_response = api_instance.logs_get_logs(limit=limit, offset=offset)
        print("The response of LogsApi->logs_get_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->logs_get_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsLog**](APIPagedResponseAPIModelsLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_post_log**
> str logs_post_log(message)

Add a Log entry

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LogsApi(api_client)
    message = 'message_example' # str | Message to enter into the log

    try:
        # Add a Log entry
        api_response = api_instance.logs_post_log(message)
        print("The response of LogsApi->logs_post_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->logs_post_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **str**| Message to enter into the log | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

