# openapi_client.BluetoothApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_wireless_bluetooth_settings_1**](BluetoothApi.md#get_device_wireless_bluetooth_settings_1) | **GET** /devices/{serial}/wireless/bluetooth/settings | Return the bluetooth settings for a wireless device
[**get_network_wireless_bluetooth_settings_1**](BluetoothApi.md#get_network_wireless_bluetooth_settings_1) | **GET** /networks/{networkId}/wireless/bluetooth/settings | Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.
[**update_device_wireless_bluetooth_settings_1**](BluetoothApi.md#update_device_wireless_bluetooth_settings_1) | **PUT** /devices/{serial}/wireless/bluetooth/settings | Update the bluetooth settings for a wireless device
[**update_network_wireless_bluetooth_settings_1**](BluetoothApi.md#update_network_wireless_bluetooth_settings_1) | **PUT** /networks/{networkId}/wireless/bluetooth/settings | Update the Bluetooth settings for a network


# **get_device_wireless_bluetooth_settings_1**
> GetDeviceWirelessBluetoothSettings200Response get_device_wireless_bluetooth_settings_1(serial)

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
    api_instance = openapi_client.BluetoothApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the bluetooth settings for a wireless device
        api_response = api_instance.get_device_wireless_bluetooth_settings_1(serial)
        print("The response of BluetoothApi->get_device_wireless_bluetooth_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothApi->get_device_wireless_bluetooth_settings_1: %s\n" % e)
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

# **get_network_wireless_bluetooth_settings_1**
> GetNetworkWirelessBluetoothSettings200Response get_network_wireless_bluetooth_settings_1(network_id)

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
    api_instance = openapi_client.BluetoothApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        api_response = api_instance.get_network_wireless_bluetooth_settings_1(network_id)
        print("The response of BluetoothApi->get_network_wireless_bluetooth_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothApi->get_network_wireless_bluetooth_settings_1: %s\n" % e)
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

# **update_device_wireless_bluetooth_settings_1**
> GetDeviceWirelessBluetoothSettings200Response update_device_wireless_bluetooth_settings_1(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)

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
    api_instance = openapi_client.BluetoothApi(api_client)
    serial = 'serial_example' # str | 
    update_device_wireless_bluetooth_settings_request = openapi_client.UpdateDeviceWirelessBluetoothSettingsRequest() # UpdateDeviceWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the bluetooth settings for a wireless device
        api_response = api_instance.update_device_wireless_bluetooth_settings_1(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)
        print("The response of BluetoothApi->update_device_wireless_bluetooth_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothApi->update_device_wireless_bluetooth_settings_1: %s\n" % e)
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

# **update_network_wireless_bluetooth_settings_1**
> GetNetworkWirelessBluetoothSettings200Response update_network_wireless_bluetooth_settings_1(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)

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
    api_instance = openapi_client.BluetoothApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_bluetooth_settings_request = openapi_client.UpdateNetworkWirelessBluetoothSettingsRequest() # UpdateNetworkWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the Bluetooth settings for a network
        api_response = api_instance.update_network_wireless_bluetooth_settings_1(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)
        print("The response of BluetoothApi->update_network_wireless_bluetooth_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothApi->update_network_wireless_bluetooth_settings_1: %s\n" % e)
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

