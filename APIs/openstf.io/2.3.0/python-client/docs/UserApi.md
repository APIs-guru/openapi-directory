# openapi_client.UserApi

All URIs are relative to *http://openstf.local/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_user_device**](UserApi.md#add_user_device) | **POST** /user/devices | Add a device to a user
[**delete_user_device_by_serial**](UserApi.md#delete_user_device_by_serial) | **DELETE** /user/devices/{serial} | Delete User Device
[**get_user**](UserApi.md#get_user) | **GET** /user | User Profile
[**get_user_access_tokens**](UserApi.md#get_user_access_tokens) | **GET** /user/accessTokens | Access Tokens
[**get_user_device_by_serial**](UserApi.md#get_user_device_by_serial) | **GET** /user/devices/{serial} | User Device
[**get_user_devices**](UserApi.md#get_user_devices) | **GET** /user/devices | User Devices
[**remote_connect_user_device_by_serial**](UserApi.md#remote_connect_user_device_by_serial) | **POST** /user/devices/{serial}/remoteConnect | Remote Connect
[**remote_disconnect_user_device_by_serial**](UserApi.md#remote_disconnect_user_device_by_serial) | **DELETE** /user/devices/{serial}/remoteConnect | Remote Disconnect


# **add_user_device**
> add_user_device(device)

Add a device to a user

The User Devices endpoint will request stf server for a new device.

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.add_user_device_payload import AddUserDevicePayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    device = openapi_client.AddUserDevicePayload() # AddUserDevicePayload | Device to add

    try:
        # Add a device to a user
        api_instance.add_user_device(device)
    except Exception as e:
        print("Exception when calling UserApi->add_user_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**AddUserDevicePayload**](AddUserDevicePayload.md)| Device to add | 

### Return type

void (empty response body)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Add User Device Status |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_device_by_serial**
> delete_user_device_by_serial(serial)

Delete User Device

The User Devices endpoint will request for device release from stf server. It will return request accepted if device is being used by current user

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    serial = 'serial_example' # str | Device Serial

    try:
        # Delete User Device
        api_instance.delete_user_device_by_serial(serial)
    except Exception as e:
        print("Exception when calling UserApi->delete_user_device_by_serial: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**| Device Serial | 

### Return type

void (empty response body)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete User Device Status |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user**
> UserResponse get_user()

User Profile

The User Profile endpoint returns information about current authorized user

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.user_response import UserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # User Profile
        api_response = api_instance.get_user()
        print("The response of UserApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current User Profile information |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_access_tokens**
> AccessTokensResponse get_user_access_tokens()

Access Tokens

The Access Tokens endpoints returns titles of all the valid access tokens

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.access_tokens_response import AccessTokensResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)

    try:
        # Access Tokens
        api_response = api_instance.get_user_access_tokens()
        print("The response of UserApi->get_user_access_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_access_tokens: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AccessTokensResponse**](AccessTokensResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access Tokens titles |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_device_by_serial**
> DeviceResponse get_user_device_by_serial(serial, fields=fields)

User Device

The devices enpoint return information about device owned by user

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.device_response import DeviceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    serial = 'serial_example' # str | Device Serial
    fields = 'fields_example' # str | Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response (optional)

    try:
        # User Device
        api_response = api_instance.get_user_device_by_serial(serial, fields=fields)
        print("The response of UserApi->get_user_device_by_serial:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_device_by_serial: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**| Device Serial | 
 **fields** | **str**| Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response | [optional] 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device Information owned by user |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_devices**
> DeviceListResponse get_user_devices(fields=fields)

User Devices

The User Devices endpoint returns device list owner by current authorized user

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.device_list_response import DeviceListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    fields = 'fields_example' # str | Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response (optional)

    try:
        # User Devices
        api_response = api_instance.get_user_devices(fields=fields)
        print("The response of UserApi->get_user_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **str**| Fields query parameter takes a comma seperated list of fields. Only listed field will be return in response | [optional] 

### Return type

[**DeviceListResponse**](DeviceListResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current User Devices List |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_connect_user_device_by_serial**
> RemoteConnectUserDeviceResponse remote_connect_user_device_by_serial(serial)

Remote Connect

The device connect endpoint will request stf server to connect remotely

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.models.remote_connect_user_device_response import RemoteConnectUserDeviceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    serial = 'serial_example' # str | Device Serial

    try:
        # Remote Connect
        api_response = api_instance.remote_connect_user_device_by_serial(serial)
        print("The response of UserApi->remote_connect_user_device_by_serial:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->remote_connect_user_device_by_serial: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**| Device Serial | 

### Return type

[**RemoteConnectUserDeviceResponse**](RemoteConnectUserDeviceResponse.md)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Remote Connect User Device Request Status |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_disconnect_user_device_by_serial**
> remote_disconnect_user_device_by_serial(serial)

Remote Disconnect

The device connect endpoint will request stf server to disconnect remotely

### Example

* Api Key Authentication (accessTokenAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://openstf.local/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://openstf.local/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: accessTokenAuth
configuration.api_key['accessTokenAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['accessTokenAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    serial = 'serial_example' # str | Device Serial

    try:
        # Remote Disconnect
        api_instance.remote_disconnect_user_device_by_serial(serial)
    except Exception as e:
        print("Exception when calling UserApi->remote_disconnect_user_device_by_serial: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**| Device Serial | 

### Return type

void (empty response body)

### Authorization

[accessTokenAuth](../README.md#accessTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Remote Disonnect User Device Request Status |  -  |
**0** | Unexpected Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

