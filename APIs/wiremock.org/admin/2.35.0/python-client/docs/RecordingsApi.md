# openapi_client.RecordingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_recordings_snapshot_post**](RecordingsApi.md#admin_recordings_snapshot_post) | **POST** /__admin/recordings/snapshot | Take a snapshot recording
[**admin_recordings_start_post**](RecordingsApi.md#admin_recordings_start_post) | **POST** /__admin/recordings/start | Start recording
[**admin_recordings_status_get**](RecordingsApi.md#admin_recordings_status_get) | **GET** /__admin/recordings/status | Get recording status
[**admin_recordings_stop_post**](RecordingsApi.md#admin_recordings_stop_post) | **POST** /__admin/recordings/stop | Stop recording


# **admin_recordings_snapshot_post**
> AdminMappingsGet200Response admin_recordings_snapshot_post(admin_recordings_snapshot_post_request)

Take a snapshot recording

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response import AdminMappingsGet200Response
from openapi_client.models.admin_recordings_snapshot_post_request import AdminRecordingsSnapshotPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    admin_recordings_snapshot_post_request = {"captureHeaders":{"Accept":{},"Content-Type":{"caseInsensitive":true}},"extractBodyCriteria":{"binarySizeThreshold":"1 Mb","textSizeThreshold":"2 kb"},"filters":{"ids":["40a93c4a-d378-4e07-8321-6158d5dbcb29"],"method":"GET","urlPathPattern":"/api/.*"},"outputFormat":"FULL","persist":false,"repeatsAsScenarios":false,"requestBodyPattern":{"ignoreArrayOrder":false,"ignoreExtraElements":true,"matcher":"equalToJson"},"transformerParameters":{"headerValue":"123"},"transformers":["modify-response-header"]} # AdminRecordingsSnapshotPostRequest | 

    try:
        # Take a snapshot recording
        api_response = api_instance.admin_recordings_snapshot_post(admin_recordings_snapshot_post_request)
        print("The response of RecordingsApi->admin_recordings_snapshot_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->admin_recordings_snapshot_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_recordings_snapshot_post_request** | [**AdminRecordingsSnapshotPostRequest**](AdminRecordingsSnapshotPostRequest.md)|  | 

### Return type

[**AdminMappingsGet200Response**](AdminMappingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully took a snapshot recording |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_recordings_start_post**
> admin_recordings_start_post(admin_recordings_start_post_request)

Start recording

Begin recording stub mappings

### Example


```python
import openapi_client
from openapi_client.models.admin_recordings_start_post_request import AdminRecordingsStartPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    admin_recordings_start_post_request = {"captureHeaders":{"Accept":{},"Content-Type":{"caseInsensitive":true}},"extractBodyCriteria":{"binarySizeThreshold":"10240","textSizeThreshold":"2048"},"filters":{"method":"GET","urlPathPattern":"/api/.*"},"persist":false,"repeatsAsScenarios":false,"requestBodyPattern":{"ignoreArrayOrder":false,"ignoreExtraElements":true,"matcher":"equalToJson"},"targetBaseUrl":"http://example.mocklab.io","transformerParameters":{"headerValue":"123"},"transformers":["modify-response-header"]} # AdminRecordingsStartPostRequest | 

    try:
        # Start recording
        api_instance.admin_recordings_start_post(admin_recordings_start_post_request)
    except Exception as e:
        print("Exception when calling RecordingsApi->admin_recordings_start_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **admin_recordings_start_post_request** | [**AdminRecordingsStartPostRequest**](AdminRecordingsStartPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully started recording |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_recordings_status_get**
> AdminRecordingsStatusGet200Response admin_recordings_status_get()

Get recording status

### Example


```python
import openapi_client
from openapi_client.models.admin_recordings_status_get200_response import AdminRecordingsStatusGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)

    try:
        # Get recording status
        api_response = api_instance.admin_recordings_status_get()
        print("The response of RecordingsApi->admin_recordings_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->admin_recordings_status_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AdminRecordingsStatusGet200Response**](AdminRecordingsStatusGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the record status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_recordings_stop_post**
> AdminMappingsGet200Response admin_recordings_stop_post()

Stop recording

End recording of stub mappings

### Example


```python
import openapi_client
from openapi_client.models.admin_mappings_get200_response import AdminMappingsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)

    try:
        # Stop recording
        api_response = api_instance.admin_recordings_stop_post()
        print("The response of RecordingsApi->admin_recordings_stop_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->admin_recordings_stop_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AdminMappingsGet200Response**](AdminMappingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully stopped recording |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

