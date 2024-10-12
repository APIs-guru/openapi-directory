# openapi_client.MGPortForwardingRulesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_cellular_gateway_settings_port_forwarding_rules**](MGPortForwardingRulesApi.md#get_device_cellular_gateway_settings_port_forwarding_rules) | **GET** /devices/{serial}/cellularGateway/settings/portForwardingRules | Returns the port forwarding rules for a single MG.
[**update_device_cellular_gateway_settings_port_forwarding_rules**](MGPortForwardingRulesApi.md#update_device_cellular_gateway_settings_port_forwarding_rules) | **PUT** /devices/{serial}/cellularGateway/settings/portForwardingRules | Updates the port forwarding rules for a single MG.


# **get_device_cellular_gateway_settings_port_forwarding_rules**
> object get_device_cellular_gateway_settings_port_forwarding_rules(serial)

Returns the port forwarding rules for a single MG.

Returns the port forwarding rules for a single MG.

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
    api_instance = openapi_client.MGPortForwardingRulesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns the port forwarding rules for a single MG.
        api_response = api_instance.get_device_cellular_gateway_settings_port_forwarding_rules(serial)
        print("The response of MGPortForwardingRulesApi->get_device_cellular_gateway_settings_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MGPortForwardingRulesApi->get_device_cellular_gateway_settings_port_forwarding_rules: %s\n" % e)
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

# **update_device_cellular_gateway_settings_port_forwarding_rules**
> object update_device_cellular_gateway_settings_port_forwarding_rules(serial, update_device_cellular_gateway_settings_port_forwarding_rules_request=update_device_cellular_gateway_settings_port_forwarding_rules_request)

Updates the port forwarding rules for a single MG.

Updates the port forwarding rules for a single MG.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_gateway_settings_port_forwarding_rules_request import UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest
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
    api_instance = openapi_client.MGPortForwardingRulesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_gateway_settings_port_forwarding_rules_request = openapi_client.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest() # UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest |  (optional)

    try:
        # Updates the port forwarding rules for a single MG.
        api_response = api_instance.update_device_cellular_gateway_settings_port_forwarding_rules(serial, update_device_cellular_gateway_settings_port_forwarding_rules_request=update_device_cellular_gateway_settings_port_forwarding_rules_request)
        print("The response of MGPortForwardingRulesApi->update_device_cellular_gateway_settings_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MGPortForwardingRulesApi->update_device_cellular_gateway_settings_port_forwarding_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_gateway_settings_port_forwarding_rules_request** | [**UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest**](UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest.md)|  | [optional] 

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

