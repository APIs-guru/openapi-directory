# openapi_client.MXVPNFirewallApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_vpn_firewall_rules**](MXVPNFirewallApi.md#get_organization_vpn_firewall_rules) | **GET** /organizations/{organizationId}/vpnFirewallRules | Return the firewall rules for an organization&#39;s site-to-site VPN
[**update_organization_vpn_firewall_rules**](MXVPNFirewallApi.md#update_organization_vpn_firewall_rules) | **PUT** /organizations/{organizationId}/vpnFirewallRules | Update the firewall rules of an organization&#39;s site-to-site VPN


# **get_organization_vpn_firewall_rules**
> List[object] get_organization_vpn_firewall_rules(organization_id)

Return the firewall rules for an organization's site-to-site VPN

Return the firewall rules for an organization's site-to-site VPN

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
    api_instance = openapi_client.MXVPNFirewallApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the firewall rules for an organization's site-to-site VPN
        api_response = api_instance.get_organization_vpn_firewall_rules(organization_id)
        print("The response of MXVPNFirewallApi->get_organization_vpn_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXVPNFirewallApi->get_organization_vpn_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **update_organization_vpn_firewall_rules**
> List[object] update_organization_vpn_firewall_rules(organization_id, update_organization_vpn_firewall_rules_request=update_organization_vpn_firewall_rules_request)

Update the firewall rules of an organization's site-to-site VPN

Update the firewall rules of an organization's site-to-site VPN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_vpn_firewall_rules_request import UpdateOrganizationVpnFirewallRulesRequest
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
    api_instance = openapi_client.MXVPNFirewallApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_vpn_firewall_rules_request = openapi_client.UpdateOrganizationVpnFirewallRulesRequest() # UpdateOrganizationVpnFirewallRulesRequest |  (optional)

    try:
        # Update the firewall rules of an organization's site-to-site VPN
        api_response = api_instance.update_organization_vpn_firewall_rules(organization_id, update_organization_vpn_firewall_rules_request=update_organization_vpn_firewall_rules_request)
        print("The response of MXVPNFirewallApi->update_organization_vpn_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXVPNFirewallApi->update_organization_vpn_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_vpn_firewall_rules_request** | [**UpdateOrganizationVpnFirewallRulesRequest**](UpdateOrganizationVpnFirewallRulesRequest.md)|  | [optional] 

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

