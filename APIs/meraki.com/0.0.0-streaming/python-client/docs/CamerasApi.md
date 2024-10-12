# openapi_client.CamerasApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_network_camera_snapshot**](CamerasApi.md#generate_network_camera_snapshot) | **POST** /networks/{networkId}/cameras/{serial}/snapshot | Generate a snapshot of what the camera sees at the specified time and return a link to that image.
[**get_device_camera_video_settings**](CamerasApi.md#get_device_camera_video_settings) | **GET** /devices/{serial}/camera/video/settings | Returns video settings for the given camera
[**get_network_camera_schedules**](CamerasApi.md#get_network_camera_schedules) | **GET** /networks/{networkId}/camera/schedules | Returns a list of all camera recording schedules.
[**get_network_camera_video_link**](CamerasApi.md#get_network_camera_video_link) | **GET** /networks/{networkId}/cameras/{serial}/videoLink | Returns video link to the specified camera
[**update_device_camera_video_settings**](CamerasApi.md#update_device_camera_video_settings) | **PUT** /devices/{serial}/camera/video/settings | Update video settings for the given camera


# **generate_network_camera_snapshot**
> object generate_network_camera_snapshot(network_id, serial, generate_network_camera_snapshot_request=generate_network_camera_snapshot_request)

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.generate_network_camera_snapshot_request import GenerateNetworkCameraSnapshotRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CamerasApi(api_client)
    network_id = 'network_id_example' # str | 
    serial = 'serial_example' # str | 
    generate_network_camera_snapshot_request = openapi_client.GenerateNetworkCameraSnapshotRequest() # GenerateNetworkCameraSnapshotRequest |  (optional)

    try:
        # Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        api_response = api_instance.generate_network_camera_snapshot(network_id, serial, generate_network_camera_snapshot_request=generate_network_camera_snapshot_request)
        print("The response of CamerasApi->generate_network_camera_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CamerasApi->generate_network_camera_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **serial** | **str**|  | 
 **generate_network_camera_snapshot_request** | [**GenerateNetworkCameraSnapshotRequest**](GenerateNetworkCameraSnapshotRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_video_settings**
> object get_device_camera_video_settings(serial)

Returns video settings for the given camera

Returns video settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CamerasApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns video settings for the given camera
        api_response = api_instance.get_device_camera_video_settings(serial)
        print("The response of CamerasApi->get_device_camera_video_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CamerasApi->get_device_camera_video_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_schedules**
> List[object] get_network_camera_schedules(network_id)

Returns a list of all camera recording schedules.

Returns a list of all camera recording schedules.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CamerasApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns a list of all camera recording schedules.
        api_response = api_instance.get_network_camera_schedules(network_id)
        print("The response of CamerasApi->get_network_camera_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CamerasApi->get_network_camera_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_video_link**
> object get_network_camera_video_link(network_id, serial, timestamp=timestamp)

Returns video link to the specified camera

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CamerasApi(api_client)
    network_id = 'network_id_example' # str | 
    serial = 'serial_example' # str | 
    timestamp = 'timestamp_example' # str | [optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time. (optional)

    try:
        # Returns video link to the specified camera
        api_response = api_instance.get_network_camera_video_link(network_id, serial, timestamp=timestamp)
        print("The response of CamerasApi->get_network_camera_video_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CamerasApi->get_network_camera_video_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **serial** | **str**|  | 
 **timestamp** | **str**| [optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_video_settings**
> object update_device_camera_video_settings(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)

Update video settings for the given camera

Update video settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_video_settings_request import UpdateDeviceCameraVideoSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CamerasApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_video_settings_request = openapi_client.UpdateDeviceCameraVideoSettingsRequest() # UpdateDeviceCameraVideoSettingsRequest |  (optional)

    try:
        # Update video settings for the given camera
        api_response = api_instance.update_device_camera_video_settings(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)
        print("The response of CamerasApi->update_device_camera_video_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CamerasApi->update_device_camera_video_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_video_settings_request** | [**UpdateDeviceCameraVideoSettingsRequest**](UpdateDeviceCameraVideoSettingsRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

