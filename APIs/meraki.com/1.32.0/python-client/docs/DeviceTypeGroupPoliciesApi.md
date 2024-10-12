# openapi_client.DeviceTypeGroupPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_wireless_ssid_device_type_group_policies_2**](DeviceTypeGroupPoliciesApi.md#get_network_wireless_ssid_device_type_group_policies_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | List the device type group policies for the SSID
[**update_network_wireless_ssid_device_type_group_policies_2**](DeviceTypeGroupPoliciesApi.md#update_network_wireless_ssid_device_type_group_policies_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | Update the device type group policies for the SSID


# **get_network_wireless_ssid_device_type_group_policies_2**
> object get_network_wireless_ssid_device_type_group_policies_2(network_id, number)

List the device type group policies for the SSID

List the device type group policies for the SSID

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
    api_instance = openapi_client.DeviceTypeGroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the device type group policies for the SSID
        api_response = api_instance.get_network_wireless_ssid_device_type_group_policies_2(network_id, number)
        print("The response of DeviceTypeGroupPoliciesApi->get_network_wireless_ssid_device_type_group_policies_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceTypeGroupPoliciesApi->get_network_wireless_ssid_device_type_group_policies_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

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

# **update_network_wireless_ssid_device_type_group_policies_2**
> object update_network_wireless_ssid_device_type_group_policies_2(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)

Update the device type group policies for the SSID

Update the device type group policies for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_device_type_group_policies_request import UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest
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
    api_instance = openapi_client.DeviceTypeGroupPoliciesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_device_type_group_policies_request = openapi_client.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest() # UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest |  (optional)

    try:
        # Update the device type group policies for the SSID
        api_response = api_instance.update_network_wireless_ssid_device_type_group_policies_2(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)
        print("The response of DeviceTypeGroupPoliciesApi->update_network_wireless_ssid_device_type_group_policies_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceTypeGroupPoliciesApi->update_network_wireless_ssid_device_type_group_policies_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_device_type_group_policies_request** | [**UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest**](UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.md)|  | [optional] 

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

