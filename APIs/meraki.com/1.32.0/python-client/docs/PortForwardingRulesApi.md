# openapi_client.PortForwardingRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_cellular_gateway_port_forwarding_rules_1**](PortForwardingRulesApi.md#get_device_cellular_gateway_port_forwarding_rules_1) | **GET** /devices/{serial}/cellularGateway/portForwardingRules | Returns the port forwarding rules for a single MG.
[**get_network_appliance_firewall_port_forwarding_rules_2**](PortForwardingRulesApi.md#get_network_appliance_firewall_port_forwarding_rules_2) | **GET** /networks/{networkId}/appliance/firewall/portForwardingRules | Return the port forwarding rules for an MX network
[**update_device_cellular_gateway_port_forwarding_rules_1**](PortForwardingRulesApi.md#update_device_cellular_gateway_port_forwarding_rules_1) | **PUT** /devices/{serial}/cellularGateway/portForwardingRules | Updates the port forwarding rules for a single MG.
[**update_network_appliance_firewall_port_forwarding_rules_2**](PortForwardingRulesApi.md#update_network_appliance_firewall_port_forwarding_rules_2) | **PUT** /networks/{networkId}/appliance/firewall/portForwardingRules | Update the port forwarding rules for an MX network


# **get_device_cellular_gateway_port_forwarding_rules_1**
> object get_device_cellular_gateway_port_forwarding_rules_1(serial)

Returns the port forwarding rules for a single MG.

Returns the port forwarding rules for a single MG.

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
    api_instance = openapi_client.PortForwardingRulesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns the port forwarding rules for a single MG.
        api_response = api_instance.get_device_cellular_gateway_port_forwarding_rules_1(serial)
        print("The response of PortForwardingRulesApi->get_device_cellular_gateway_port_forwarding_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortForwardingRulesApi->get_device_cellular_gateway_port_forwarding_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_port_forwarding_rules_2**
> object get_network_appliance_firewall_port_forwarding_rules_2(network_id)

Return the port forwarding rules for an MX network

Return the port forwarding rules for an MX network

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
    api_instance = openapi_client.PortForwardingRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the port forwarding rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_port_forwarding_rules_2(network_id)
        print("The response of PortForwardingRulesApi->get_network_appliance_firewall_port_forwarding_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortForwardingRulesApi->get_network_appliance_firewall_port_forwarding_rules_2: %s\n" % e)
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

# **update_device_cellular_gateway_port_forwarding_rules_1**
> object update_device_cellular_gateway_port_forwarding_rules_1(serial, update_device_cellular_gateway_port_forwarding_rules_request=update_device_cellular_gateway_port_forwarding_rules_request)

Updates the port forwarding rules for a single MG.

Updates the port forwarding rules for a single MG.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_gateway_port_forwarding_rules_request import UpdateDeviceCellularGatewayPortForwardingRulesRequest
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
    api_instance = openapi_client.PortForwardingRulesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_gateway_port_forwarding_rules_request = openapi_client.UpdateDeviceCellularGatewayPortForwardingRulesRequest() # UpdateDeviceCellularGatewayPortForwardingRulesRequest |  (optional)

    try:
        # Updates the port forwarding rules for a single MG.
        api_response = api_instance.update_device_cellular_gateway_port_forwarding_rules_1(serial, update_device_cellular_gateway_port_forwarding_rules_request=update_device_cellular_gateway_port_forwarding_rules_request)
        print("The response of PortForwardingRulesApi->update_device_cellular_gateway_port_forwarding_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortForwardingRulesApi->update_device_cellular_gateway_port_forwarding_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_gateway_port_forwarding_rules_request** | [**UpdateDeviceCellularGatewayPortForwardingRulesRequest**](UpdateDeviceCellularGatewayPortForwardingRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_port_forwarding_rules_2**
> object update_network_appliance_firewall_port_forwarding_rules_2(network_id, update_network_appliance_firewall_port_forwarding_rules_request)

Update the port forwarding rules for an MX network

Update the port forwarding rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_port_forwarding_rules_request import UpdateNetworkApplianceFirewallPortForwardingRulesRequest
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
    api_instance = openapi_client.PortForwardingRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_port_forwarding_rules_request = openapi_client.UpdateNetworkApplianceFirewallPortForwardingRulesRequest() # UpdateNetworkApplianceFirewallPortForwardingRulesRequest | 

    try:
        # Update the port forwarding rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_port_forwarding_rules_2(network_id, update_network_appliance_firewall_port_forwarding_rules_request)
        print("The response of PortForwardingRulesApi->update_network_appliance_firewall_port_forwarding_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortForwardingRulesApi->update_network_appliance_firewall_port_forwarding_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_port_forwarding_rules_request** | [**UpdateNetworkApplianceFirewallPortForwardingRulesRequest**](UpdateNetworkApplianceFirewallPortForwardingRulesRequest.md)|  | 

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

