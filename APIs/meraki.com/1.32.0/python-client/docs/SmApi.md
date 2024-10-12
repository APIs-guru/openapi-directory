# openapi_client.SmApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkin_network_sm_devices**](SmApi.md#checkin_network_sm_devices) | **POST** /networks/{networkId}/sm/devices/checkin | Force check-in a set of devices
[**create_network_sm_bypass_activation_lock_attempt**](SmApi.md#create_network_sm_bypass_activation_lock_attempt) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**create_network_sm_target_group**](SmApi.md#create_network_sm_target_group) | **POST** /networks/{networkId}/sm/targetGroups | Add a target group
[**delete_network_sm_target_group**](SmApi.md#delete_network_sm_target_group) | **DELETE** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Delete a target group from a network
[**delete_network_sm_user_access_device**](SmApi.md#delete_network_sm_user_access_device) | **DELETE** /networks/{networkId}/sm/userAccessDevices/{userAccessDeviceId} | Delete a User Access Device
[**get_network_sm_bypass_activation_lock_attempt**](SmApi.md#get_network_sm_bypass_activation_lock_attempt) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status
[**get_network_sm_device_cellular_usage_history**](SmApi.md#get_network_sm_device_cellular_usage_history) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#39;s daily cellular data usage history
[**get_network_sm_device_certs**](SmApi.md#get_network_sm_device_certs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/certs | List the certs on a device
[**get_network_sm_device_connectivity**](SmApi.md#get_network_sm_device_connectivity) | **GET** /networks/{networkId}/sm/devices/{deviceId}/connectivity | Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
[**get_network_sm_device_desktop_logs**](SmApi.md#get_network_sm_device_desktop_logs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/desktopLogs | Return historical records of various Systems Manager network connection details for desktop devices.
[**get_network_sm_device_device_command_logs**](SmApi.md#get_network_sm_device_device_command_logs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs | Return historical records of commands sent to Systems Manager devices
[**get_network_sm_device_device_profiles**](SmApi.md#get_network_sm_device_device_profiles) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceProfiles | Get the installed profiles associated with a device
[**get_network_sm_device_network_adapters**](SmApi.md#get_network_sm_device_network_adapters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/networkAdapters | List the network adapters of a device
[**get_network_sm_device_performance_history**](SmApi.md#get_network_sm_device_performance_history) | **GET** /networks/{networkId}/sm/devices/{deviceId}/performanceHistory | Return historical records of various Systems Manager client metrics for desktop devices.
[**get_network_sm_device_restrictions**](SmApi.md#get_network_sm_device_restrictions) | **GET** /networks/{networkId}/sm/devices/{deviceId}/restrictions | List the restrictions on a device
[**get_network_sm_device_security_centers**](SmApi.md#get_network_sm_device_security_centers) | **GET** /networks/{networkId}/sm/devices/{deviceId}/securityCenters | List the security centers on a device
[**get_network_sm_device_softwares**](SmApi.md#get_network_sm_device_softwares) | **GET** /networks/{networkId}/sm/devices/{deviceId}/softwares | Get a list of softwares associated with a device
[**get_network_sm_device_wlan_lists**](SmApi.md#get_network_sm_device_wlan_lists) | **GET** /networks/{networkId}/sm/devices/{deviceId}/wlanLists | List the saved SSID names on a device
[**get_network_sm_devices**](SmApi.md#get_network_sm_devices) | **GET** /networks/{networkId}/sm/devices | List the devices enrolled in an SM network with various specified fields and filters
[**get_network_sm_profiles**](SmApi.md#get_network_sm_profiles) | **GET** /networks/{networkId}/sm/profiles | List all profiles in a network
[**get_network_sm_target_group**](SmApi.md#get_network_sm_target_group) | **GET** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Return a target group
[**get_network_sm_target_groups**](SmApi.md#get_network_sm_target_groups) | **GET** /networks/{networkId}/sm/targetGroups | List the target groups in this network
[**get_network_sm_trusted_access_configs**](SmApi.md#get_network_sm_trusted_access_configs) | **GET** /networks/{networkId}/sm/trustedAccessConfigs | List Trusted Access Configs
[**get_network_sm_user_access_devices**](SmApi.md#get_network_sm_user_access_devices) | **GET** /networks/{networkId}/sm/userAccessDevices | List User Access Devices and its Trusted Access Connections
[**get_network_sm_user_device_profiles**](SmApi.md#get_network_sm_user_device_profiles) | **GET** /networks/{networkId}/sm/users/{userId}/deviceProfiles | Get the profiles associated with a user
[**get_network_sm_user_softwares**](SmApi.md#get_network_sm_user_softwares) | **GET** /networks/{networkId}/sm/users/{userId}/softwares | Get a list of softwares associated with a user
[**get_network_sm_users**](SmApi.md#get_network_sm_users) | **GET** /networks/{networkId}/sm/users | List the owners in an SM network with various specified fields and filters
[**get_organization_sm_apns_cert**](SmApi.md#get_organization_sm_apns_cert) | **GET** /organizations/{organizationId}/sm/apnsCert | Get the organization&#39;s APNS certificate
[**get_organization_sm_vpp_account**](SmApi.md#get_organization_sm_vpp_account) | **GET** /organizations/{organizationId}/sm/vppAccounts/{vppAccountId} | Get a hash containing the unparsed token of the VPP account with the given ID
[**get_organization_sm_vpp_accounts**](SmApi.md#get_organization_sm_vpp_accounts) | **GET** /organizations/{organizationId}/sm/vppAccounts | List the VPP accounts in the organization
[**lock_network_sm_devices**](SmApi.md#lock_network_sm_devices) | **POST** /networks/{networkId}/sm/devices/lock | Lock a set of devices
[**modify_network_sm_devices_tags**](SmApi.md#modify_network_sm_devices_tags) | **POST** /networks/{networkId}/sm/devices/modifyTags | Add, delete, or update the tags of a set of devices
[**move_network_sm_devices**](SmApi.md#move_network_sm_devices) | **POST** /networks/{networkId}/sm/devices/move | Move a set of devices to a new network
[**refresh_network_sm_device_details**](SmApi.md#refresh_network_sm_device_details) | **POST** /networks/{networkId}/sm/devices/{deviceId}/refreshDetails | Refresh the details of a device
[**unenroll_network_sm_device**](SmApi.md#unenroll_network_sm_device) | **POST** /networks/{networkId}/sm/devices/{deviceId}/unenroll | Unenroll a device
[**update_network_sm_devices_fields**](SmApi.md#update_network_sm_devices_fields) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device
[**update_network_sm_target_group**](SmApi.md#update_network_sm_target_group) | **PUT** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Update a target group
[**wipe_network_sm_devices**](SmApi.md#wipe_network_sm_devices) | **POST** /networks/{networkId}/sm/devices/wipe | Wipe a device


# **checkin_network_sm_devices**
> CheckinNetworkSmDevices200Response checkin_network_sm_devices(network_id, checkin_network_sm_devices_request=checkin_network_sm_devices_request)

Force check-in a set of devices

Force check-in a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.checkin_network_sm_devices200_response import CheckinNetworkSmDevices200Response
from openapi_client.models.checkin_network_sm_devices_request import CheckinNetworkSmDevicesRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    checkin_network_sm_devices_request = openapi_client.CheckinNetworkSmDevicesRequest() # CheckinNetworkSmDevicesRequest |  (optional)

    try:
        # Force check-in a set of devices
        api_response = api_instance.checkin_network_sm_devices(network_id, checkin_network_sm_devices_request=checkin_network_sm_devices_request)
        print("The response of SmApi->checkin_network_sm_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->checkin_network_sm_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **checkin_network_sm_devices_request** | [**CheckinNetworkSmDevicesRequest**](CheckinNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**CheckinNetworkSmDevices200Response**](CheckinNetworkSmDevices200Response.md)

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

# **create_network_sm_bypass_activation_lock_attempt**
> object create_network_sm_bypass_activation_lock_attempt(network_id, create_network_sm_bypass_activation_lock_attempt_request)

Bypass activation lock attempt

Bypass activation lock attempt

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_bypass_activation_lock_attempt_request import CreateNetworkSmBypassActivationLockAttemptRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sm_bypass_activation_lock_attempt_request = openapi_client.CreateNetworkSmBypassActivationLockAttemptRequest() # CreateNetworkSmBypassActivationLockAttemptRequest | 

    try:
        # Bypass activation lock attempt
        api_response = api_instance.create_network_sm_bypass_activation_lock_attempt(network_id, create_network_sm_bypass_activation_lock_attempt_request)
        print("The response of SmApi->create_network_sm_bypass_activation_lock_attempt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->create_network_sm_bypass_activation_lock_attempt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sm_bypass_activation_lock_attempt_request** | [**CreateNetworkSmBypassActivationLockAttemptRequest**](CreateNetworkSmBypassActivationLockAttemptRequest.md)|  | 

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
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_sm_target_group**
> object create_network_sm_target_group(network_id, create_network_sm_target_group_request=create_network_sm_target_group_request)

Add a target group

Add a target group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_target_group_request import CreateNetworkSmTargetGroupRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sm_target_group_request = openapi_client.CreateNetworkSmTargetGroupRequest() # CreateNetworkSmTargetGroupRequest |  (optional)

    try:
        # Add a target group
        api_response = api_instance.create_network_sm_target_group(network_id, create_network_sm_target_group_request=create_network_sm_target_group_request)
        print("The response of SmApi->create_network_sm_target_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->create_network_sm_target_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sm_target_group_request** | [**CreateNetworkSmTargetGroupRequest**](CreateNetworkSmTargetGroupRequest.md)|  | [optional] 

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
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_sm_target_group**
> delete_network_sm_target_group(network_id, target_group_id)

Delete a target group from a network

Delete a target group from a network

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 

    try:
        # Delete a target group from a network
        api_instance.delete_network_sm_target_group(network_id, target_group_id)
    except Exception as e:
        print("Exception when calling SmApi->delete_network_sm_target_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 

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

# **delete_network_sm_user_access_device**
> delete_network_sm_user_access_device(network_id, user_access_device_id)

Delete a User Access Device

Delete a User Access Device

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    user_access_device_id = 'user_access_device_id_example' # str | 

    try:
        # Delete a User Access Device
        api_instance.delete_network_sm_user_access_device(network_id, user_access_device_id)
    except Exception as e:
        print("Exception when calling SmApi->delete_network_sm_user_access_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_access_device_id** | **str**|  | 

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

# **get_network_sm_bypass_activation_lock_attempt**
> object get_network_sm_bypass_activation_lock_attempt(network_id, attempt_id)

Bypass activation lock attempt status

Bypass activation lock attempt status

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    attempt_id = 'attempt_id_example' # str | 

    try:
        # Bypass activation lock attempt status
        api_response = api_instance.get_network_sm_bypass_activation_lock_attempt(network_id, attempt_id)
        print("The response of SmApi->get_network_sm_bypass_activation_lock_attempt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_bypass_activation_lock_attempt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **attempt_id** | **str**|  | 

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

# **get_network_sm_device_cellular_usage_history**
> List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner] get_network_sm_device_cellular_usage_history(network_id, device_id)

Return the client's daily cellular data usage history

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_cellular_usage_history200_response_inner import GetNetworkSmDeviceCellularUsageHistory200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Return the client's daily cellular data usage history
        api_response = api_instance.get_network_sm_device_cellular_usage_history(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_cellular_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_cellular_usage_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner]**](GetNetworkSmDeviceCellularUsageHistory200ResponseInner.md)

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

# **get_network_sm_device_certs**
> List[GetNetworkSmDeviceCerts200ResponseInner] get_network_sm_device_certs(network_id, device_id)

List the certs on a device

List the certs on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_certs200_response_inner import GetNetworkSmDeviceCerts200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the certs on a device
        api_response = api_instance.get_network_sm_device_certs(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_certs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_certs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceCerts200ResponseInner]**](GetNetworkSmDeviceCerts200ResponseInner.md)

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

# **get_network_sm_device_connectivity**
> List[GetNetworkSmDeviceConnectivity200ResponseInner] get_network_sm_device_connectivity(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_connectivity200_response_inner import GetNetworkSmDeviceConnectivity200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        api_response = api_instance.get_network_sm_device_connectivity(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_device_connectivity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_connectivity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceConnectivity200ResponseInner]**](GetNetworkSmDeviceConnectivity200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_device_desktop_logs**
> List[GetNetworkSmDeviceDesktopLogs200ResponseInner] get_network_sm_device_desktop_logs(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of various Systems Manager network connection details for desktop devices.

Return historical records of various Systems Manager network connection details for desktop devices.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_desktop_logs200_response_inner import GetNetworkSmDeviceDesktopLogs200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager network connection details for desktop devices.
        api_response = api_instance.get_network_sm_device_desktop_logs(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_device_desktop_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_desktop_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceDesktopLogs200ResponseInner]**](GetNetworkSmDeviceDesktopLogs200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_device_device_command_logs**
> List[GetNetworkSmDeviceDeviceCommandLogs200ResponseInner] get_network_sm_device_device_command_logs(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of commands sent to Systems Manager devices

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_command_logs200_response_inner import GetNetworkSmDeviceDeviceCommandLogs200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of commands sent to Systems Manager devices
        api_response = api_instance.get_network_sm_device_device_command_logs(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_device_device_command_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_device_command_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceDeviceCommandLogs200ResponseInner]**](GetNetworkSmDeviceDeviceCommandLogs200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_device_device_profiles**
> List[GetNetworkSmDeviceDeviceProfiles200ResponseInner] get_network_sm_device_device_profiles(network_id, device_id)

Get the installed profiles associated with a device

Get the installed profiles associated with a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_profiles200_response_inner import GetNetworkSmDeviceDeviceProfiles200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Get the installed profiles associated with a device
        api_response = api_instance.get_network_sm_device_device_profiles(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_device_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_device_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceDeviceProfiles200ResponseInner]**](GetNetworkSmDeviceDeviceProfiles200ResponseInner.md)

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

# **get_network_sm_device_network_adapters**
> List[GetNetworkSmDeviceNetworkAdapters200ResponseInner] get_network_sm_device_network_adapters(network_id, device_id)

List the network adapters of a device

List the network adapters of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_network_adapters200_response_inner import GetNetworkSmDeviceNetworkAdapters200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the network adapters of a device
        api_response = api_instance.get_network_sm_device_network_adapters(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_network_adapters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_network_adapters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceNetworkAdapters200ResponseInner]**](GetNetworkSmDeviceNetworkAdapters200ResponseInner.md)

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

# **get_network_sm_device_performance_history**
> List[GetNetworkSmDevicePerformanceHistory200ResponseInner] get_network_sm_device_performance_history(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of various Systems Manager client metrics for desktop devices.

Return historical records of various Systems Manager client metrics for desktop devices.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_performance_history200_response_inner import GetNetworkSmDevicePerformanceHistory200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager client metrics for desktop devices.
        api_response = api_instance.get_network_sm_device_performance_history(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_device_performance_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_performance_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDevicePerformanceHistory200ResponseInner]**](GetNetworkSmDevicePerformanceHistory200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_device_restrictions**
> List[object] get_network_sm_device_restrictions(network_id, device_id)

List the restrictions on a device

List the restrictions on a device

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the restrictions on a device
        api_response = api_instance.get_network_sm_device_restrictions(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_restrictions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_restrictions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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

# **get_network_sm_device_security_centers**
> List[GetNetworkSmDeviceSecurityCenters200ResponseInner] get_network_sm_device_security_centers(network_id, device_id)

List the security centers on a device

List the security centers on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_security_centers200_response_inner import GetNetworkSmDeviceSecurityCenters200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the security centers on a device
        api_response = api_instance.get_network_sm_device_security_centers(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_security_centers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_security_centers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSecurityCenters200ResponseInner]**](GetNetworkSmDeviceSecurityCenters200ResponseInner.md)

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

# **get_network_sm_device_softwares**
> List[GetNetworkSmDeviceSoftwares200ResponseInner] get_network_sm_device_softwares(network_id, device_id)

Get a list of softwares associated with a device

Get a list of softwares associated with a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_softwares200_response_inner import GetNetworkSmDeviceSoftwares200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Get a list of softwares associated with a device
        api_response = api_instance.get_network_sm_device_softwares(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_softwares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_softwares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSoftwares200ResponseInner]**](GetNetworkSmDeviceSoftwares200ResponseInner.md)

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

# **get_network_sm_device_wlan_lists**
> List[GetNetworkSmDeviceWlanLists200ResponseInner] get_network_sm_device_wlan_lists(network_id, device_id)

List the saved SSID names on a device

List the saved SSID names on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_wlan_lists200_response_inner import GetNetworkSmDeviceWlanLists200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the saved SSID names on a device
        api_response = api_instance.get_network_sm_device_wlan_lists(network_id, device_id)
        print("The response of SmApi->get_network_sm_device_wlan_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_device_wlan_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceWlanLists200ResponseInner]**](GetNetworkSmDeviceWlanLists200ResponseInner.md)

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

# **get_network_sm_devices**
> List[GetNetworkSmDevices200ResponseInner] get_network_sm_devices(network_id, fields=fields, wifi_macs=wifi_macs, serials=serials, ids=ids, scope=scope, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the devices enrolled in an SM network with various specified fields and filters

List the devices enrolled in an SM network with various specified fields and filters

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_devices200_response_inner import GetNetworkSmDevices200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    fields = ['fields_example'] # List[str] | Additional fields that will be displayed for each device.     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,     ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, and url. (optional)
    wifi_macs = ['wifi_macs_example'] # List[str] | Filter devices by wifi mac(s). (optional)
    serials = ['serials_example'] # List[str] | Filter devices by serial(s). (optional)
    ids = ['ids_example'] # List[str] | Filter devices by id(s). (optional)
    scope = ['scope_example'] # List[str] | Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the devices enrolled in an SM network with various specified fields and filters
        api_response = api_instance.get_network_sm_devices(network_id, fields=fields, wifi_macs=wifi_macs, serials=serials, ids=ids, scope=scope, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **fields** | [**List[str]**](str.md)| Additional fields that will be displayed for each device.     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,     ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, and url. | [optional] 
 **wifi_macs** | [**List[str]**](str.md)| Filter devices by wifi mac(s). | [optional] 
 **serials** | [**List[str]**](str.md)| Filter devices by serial(s). | [optional] 
 **ids** | [**List[str]**](str.md)| Filter devices by id(s). | [optional] 
 **scope** | [**List[str]**](str.md)| Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDevices200ResponseInner]**](GetNetworkSmDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_profiles**
> List[GetNetworkSmProfiles200ResponseInner] get_network_sm_profiles(network_id)

List all profiles in a network

List all profiles in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_profiles200_response_inner import GetNetworkSmProfiles200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all profiles in a network
        api_response = api_instance.get_network_sm_profiles(network_id)
        print("The response of SmApi->get_network_sm_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSmProfiles200ResponseInner]**](GetNetworkSmProfiles200ResponseInner.md)

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

# **get_network_sm_target_group**
> object get_network_sm_target_group(network_id, target_group_id, with_details=with_details)

Return a target group

Return a target group

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 
    with_details = True # bool | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response (optional)

    try:
        # Return a target group
        api_response = api_instance.get_network_sm_target_group(network_id, target_group_id, with_details=with_details)
        print("The response of SmApi->get_network_sm_target_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_target_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 
 **with_details** | **bool**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

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

# **get_network_sm_target_groups**
> List[object] get_network_sm_target_groups(network_id, with_details=with_details)

List the target groups in this network

List the target groups in this network

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    with_details = True # bool | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response (optional)

    try:
        # List the target groups in this network
        api_response = api_instance.get_network_sm_target_groups(network_id, with_details=with_details)
        print("The response of SmApi->get_network_sm_target_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_target_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **with_details** | **bool**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

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

# **get_network_sm_trusted_access_configs**
> List[GetNetworkSmTrustedAccessConfigs200ResponseInner] get_network_sm_trusted_access_configs(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List Trusted Access Configs

List Trusted Access Configs

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_trusted_access_configs200_response_inner import GetNetworkSmTrustedAccessConfigs200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List Trusted Access Configs
        api_response = api_instance.get_network_sm_trusted_access_configs(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_trusted_access_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_trusted_access_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmTrustedAccessConfigs200ResponseInner]**](GetNetworkSmTrustedAccessConfigs200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_user_access_devices**
> List[GetNetworkSmUserAccessDevices200ResponseInner] get_network_sm_user_access_devices(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List User Access Devices and its Trusted Access Connections

List User Access Devices and its Trusted Access Connections

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_user_access_devices200_response_inner import GetNetworkSmUserAccessDevices200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List User Access Devices and its Trusted Access Connections
        api_response = api_instance.get_network_sm_user_access_devices(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SmApi->get_network_sm_user_access_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_user_access_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmUserAccessDevices200ResponseInner]**](GetNetworkSmUserAccessDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sm_user_device_profiles**
> List[GetNetworkSmDeviceDeviceProfiles200ResponseInner] get_network_sm_user_device_profiles(network_id, user_id)

Get the profiles associated with a user

Get the profiles associated with a user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_profiles200_response_inner import GetNetworkSmDeviceDeviceProfiles200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Get the profiles associated with a user
        api_response = api_instance.get_network_sm_user_device_profiles(network_id, user_id)
        print("The response of SmApi->get_network_sm_user_device_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_user_device_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceDeviceProfiles200ResponseInner]**](GetNetworkSmDeviceDeviceProfiles200ResponseInner.md)

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

# **get_network_sm_user_softwares**
> List[GetNetworkSmDeviceSoftwares200ResponseInner] get_network_sm_user_softwares(network_id, user_id)

Get a list of softwares associated with a user

Get a list of softwares associated with a user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_softwares200_response_inner import GetNetworkSmDeviceSoftwares200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Get a list of softwares associated with a user
        api_response = api_instance.get_network_sm_user_softwares(network_id, user_id)
        print("The response of SmApi->get_network_sm_user_softwares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_user_softwares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSoftwares200ResponseInner]**](GetNetworkSmDeviceSoftwares200ResponseInner.md)

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

# **get_network_sm_users**
> List[GetNetworkSmUsers200ResponseInner] get_network_sm_users(network_id, ids=ids, usernames=usernames, emails=emails, scope=scope)

List the owners in an SM network with various specified fields and filters

List the owners in an SM network with various specified fields and filters

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_users200_response_inner import GetNetworkSmUsers200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    ids = ['ids_example'] # List[str] | Filter users by id(s). (optional)
    usernames = ['usernames_example'] # List[str] | Filter users by username(s). (optional)
    emails = ['emails_example'] # List[str] | Filter users by email(s). (optional)
    scope = ['scope_example'] # List[str] | Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags. (optional)

    try:
        # List the owners in an SM network with various specified fields and filters
        api_response = api_instance.get_network_sm_users(network_id, ids=ids, usernames=usernames, emails=emails, scope=scope)
        print("The response of SmApi->get_network_sm_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_network_sm_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **ids** | [**List[str]**](str.md)| Filter users by id(s). | [optional] 
 **usernames** | [**List[str]**](str.md)| Filter users by username(s). | [optional] 
 **emails** | [**List[str]**](str.md)| Filter users by email(s). | [optional] 
 **scope** | [**List[str]**](str.md)| Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags. | [optional] 

### Return type

[**List[GetNetworkSmUsers200ResponseInner]**](GetNetworkSmUsers200ResponseInner.md)

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

# **get_organization_sm_apns_cert**
> GetOrganizationSmApnsCert200Response get_organization_sm_apns_cert(organization_id)

Get the organization's APNS certificate

Get the organization's APNS certificate

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_apns_cert200_response import GetOrganizationSmApnsCert200Response
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
    api_instance = openapi_client.SmApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Get the organization's APNS certificate
        api_response = api_instance.get_organization_sm_apns_cert(organization_id)
        print("The response of SmApi->get_organization_sm_apns_cert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_organization_sm_apns_cert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationSmApnsCert200Response**](GetOrganizationSmApnsCert200Response.md)

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

# **get_organization_sm_vpp_account**
> GetOrganizationSmVppAccounts200ResponseInner get_organization_sm_vpp_account(organization_id, vpp_account_id)

Get a hash containing the unparsed token of the VPP account with the given ID

Get a hash containing the unparsed token of the VPP account with the given ID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_vpp_accounts200_response_inner import GetOrganizationSmVppAccounts200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    organization_id = 'organization_id_example' # str | 
    vpp_account_id = 'vpp_account_id_example' # str | 

    try:
        # Get a hash containing the unparsed token of the VPP account with the given ID
        api_response = api_instance.get_organization_sm_vpp_account(organization_id, vpp_account_id)
        print("The response of SmApi->get_organization_sm_vpp_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_organization_sm_vpp_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **vpp_account_id** | **str**|  | 

### Return type

[**GetOrganizationSmVppAccounts200ResponseInner**](GetOrganizationSmVppAccounts200ResponseInner.md)

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

# **get_organization_sm_vpp_accounts**
> List[GetOrganizationSmVppAccounts200ResponseInner] get_organization_sm_vpp_accounts(organization_id)

List the VPP accounts in the organization

List the VPP accounts in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_vpp_accounts200_response_inner import GetOrganizationSmVppAccounts200ResponseInner
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
    api_instance = openapi_client.SmApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the VPP accounts in the organization
        api_response = api_instance.get_organization_sm_vpp_accounts(organization_id)
        print("The response of SmApi->get_organization_sm_vpp_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->get_organization_sm_vpp_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationSmVppAccounts200ResponseInner]**](GetOrganizationSmVppAccounts200ResponseInner.md)

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

# **lock_network_sm_devices**
> CheckinNetworkSmDevices200Response lock_network_sm_devices(network_id, lock_network_sm_devices_request=lock_network_sm_devices_request)

Lock a set of devices

Lock a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.checkin_network_sm_devices200_response import CheckinNetworkSmDevices200Response
from openapi_client.models.lock_network_sm_devices_request import LockNetworkSmDevicesRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    lock_network_sm_devices_request = openapi_client.LockNetworkSmDevicesRequest() # LockNetworkSmDevicesRequest |  (optional)

    try:
        # Lock a set of devices
        api_response = api_instance.lock_network_sm_devices(network_id, lock_network_sm_devices_request=lock_network_sm_devices_request)
        print("The response of SmApi->lock_network_sm_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->lock_network_sm_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **lock_network_sm_devices_request** | [**LockNetworkSmDevicesRequest**](LockNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**CheckinNetworkSmDevices200Response**](CheckinNetworkSmDevices200Response.md)

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

# **modify_network_sm_devices_tags**
> List[ModifyNetworkSmDevicesTags200ResponseInner] modify_network_sm_devices_tags(network_id, modify_network_sm_devices_tags_request)

Add, delete, or update the tags of a set of devices

Add, delete, or update the tags of a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.modify_network_sm_devices_tags200_response_inner import ModifyNetworkSmDevicesTags200ResponseInner
from openapi_client.models.modify_network_sm_devices_tags_request import ModifyNetworkSmDevicesTagsRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    modify_network_sm_devices_tags_request = openapi_client.ModifyNetworkSmDevicesTagsRequest() # ModifyNetworkSmDevicesTagsRequest | 

    try:
        # Add, delete, or update the tags of a set of devices
        api_response = api_instance.modify_network_sm_devices_tags(network_id, modify_network_sm_devices_tags_request)
        print("The response of SmApi->modify_network_sm_devices_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->modify_network_sm_devices_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **modify_network_sm_devices_tags_request** | [**ModifyNetworkSmDevicesTagsRequest**](ModifyNetworkSmDevicesTagsRequest.md)|  | 

### Return type

[**List[ModifyNetworkSmDevicesTags200ResponseInner]**](ModifyNetworkSmDevicesTags200ResponseInner.md)

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

# **move_network_sm_devices**
> MoveNetworkSmDevices200Response move_network_sm_devices(network_id, move_network_sm_devices_request)

Move a set of devices to a new network

Move a set of devices to a new network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_network_sm_devices200_response import MoveNetworkSmDevices200Response
from openapi_client.models.move_network_sm_devices_request import MoveNetworkSmDevicesRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    move_network_sm_devices_request = openapi_client.MoveNetworkSmDevicesRequest() # MoveNetworkSmDevicesRequest | 

    try:
        # Move a set of devices to a new network
        api_response = api_instance.move_network_sm_devices(network_id, move_network_sm_devices_request)
        print("The response of SmApi->move_network_sm_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->move_network_sm_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **move_network_sm_devices_request** | [**MoveNetworkSmDevicesRequest**](MoveNetworkSmDevicesRequest.md)|  | 

### Return type

[**MoveNetworkSmDevices200Response**](MoveNetworkSmDevices200Response.md)

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

# **refresh_network_sm_device_details**
> refresh_network_sm_device_details(network_id, device_id)

Refresh the details of a device

Refresh the details of a device

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Refresh the details of a device
        api_instance.refresh_network_sm_device_details(network_id, device_id)
    except Exception as e:
        print("Exception when calling SmApi->refresh_network_sm_device_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unenroll_network_sm_device**
> object unenroll_network_sm_device(network_id, device_id)

Unenroll a device

Unenroll a device

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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Unenroll a device
        api_response = api_instance.unenroll_network_sm_device(network_id, device_id)
        print("The response of SmApi->unenroll_network_sm_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->unenroll_network_sm_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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

# **update_network_sm_devices_fields**
> List[UpdateNetworkSmDevicesFields200ResponseInner] update_network_sm_devices_fields(network_id, update_network_sm_devices_fields_request)

Modify the fields of a device

Modify the fields of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_sm_devices_fields200_response_inner import UpdateNetworkSmDevicesFields200ResponseInner
from openapi_client.models.update_network_sm_devices_fields_request import UpdateNetworkSmDevicesFieldsRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_sm_devices_fields_request = openapi_client.UpdateNetworkSmDevicesFieldsRequest() # UpdateNetworkSmDevicesFieldsRequest | 

    try:
        # Modify the fields of a device
        api_response = api_instance.update_network_sm_devices_fields(network_id, update_network_sm_devices_fields_request)
        print("The response of SmApi->update_network_sm_devices_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->update_network_sm_devices_fields: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_sm_devices_fields_request** | [**UpdateNetworkSmDevicesFieldsRequest**](UpdateNetworkSmDevicesFieldsRequest.md)|  | 

### Return type

[**List[UpdateNetworkSmDevicesFields200ResponseInner]**](UpdateNetworkSmDevicesFields200ResponseInner.md)

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

# **update_network_sm_target_group**
> object update_network_sm_target_group(network_id, target_group_id, create_network_sm_target_group_request=create_network_sm_target_group_request)

Update a target group

Update a target group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sm_target_group_request import CreateNetworkSmTargetGroupRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    target_group_id = 'target_group_id_example' # str | 
    create_network_sm_target_group_request = openapi_client.CreateNetworkSmTargetGroupRequest() # CreateNetworkSmTargetGroupRequest |  (optional)

    try:
        # Update a target group
        api_response = api_instance.update_network_sm_target_group(network_id, target_group_id, create_network_sm_target_group_request=create_network_sm_target_group_request)
        print("The response of SmApi->update_network_sm_target_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->update_network_sm_target_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **target_group_id** | **str**|  | 
 **create_network_sm_target_group_request** | [**CreateNetworkSmTargetGroupRequest**](CreateNetworkSmTargetGroupRequest.md)|  | [optional] 

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

# **wipe_network_sm_devices**
> WipeNetworkSmDevices200Response wipe_network_sm_devices(network_id, wipe_network_sm_devices_request=wipe_network_sm_devices_request)

Wipe a device

Wipe a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.wipe_network_sm_devices200_response import WipeNetworkSmDevices200Response
from openapi_client.models.wipe_network_sm_devices_request import WipeNetworkSmDevicesRequest
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
    api_instance = openapi_client.SmApi(api_client)
    network_id = 'network_id_example' # str | 
    wipe_network_sm_devices_request = openapi_client.WipeNetworkSmDevicesRequest() # WipeNetworkSmDevicesRequest |  (optional)

    try:
        # Wipe a device
        api_response = api_instance.wipe_network_sm_devices(network_id, wipe_network_sm_devices_request=wipe_network_sm_devices_request)
        print("The response of SmApi->wipe_network_sm_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmApi->wipe_network_sm_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wipe_network_sm_devices_request** | [**WipeNetworkSmDevicesRequest**](WipeNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**WipeNetworkSmDevices200Response**](WipeNetworkSmDevices200Response.md)

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

