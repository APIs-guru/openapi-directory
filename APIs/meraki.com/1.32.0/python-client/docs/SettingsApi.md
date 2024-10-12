# openapi_client.SettingsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_appliance_uplinks_settings_2**](SettingsApi.md#get_device_appliance_uplinks_settings_2) | **GET** /devices/{serial}/appliance/uplinks/settings | Return the uplink settings for an MX appliance
[**get_device_camera_video_settings_2**](SettingsApi.md#get_device_camera_video_settings_2) | **GET** /devices/{serial}/camera/video/settings | Returns video settings for the given camera
[**get_device_wireless_bluetooth_settings_2**](SettingsApi.md#get_device_wireless_bluetooth_settings_2) | **GET** /devices/{serial}/wireless/bluetooth/settings | Return the bluetooth settings for a wireless device
[**get_device_wireless_radio_settings_2**](SettingsApi.md#get_device_wireless_radio_settings_2) | **GET** /devices/{serial}/wireless/radio/settings | Return the radio settings of a device
[**get_network_alerts_settings_2**](SettingsApi.md#get_network_alerts_settings_2) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**get_network_appliance_firewall_settings_2**](SettingsApi.md#get_network_appliance_firewall_settings_2) | **GET** /networks/{networkId}/appliance/firewall/settings | Return the firewall settings for this network
[**get_network_appliance_settings_1**](SettingsApi.md#get_network_appliance_settings_1) | **GET** /networks/{networkId}/appliance/settings | Return the appliance settings for a network
[**get_network_appliance_vlans_settings_2**](SettingsApi.md#get_network_appliance_vlans_settings_2) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**get_network_settings_1**](SettingsApi.md#get_network_settings_1) | **GET** /networks/{networkId}/settings | Return the settings for a network
[**get_network_switch_settings_1**](SettingsApi.md#get_network_switch_settings_1) | **GET** /networks/{networkId}/switch/settings | Returns the switch network settings
[**get_network_wireless_bluetooth_settings_2**](SettingsApi.md#get_network_wireless_bluetooth_settings_2) | **GET** /networks/{networkId}/wireless/bluetooth/settings | Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.
[**get_network_wireless_settings_1**](SettingsApi.md#get_network_wireless_settings_1) | **GET** /networks/{networkId}/wireless/settings | Return the wireless settings for a network
[**get_network_wireless_ssid_splash_settings_3**](SettingsApi.md#get_network_wireless_ssid_splash_settings_3) | **GET** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Display the splash page settings for the given SSID
[**get_organization_adaptive_policy_settings_2**](SettingsApi.md#get_organization_adaptive_policy_settings_2) | **GET** /organizations/{organizationId}/adaptivePolicy/settings | Returns global adaptive policy settings in an organization
[**update_device_appliance_uplinks_settings_2**](SettingsApi.md#update_device_appliance_uplinks_settings_2) | **PUT** /devices/{serial}/appliance/uplinks/settings | Update the uplink settings for an MX appliance
[**update_device_camera_video_settings_2**](SettingsApi.md#update_device_camera_video_settings_2) | **PUT** /devices/{serial}/camera/video/settings | Update video settings for the given camera
[**update_device_wireless_bluetooth_settings_2**](SettingsApi.md#update_device_wireless_bluetooth_settings_2) | **PUT** /devices/{serial}/wireless/bluetooth/settings | Update the bluetooth settings for a wireless device
[**update_device_wireless_radio_settings_2**](SettingsApi.md#update_device_wireless_radio_settings_2) | **PUT** /devices/{serial}/wireless/radio/settings | Update the radio settings of a device
[**update_network_alerts_settings_2**](SettingsApi.md#update_network_alerts_settings_2) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network
[**update_network_appliance_firewall_settings_2**](SettingsApi.md#update_network_appliance_firewall_settings_2) | **PUT** /networks/{networkId}/appliance/firewall/settings | Update the firewall settings for this network
[**update_network_appliance_settings_1**](SettingsApi.md#update_network_appliance_settings_1) | **PUT** /networks/{networkId}/appliance/settings | Update the appliance settings for a network
[**update_network_appliance_vlans_settings_2**](SettingsApi.md#update_network_appliance_vlans_settings_2) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network
[**update_network_settings_1**](SettingsApi.md#update_network_settings_1) | **PUT** /networks/{networkId}/settings | Update the settings for a network
[**update_network_switch_settings_1**](SettingsApi.md#update_network_switch_settings_1) | **PUT** /networks/{networkId}/switch/settings | Update switch network settings
[**update_network_wireless_bluetooth_settings_2**](SettingsApi.md#update_network_wireless_bluetooth_settings_2) | **PUT** /networks/{networkId}/wireless/bluetooth/settings | Update the Bluetooth settings for a network
[**update_network_wireless_settings_1**](SettingsApi.md#update_network_wireless_settings_1) | **PUT** /networks/{networkId}/wireless/settings | Update the wireless settings for a network
[**update_network_wireless_ssid_splash_settings_3**](SettingsApi.md#update_network_wireless_ssid_splash_settings_3) | **PUT** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Modify the splash page settings for the given SSID
[**update_organization_adaptive_policy_settings_2**](SettingsApi.md#update_organization_adaptive_policy_settings_2) | **PUT** /organizations/{organizationId}/adaptivePolicy/settings | Update global adaptive policy settings


# **get_device_appliance_uplinks_settings_2**
> GetDeviceApplianceUplinksSettings200Response get_device_appliance_uplinks_settings_2(serial)

Return the uplink settings for an MX appliance

Return the uplink settings for an MX appliance

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_appliance_uplinks_settings200_response import GetDeviceApplianceUplinksSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the uplink settings for an MX appliance
        api_response = api_instance.get_device_appliance_uplinks_settings_2(serial)
        print("The response of SettingsApi->get_device_appliance_uplinks_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_device_appliance_uplinks_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**GetDeviceApplianceUplinksSettings200Response**](GetDeviceApplianceUplinksSettings200Response.md)

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

# **get_device_camera_video_settings_2**
> object get_device_camera_video_settings_2(serial)

Returns video settings for the given camera

Returns video settings for the given camera

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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns video settings for the given camera
        api_response = api_instance.get_device_camera_video_settings_2(serial)
        print("The response of SettingsApi->get_device_camera_video_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_device_camera_video_settings_2: %s\n" % e)
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

# **get_device_wireless_bluetooth_settings_2**
> GetDeviceWirelessBluetoothSettings200Response get_device_wireless_bluetooth_settings_2(serial)

Return the bluetooth settings for a wireless device

Return the bluetooth settings for a wireless device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_wireless_bluetooth_settings200_response import GetDeviceWirelessBluetoothSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the bluetooth settings for a wireless device
        api_response = api_instance.get_device_wireless_bluetooth_settings_2(serial)
        print("The response of SettingsApi->get_device_wireless_bluetooth_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_device_wireless_bluetooth_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**GetDeviceWirelessBluetoothSettings200Response**](GetDeviceWirelessBluetoothSettings200Response.md)

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

# **get_device_wireless_radio_settings_2**
> object get_device_wireless_radio_settings_2(serial)

Return the radio settings of a device

Return the radio settings of a device

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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the radio settings of a device
        api_response = api_instance.get_device_wireless_radio_settings_2(serial)
        print("The response of SettingsApi->get_device_wireless_radio_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_device_wireless_radio_settings_2: %s\n" % e)
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

# **get_network_alerts_settings_2**
> object get_network_alerts_settings_2(network_id)

Return the alert configuration for this network

Return the alert configuration for this network

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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the alert configuration for this network
        api_response = api_instance.get_network_alerts_settings_2(network_id)
        print("The response of SettingsApi->get_network_alerts_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_alerts_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_appliance_firewall_settings_2**
> object get_network_appliance_firewall_settings_2(network_id)

Return the firewall settings for this network

Return the firewall settings for this network

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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the firewall settings for this network
        api_response = api_instance.get_network_appliance_firewall_settings_2(network_id)
        print("The response of SettingsApi->get_network_appliance_firewall_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_appliance_firewall_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_appliance_settings_1**
> GetNetworkApplianceSettings200Response get_network_appliance_settings_1(network_id)

Return the appliance settings for a network

Return the appliance settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_settings200_response import GetNetworkApplianceSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the appliance settings for a network
        api_response = api_instance.get_network_appliance_settings_1(network_id)
        print("The response of SettingsApi->get_network_appliance_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_appliance_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceSettings200Response**](GetNetworkApplianceSettings200Response.md)

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

# **get_network_appliance_vlans_settings_2**
> object get_network_appliance_vlans_settings_2(network_id)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the enabled status of VLANs for the network
        api_response = api_instance.get_network_appliance_vlans_settings_2(network_id)
        print("The response of SettingsApi->get_network_appliance_vlans_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_appliance_vlans_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_settings_1**
> GetNetworkSettings200Response get_network_settings_1(network_id)

Return the settings for a network

Return the settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_settings200_response import GetNetworkSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the settings for a network
        api_response = api_instance.get_network_settings_1(network_id)
        print("The response of SettingsApi->get_network_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSettings200Response**](GetNetworkSettings200Response.md)

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

# **get_network_switch_settings_1**
> GetNetworkSwitchSettings200Response get_network_switch_settings_1(network_id)

Returns the switch network settings

Returns the switch network settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_settings200_response import GetNetworkSwitchSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the switch network settings
        api_response = api_instance.get_network_switch_settings_1(network_id)
        print("The response of SettingsApi->get_network_switch_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_switch_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchSettings200Response**](GetNetworkSwitchSettings200Response.md)

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

# **get_network_wireless_bluetooth_settings_2**
> GetNetworkWirelessBluetoothSettings200Response get_network_wireless_bluetooth_settings_2(network_id)

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_bluetooth_settings200_response import GetNetworkWirelessBluetoothSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        api_response = api_instance.get_network_wireless_bluetooth_settings_2(network_id)
        print("The response of SettingsApi->get_network_wireless_bluetooth_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_wireless_bluetooth_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkWirelessBluetoothSettings200Response**](GetNetworkWirelessBluetoothSettings200Response.md)

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

# **get_network_wireless_settings_1**
> GetNetworkWirelessSettings200Response get_network_wireless_settings_1(network_id)

Return the wireless settings for a network

Return the wireless settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_settings200_response import GetNetworkWirelessSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the wireless settings for a network
        api_response = api_instance.get_network_wireless_settings_1(network_id)
        print("The response of SettingsApi->get_network_wireless_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_wireless_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkWirelessSettings200Response**](GetNetworkWirelessSettings200Response.md)

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

# **get_network_wireless_ssid_splash_settings_3**
> GetNetworkWirelessSsidSplashSettings200Response get_network_wireless_ssid_splash_settings_3(network_id, number)

Display the splash page settings for the given SSID

Display the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the splash page settings for the given SSID
        api_response = api_instance.get_network_wireless_ssid_splash_settings_3(network_id, number)
        print("The response of SettingsApi->get_network_wireless_ssid_splash_settings_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_network_wireless_ssid_splash_settings_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **get_organization_adaptive_policy_settings_2**
> object get_organization_adaptive_policy_settings_2(organization_id)

Returns global adaptive policy settings in an organization

Returns global adaptive policy settings in an organization

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
    api_instance = openapi_client.SettingsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns global adaptive policy settings in an organization
        api_response = api_instance.get_organization_adaptive_policy_settings_2(organization_id)
        print("The response of SettingsApi->get_organization_adaptive_policy_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->get_organization_adaptive_policy_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **update_device_appliance_uplinks_settings_2**
> GetDeviceApplianceUplinksSettings200Response update_device_appliance_uplinks_settings_2(serial, update_device_appliance_uplinks_settings_request)

Update the uplink settings for an MX appliance

Update the uplink settings for an MX appliance

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_appliance_uplinks_settings200_response import GetDeviceApplianceUplinksSettings200Response
from openapi_client.models.update_device_appliance_uplinks_settings_request import UpdateDeviceApplianceUplinksSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_appliance_uplinks_settings_request = openapi_client.UpdateDeviceApplianceUplinksSettingsRequest() # UpdateDeviceApplianceUplinksSettingsRequest | 

    try:
        # Update the uplink settings for an MX appliance
        api_response = api_instance.update_device_appliance_uplinks_settings_2(serial, update_device_appliance_uplinks_settings_request)
        print("The response of SettingsApi->update_device_appliance_uplinks_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_device_appliance_uplinks_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_appliance_uplinks_settings_request** | [**UpdateDeviceApplianceUplinksSettingsRequest**](UpdateDeviceApplianceUplinksSettingsRequest.md)|  | 

### Return type

[**GetDeviceApplianceUplinksSettings200Response**](GetDeviceApplianceUplinksSettings200Response.md)

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

# **update_device_camera_video_settings_2**
> object update_device_camera_video_settings_2(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)

Update video settings for the given camera

Update video settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_video_settings_request import UpdateDeviceCameraVideoSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_video_settings_request = openapi_client.UpdateDeviceCameraVideoSettingsRequest() # UpdateDeviceCameraVideoSettingsRequest |  (optional)

    try:
        # Update video settings for the given camera
        api_response = api_instance.update_device_camera_video_settings_2(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)
        print("The response of SettingsApi->update_device_camera_video_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_device_camera_video_settings_2: %s\n" % e)
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

# **update_device_wireless_bluetooth_settings_2**
> GetDeviceWirelessBluetoothSettings200Response update_device_wireless_bluetooth_settings_2(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)

Update the bluetooth settings for a wireless device

Update the bluetooth settings for a wireless device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_wireless_bluetooth_settings200_response import GetDeviceWirelessBluetoothSettings200Response
from openapi_client.models.update_device_wireless_bluetooth_settings_request import UpdateDeviceWirelessBluetoothSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_wireless_bluetooth_settings_request = openapi_client.UpdateDeviceWirelessBluetoothSettingsRequest() # UpdateDeviceWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the bluetooth settings for a wireless device
        api_response = api_instance.update_device_wireless_bluetooth_settings_2(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)
        print("The response of SettingsApi->update_device_wireless_bluetooth_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_device_wireless_bluetooth_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_wireless_bluetooth_settings_request** | [**UpdateDeviceWirelessBluetoothSettingsRequest**](UpdateDeviceWirelessBluetoothSettingsRequest.md)|  | [optional] 

### Return type

[**GetDeviceWirelessBluetoothSettings200Response**](GetDeviceWirelessBluetoothSettings200Response.md)

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

# **update_device_wireless_radio_settings_2**
> object update_device_wireless_radio_settings_2(serial, update_device_wireless_radio_settings_request=update_device_wireless_radio_settings_request)

Update the radio settings of a device

Update the radio settings of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_wireless_radio_settings_request import UpdateDeviceWirelessRadioSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_wireless_radio_settings_request = openapi_client.UpdateDeviceWirelessRadioSettingsRequest() # UpdateDeviceWirelessRadioSettingsRequest |  (optional)

    try:
        # Update the radio settings of a device
        api_response = api_instance.update_device_wireless_radio_settings_2(serial, update_device_wireless_radio_settings_request=update_device_wireless_radio_settings_request)
        print("The response of SettingsApi->update_device_wireless_radio_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_device_wireless_radio_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_wireless_radio_settings_request** | [**UpdateDeviceWirelessRadioSettingsRequest**](UpdateDeviceWirelessRadioSettingsRequest.md)|  | [optional] 

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

# **update_network_alerts_settings_2**
> object update_network_alerts_settings_2(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)

Update the alert configuration for this network

Update the alert configuration for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_alerts_settings_request import UpdateNetworkAlertsSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_alerts_settings_request = openapi_client.UpdateNetworkAlertsSettingsRequest() # UpdateNetworkAlertsSettingsRequest |  (optional)

    try:
        # Update the alert configuration for this network
        api_response = api_instance.update_network_alerts_settings_2(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)
        print("The response of SettingsApi->update_network_alerts_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_alerts_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_alerts_settings_request** | [**UpdateNetworkAlertsSettingsRequest**](UpdateNetworkAlertsSettingsRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_settings_2**
> object update_network_appliance_firewall_settings_2(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)

Update the firewall settings for this network

Update the firewall settings for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_settings_request import UpdateNetworkApplianceFirewallSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_settings_request = openapi_client.UpdateNetworkApplianceFirewallSettingsRequest() # UpdateNetworkApplianceFirewallSettingsRequest |  (optional)

    try:
        # Update the firewall settings for this network
        api_response = api_instance.update_network_appliance_firewall_settings_2(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)
        print("The response of SettingsApi->update_network_appliance_firewall_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_appliance_firewall_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_settings_request** | [**UpdateNetworkApplianceFirewallSettingsRequest**](UpdateNetworkApplianceFirewallSettingsRequest.md)|  | [optional] 

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

# **update_network_appliance_settings_1**
> GetNetworkApplianceSettings200Response update_network_appliance_settings_1(network_id, update_network_appliance_settings_request=update_network_appliance_settings_request)

Update the appliance settings for a network

Update the appliance settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_settings200_response import GetNetworkApplianceSettings200Response
from openapi_client.models.update_network_appliance_settings_request import UpdateNetworkApplianceSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_settings_request = openapi_client.UpdateNetworkApplianceSettingsRequest() # UpdateNetworkApplianceSettingsRequest |  (optional)

    try:
        # Update the appliance settings for a network
        api_response = api_instance.update_network_appliance_settings_1(network_id, update_network_appliance_settings_request=update_network_appliance_settings_request)
        print("The response of SettingsApi->update_network_appliance_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_appliance_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_settings_request** | [**UpdateNetworkApplianceSettingsRequest**](UpdateNetworkApplianceSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceSettings200Response**](GetNetworkApplianceSettings200Response.md)

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

# **update_network_appliance_vlans_settings_2**
> object update_network_appliance_vlans_settings_2(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_vlans_settings_request import UpdateNetworkApplianceVlansSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vlans_settings_request = openapi_client.UpdateNetworkApplianceVlansSettingsRequest() # UpdateNetworkApplianceVlansSettingsRequest |  (optional)

    try:
        # Enable/Disable VLANs for the given network
        api_response = api_instance.update_network_appliance_vlans_settings_2(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)
        print("The response of SettingsApi->update_network_appliance_vlans_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_appliance_vlans_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vlans_settings_request** | [**UpdateNetworkApplianceVlansSettingsRequest**](UpdateNetworkApplianceVlansSettingsRequest.md)|  | [optional] 

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

# **update_network_settings_1**
> GetNetworkSettings200Response update_network_settings_1(network_id, update_network_settings_request=update_network_settings_request)

Update the settings for a network

Update the settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_settings200_response import GetNetworkSettings200Response
from openapi_client.models.update_network_settings_request import UpdateNetworkSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_settings_request = openapi_client.UpdateNetworkSettingsRequest() # UpdateNetworkSettingsRequest |  (optional)

    try:
        # Update the settings for a network
        api_response = api_instance.update_network_settings_1(network_id, update_network_settings_request=update_network_settings_request)
        print("The response of SettingsApi->update_network_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_settings_request** | [**UpdateNetworkSettingsRequest**](UpdateNetworkSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkSettings200Response**](GetNetworkSettings200Response.md)

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

# **update_network_switch_settings_1**
> GetNetworkSwitchSettings200Response update_network_switch_settings_1(network_id, update_network_switch_settings_request=update_network_switch_settings_request)

Update switch network settings

Update switch network settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_settings200_response import GetNetworkSwitchSettings200Response
from openapi_client.models.update_network_switch_settings_request import UpdateNetworkSwitchSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_request = openapi_client.UpdateNetworkSwitchSettingsRequest() # UpdateNetworkSwitchSettingsRequest |  (optional)

    try:
        # Update switch network settings
        api_response = api_instance.update_network_switch_settings_1(network_id, update_network_switch_settings_request=update_network_switch_settings_request)
        print("The response of SettingsApi->update_network_switch_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_switch_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_request** | [**UpdateNetworkSwitchSettingsRequest**](UpdateNetworkSwitchSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchSettings200Response**](GetNetworkSwitchSettings200Response.md)

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

# **update_network_wireless_bluetooth_settings_2**
> GetNetworkWirelessBluetoothSettings200Response update_network_wireless_bluetooth_settings_2(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)

Update the Bluetooth settings for a network

Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_bluetooth_settings200_response import GetNetworkWirelessBluetoothSettings200Response
from openapi_client.models.update_network_wireless_bluetooth_settings_request import UpdateNetworkWirelessBluetoothSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_bluetooth_settings_request = openapi_client.UpdateNetworkWirelessBluetoothSettingsRequest() # UpdateNetworkWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the Bluetooth settings for a network
        api_response = api_instance.update_network_wireless_bluetooth_settings_2(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)
        print("The response of SettingsApi->update_network_wireless_bluetooth_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_wireless_bluetooth_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_bluetooth_settings_request** | [**UpdateNetworkWirelessBluetoothSettingsRequest**](UpdateNetworkWirelessBluetoothSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessBluetoothSettings200Response**](GetNetworkWirelessBluetoothSettings200Response.md)

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

# **update_network_wireless_settings_1**
> GetNetworkWirelessSettings200Response update_network_wireless_settings_1(network_id, update_network_wireless_settings_request=update_network_wireless_settings_request)

Update the wireless settings for a network

Update the wireless settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_settings200_response import GetNetworkWirelessSettings200Response
from openapi_client.models.update_network_wireless_settings_request import UpdateNetworkWirelessSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_settings_request = openapi_client.UpdateNetworkWirelessSettingsRequest() # UpdateNetworkWirelessSettingsRequest |  (optional)

    try:
        # Update the wireless settings for a network
        api_response = api_instance.update_network_wireless_settings_1(network_id, update_network_wireless_settings_request=update_network_wireless_settings_request)
        print("The response of SettingsApi->update_network_wireless_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_wireless_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_settings_request** | [**UpdateNetworkWirelessSettingsRequest**](UpdateNetworkWirelessSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSettings200Response**](GetNetworkWirelessSettings200Response.md)

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

# **update_network_wireless_ssid_splash_settings_3**
> GetNetworkWirelessSsidSplashSettings200Response update_network_wireless_ssid_splash_settings_3(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)

Modify the splash page settings for the given SSID

Modify the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
from openapi_client.models.update_network_wireless_ssid_splash_settings_request import UpdateNetworkWirelessSsidSplashSettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_splash_settings_request = openapi_client.UpdateNetworkWirelessSsidSplashSettingsRequest() # UpdateNetworkWirelessSsidSplashSettingsRequest |  (optional)

    try:
        # Modify the splash page settings for the given SSID
        api_response = api_instance.update_network_wireless_ssid_splash_settings_3(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)
        print("The response of SettingsApi->update_network_wireless_ssid_splash_settings_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_network_wireless_ssid_splash_settings_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_splash_settings_request** | [**UpdateNetworkWirelessSsidSplashSettingsRequest**](UpdateNetworkWirelessSsidSplashSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **update_organization_adaptive_policy_settings_2**
> object update_organization_adaptive_policy_settings_2(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)

Update global adaptive policy settings

Update global adaptive policy settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_settings_request import UpdateOrganizationAdaptivePolicySettingsRequest
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
    api_instance = openapi_client.SettingsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_adaptive_policy_settings_request = openapi_client.UpdateOrganizationAdaptivePolicySettingsRequest() # UpdateOrganizationAdaptivePolicySettingsRequest |  (optional)

    try:
        # Update global adaptive policy settings
        api_response = api_instance.update_organization_adaptive_policy_settings_2(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)
        print("The response of SettingsApi->update_organization_adaptive_policy_settings_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->update_organization_adaptive_policy_settings_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_adaptive_policy_settings_request** | [**UpdateOrganizationAdaptivePolicySettingsRequest**](UpdateOrganizationAdaptivePolicySettingsRequest.md)|  | [optional] 

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

