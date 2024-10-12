# openapi_client.WirelessProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_camera_wireless_profile_1**](WirelessProfilesApi.md#create_network_camera_wireless_profile_1) | **POST** /networks/{networkId}/camera/wirelessProfiles | Creates a new camera wireless profile for this network.
[**delete_network_camera_wireless_profile_1**](WirelessProfilesApi.md#delete_network_camera_wireless_profile_1) | **DELETE** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Delete an existing camera wireless profile for this network.
[**get_device_camera_wireless_profiles_1**](WirelessProfilesApi.md#get_device_camera_wireless_profiles_1) | **GET** /devices/{serial}/camera/wirelessProfiles | Returns wireless profile assigned to the given camera
[**get_network_camera_wireless_profile_1**](WirelessProfilesApi.md#get_network_camera_wireless_profile_1) | **GET** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Retrieve a single camera wireless profile.
[**get_network_camera_wireless_profiles_1**](WirelessProfilesApi.md#get_network_camera_wireless_profiles_1) | **GET** /networks/{networkId}/camera/wirelessProfiles | List the camera wireless profiles for this network.
[**update_device_camera_wireless_profiles_1**](WirelessProfilesApi.md#update_device_camera_wireless_profiles_1) | **PUT** /devices/{serial}/camera/wirelessProfiles | Assign wireless profiles to the given camera
[**update_network_camera_wireless_profile_1**](WirelessProfilesApi.md#update_network_camera_wireless_profile_1) | **PUT** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Update an existing camera wireless profile in this network.


# **create_network_camera_wireless_profile_1**
> object create_network_camera_wireless_profile_1(network_id, create_network_camera_wireless_profile_request)

Creates a new camera wireless profile for this network.

Creates a new camera wireless profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_camera_wireless_profile_request import CreateNetworkCameraWirelessProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_camera_wireless_profile_request = openapi_client.CreateNetworkCameraWirelessProfileRequest() # CreateNetworkCameraWirelessProfileRequest | 

    try:
        # Creates a new camera wireless profile for this network.
        api_response = api_instance.create_network_camera_wireless_profile_1(network_id, create_network_camera_wireless_profile_request)
        print("The response of WirelessProfilesApi->create_network_camera_wireless_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->create_network_camera_wireless_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_camera_wireless_profile_request** | [**CreateNetworkCameraWirelessProfileRequest**](CreateNetworkCameraWirelessProfileRequest.md)|  | 

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

# **delete_network_camera_wireless_profile_1**
> delete_network_camera_wireless_profile_1(network_id, wireless_profile_id)

Delete an existing camera wireless profile for this network.

Delete an existing camera wireless profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 

    try:
        # Delete an existing camera wireless profile for this network.
        api_instance.delete_network_camera_wireless_profile_1(network_id, wireless_profile_id)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->delete_network_camera_wireless_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_wireless_profiles_1**
> object get_device_camera_wireless_profiles_1(serial)

Returns wireless profile assigned to the given camera

Returns wireless profile assigned to the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns wireless profile assigned to the given camera
        api_response = api_instance.get_device_camera_wireless_profiles_1(serial)
        print("The response of WirelessProfilesApi->get_device_camera_wireless_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->get_device_camera_wireless_profiles_1: %s\n" % e)
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

# **get_network_camera_wireless_profile_1**
> object get_network_camera_wireless_profile_1(network_id, wireless_profile_id)

Retrieve a single camera wireless profile.

Retrieve a single camera wireless profile.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 

    try:
        # Retrieve a single camera wireless profile.
        api_response = api_instance.get_network_camera_wireless_profile_1(network_id, wireless_profile_id)
        print("The response of WirelessProfilesApi->get_network_camera_wireless_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->get_network_camera_wireless_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 

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

# **get_network_camera_wireless_profiles_1**
> List[object] get_network_camera_wireless_profiles_1(network_id)

List the camera wireless profiles for this network.

List the camera wireless profiles for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the camera wireless profiles for this network.
        api_response = api_instance.get_network_camera_wireless_profiles_1(network_id)
        print("The response of WirelessProfilesApi->get_network_camera_wireless_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->get_network_camera_wireless_profiles_1: %s\n" % e)
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

# **update_device_camera_wireless_profiles_1**
> object update_device_camera_wireless_profiles_1(serial, update_device_camera_wireless_profiles_request)

Assign wireless profiles to the given camera

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_wireless_profiles_request import UpdateDeviceCameraWirelessProfilesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_wireless_profiles_request = openapi_client.UpdateDeviceCameraWirelessProfilesRequest() # UpdateDeviceCameraWirelessProfilesRequest | 

    try:
        # Assign wireless profiles to the given camera
        api_response = api_instance.update_device_camera_wireless_profiles_1(serial, update_device_camera_wireless_profiles_request)
        print("The response of WirelessProfilesApi->update_device_camera_wireless_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->update_device_camera_wireless_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_wireless_profiles_request** | [**UpdateDeviceCameraWirelessProfilesRequest**](UpdateDeviceCameraWirelessProfilesRequest.md)|  | 

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

# **update_network_camera_wireless_profile_1**
> object update_network_camera_wireless_profile_1(network_id, wireless_profile_id, update_network_camera_wireless_profile_request=update_network_camera_wireless_profile_request)

Update an existing camera wireless profile in this network.

Update an existing camera wireless profile in this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_camera_wireless_profile_request import UpdateNetworkCameraWirelessProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    api_instance = openapi_client.WirelessProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 
    update_network_camera_wireless_profile_request = openapi_client.UpdateNetworkCameraWirelessProfileRequest() # UpdateNetworkCameraWirelessProfileRequest |  (optional)

    try:
        # Update an existing camera wireless profile in this network.
        api_response = api_instance.update_network_camera_wireless_profile_1(network_id, wireless_profile_id, update_network_camera_wireless_profile_request=update_network_camera_wireless_profile_request)
        print("The response of WirelessProfilesApi->update_network_camera_wireless_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessProfilesApi->update_network_camera_wireless_profile_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 
 **update_network_camera_wireless_profile_request** | [**UpdateNetworkCameraWirelessProfileRequest**](UpdateNetworkCameraWirelessProfileRequest.md)|  | [optional] 

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

