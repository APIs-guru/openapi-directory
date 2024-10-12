# openapi_client.MXL3OutboundFirewallApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_l3_firewall_rules**](MXL3OutboundFirewallApi.md#get_network_l3_firewall_rules) | **GET** /networks/{networkId}/l3FirewallRules | Return the L3 firewall rules for an MX network
[**update_network_l3_firewall_rules**](MXL3OutboundFirewallApi.md#update_network_l3_firewall_rules) | **PUT** /networks/{networkId}/l3FirewallRules | Update the L3 firewall rules of an MX network


# **get_network_l3_firewall_rules**
> List[object] get_network_l3_firewall_rules(network_id)

Return the L3 firewall rules for an MX network

Return the L3 firewall rules for an MX network

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
    api_instance = openapi_client.MXL3OutboundFirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L3 firewall rules for an MX network
        api_response = api_instance.get_network_l3_firewall_rules(network_id)
        print("The response of MXL3OutboundFirewallApi->get_network_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXL3OutboundFirewallApi->get_network_l3_firewall_rules: %s\n" % e)
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

# **update_network_l3_firewall_rules**
> List[object] update_network_l3_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)

Update the L3 firewall rules of an MX network

Update the L3 firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_inbound_firewall_rules_request import UpdateNetworkApplianceFirewallInboundFirewallRulesRequest
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
    api_instance = openapi_client.MXL3OutboundFirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_inbound_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() # UpdateNetworkApplianceFirewallInboundFirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an MX network
        api_response = api_instance.update_network_l3_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)
        print("The response of MXL3OutboundFirewallApi->update_network_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXL3OutboundFirewallApi->update_network_l3_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_inbound_firewall_rules_request** | [**UpdateNetworkApplianceFirewallInboundFirewallRulesRequest**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.md)|  | [optional] 

### Return type

**List[object]**

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

