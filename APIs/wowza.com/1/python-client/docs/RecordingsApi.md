# openapi_client.RecordingsApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_recording**](RecordingsApi.md#delete_recording) | **DELETE** /recordings/{id} | Delete a recording
[**list_recordings**](RecordingsApi.md#list_recordings) | **GET** /recordings | Fetch all recordings
[**show_recording**](RecordingsApi.md#show_recording) | **GET** /recordings/{id} | Fetch a recording
[**show_recording_state**](RecordingsApi.md#show_recording_state) | **GET** /recordings/{id}/state | Fetch the state of a recording


# **delete_recording**
> delete_recording(id)

Delete a recording

This operation deletes a recording.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the recording.

    try:
        # Delete a recording
        api_instance.delete_recording(id)
    except Exception as e:
        print("Exception when calling RecordingsApi->delete_recording: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the recording. | 

### Return type

void (empty response body)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_recordings**
> Recordings list_recordings(page=page, per_page=per_page)

Fetch all recordings

This operation shows the details of all of your recordings.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.recordings import Recordings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    page = 56 # int | Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results. (optional)
    per_page = 56 # int | For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>. (optional)

    try:
        # Fetch all recordings
        api_response = api_instance.list_recordings(page=page, per_page=per_page)
        print("The response of RecordingsApi->list_recordings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->list_recordings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. &lt;strong&gt;Next&lt;/strong&gt; and &lt;strong&gt;Previous&lt;/strong&gt; links allow you to navigate multiple pages of results. Omit the &lt;em&gt;page&lt;/em&gt; parameter or specify an integer that&#39;s less than or equal to &lt;strong&gt;0&lt;/strong&gt; to view all (unpaginated) results. | [optional] 
 **per_page** | **int**| For use with the &lt;em&gt;page&lt;/em&gt; parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 

### Return type

[**Recordings**](Recordings.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_recording**
> ShowRecording200Response show_recording(id)

Fetch a recording

This operation shows the details of a specific recording.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_recording200_response import ShowRecording200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the recording.

    try:
        # Fetch a recording
        api_response = api_instance.show_recording(id)
        print("The response of RecordingsApi->show_recording:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->show_recording: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the recording. | 

### Return type

[**ShowRecording200Response**](ShowRecording200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_recording_state**
> ShowRecordingState200Response show_recording_state(id)

Fetch the state of a recording

This operation shows the current state of a recording.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.show_recording_state200_response import ShowRecordingState200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordingsApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the recording.

    try:
        # Fetch the state of a recording
        api_response = api_instance.show_recording_state(id)
        print("The response of RecordingsApi->show_recording_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordingsApi->show_recording_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the recording. | 

### Return type

[**ShowRecordingState200Response**](ShowRecordingState200Response.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

