# openapi_client.ScheduleImportIoApi

All URIs are relative to *https://schedule.import.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractor_extractor_id_delete**](ScheduleImportIoApi.md#extractor_extractor_id_delete) | **DELETE** /extractor/{extractorId}/ | Delete an existing schedule
[**extractor_extractor_id_get**](ScheduleImportIoApi.md#extractor_extractor_id_get) | **GET** /extractor/{extractorId}/ | Get the schedule of a particular extractor
[**extractor_get**](ScheduleImportIoApi.md#extractor_get) | **GET** /extractor | Get the list of schedules for all your extractors
[**extractor_post**](ScheduleImportIoApi.md#extractor_post) | **POST** /extractor | Schedule and extractor to run at a specific time


# **extractor_extractor_id_delete**
> extractor_extractor_id_delete(extractor_id)

Delete an existing schedule

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://schedule.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://schedule.import.io"
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
    api_instance = openapi_client.ScheduleImportIoApi(api_client)
    extractor_id = 'extractor_id_example' # str | the id of the extractor with a schedule

    try:
        # Delete an existing schedule
        api_instance.extractor_extractor_id_delete(extractor_id)
    except Exception as e:
        print("Exception when calling ScheduleImportIoApi->extractor_extractor_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractor_id** | **str**| the id of the extractor with a schedule | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty object |  -  |
**401** | User doesn&#39;t have a valid session. |  -  |
**403** | User is not allowed to delete this schedule. |  -  |
**404** | Unable to find supplied extractor ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractor_extractor_id_get**
> Schedule extractor_extractor_id_get(extractor_id)

Get the schedule of a particular extractor

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://schedule.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://schedule.import.io"
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
    api_instance = openapi_client.ScheduleImportIoApi(api_client)
    extractor_id = 'extractor_id_example' # str | the id of the extractor with a schedule

    try:
        # Get the schedule of a particular extractor
        api_response = api_instance.extractor_extractor_id_get(extractor_id)
        print("The response of ScheduleImportIoApi->extractor_extractor_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleImportIoApi->extractor_extractor_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractor_id** | **str**| the id of the extractor with a schedule | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | crawl run schedule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractor_get**
> Schedule extractor_get()

Get the list of schedules for all your extractors

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://schedule.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://schedule.import.io"
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
    api_instance = openapi_client.ScheduleImportIoApi(api_client)

    try:
        # Get the list of schedules for all your extractors
        api_response = api_instance.extractor_get()
        print("The response of ScheduleImportIoApi->extractor_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleImportIoApi->extractor_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Schedule**](Schedule.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | array of crawl run schedules |  -  |
**401** | User doesn&#39;t have a valid session. |  -  |
**404** | Unable to find supplied extractor ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractor_post**
> Schedule extractor_post(schedule_request_body)

Schedule and extractor to run at a specific time

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.schedule import Schedule
from openapi_client.models.schedule_request import ScheduleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://schedule.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://schedule.import.io"
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
    api_instance = openapi_client.ScheduleImportIoApi(api_client)
    schedule_request_body = openapi_client.ScheduleRequest() # ScheduleRequest | Request body with the schema defined on the left. Interval is a cron string.

    try:
        # Schedule and extractor to run at a specific time
        api_response = api_instance.extractor_post(schedule_request_body)
        print("The response of ScheduleImportIoApi->extractor_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduleImportIoApi->extractor_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule_request_body** | [**ScheduleRequest**](ScheduleRequest.md)| Request body with the schema defined on the left. Interval is a cron string. | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | crawl run schedule |  -  |
**400** | Validation errors on the request input. |  -  |
**401** | User doesn&#39;t own this extractor, or doesn&#39;t have a valid session. |  -  |
**403** | User is not allowed to create schedule for this extractor. |  -  |
**404** | Unable to find supplied extractor ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

