# openapi_client.EapOverrideApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_wireless_ssid_eap_override_2**](EapOverrideApi.md#get_network_wireless_ssid_eap_override_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Return the EAP overridden parameters for an SSID
[**update_network_wireless_ssid_eap_override_2**](EapOverrideApi.md#update_network_wireless_ssid_eap_override_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Update the EAP overridden parameters for an SSID.


# **get_network_wireless_ssid_eap_override_2**
> GetNetworkWirelessSsidEapOverride200Response get_network_wireless_ssid_eap_override_2(network_id, number)

Return the EAP overridden parameters for an SSID

Return the EAP overridden parameters for an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
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
    api_instance = openapi_client.EapOverrideApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the EAP overridden parameters for an SSID
        api_response = api_instance.get_network_wireless_ssid_eap_override_2(network_id, number)
        print("The response of EapOverrideApi->get_network_wireless_ssid_eap_override_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EapOverrideApi->get_network_wireless_ssid_eap_override_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

# **update_network_wireless_ssid_eap_override_2**
> GetNetworkWirelessSsidEapOverride200Response update_network_wireless_ssid_eap_override_2(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)

Update the EAP overridden parameters for an SSID.

Update the EAP overridden parameters for an SSID.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
from openapi_client.models.update_network_wireless_ssid_eap_override_request import UpdateNetworkWirelessSsidEapOverrideRequest
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
    api_instance = openapi_client.EapOverrideApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_eap_override_request = openapi_client.UpdateNetworkWirelessSsidEapOverrideRequest() # UpdateNetworkWirelessSsidEapOverrideRequest |  (optional)

    try:
        # Update the EAP overridden parameters for an SSID.
        api_response = api_instance.update_network_wireless_ssid_eap_override_2(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)
        print("The response of EapOverrideApi->update_network_wireless_ssid_eap_override_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EapOverrideApi->update_network_wireless_ssid_eap_override_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_eap_override_request** | [**UpdateNetworkWirelessSsidEapOverrideRequest**](UpdateNetworkWirelessSsidEapOverrideRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

