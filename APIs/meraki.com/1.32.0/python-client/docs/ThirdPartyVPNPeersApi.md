# openapi_client.ThirdPartyVPNPeersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_appliance_vpn_third_party_vpn_peers_2**](ThirdPartyVPNPeersApi.md#get_organization_appliance_vpn_third_party_vpn_peers_2) | **GET** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**update_organization_appliance_vpn_third_party_vpn_peers_2**](ThirdPartyVPNPeersApi.md#update_organization_appliance_vpn_third_party_vpn_peers_2) | **PUT** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Update the third party VPN peers for an organization


# **get_organization_appliance_vpn_third_party_vpn_peers_2**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response get_organization_appliance_vpn_third_party_vpn_peers_2(organization_id)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
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
    api_instance = openapi_client.ThirdPartyVPNPeersApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the third party VPN peers for an organization
        api_response = api_instance.get_organization_appliance_vpn_third_party_vpn_peers_2(organization_id)
        print("The response of ThirdPartyVPNPeersApi->get_organization_appliance_vpn_third_party_vpn_peers_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyVPNPeersApi->get_organization_appliance_vpn_third_party_vpn_peers_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

# **update_organization_appliance_vpn_third_party_vpn_peers_2**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response update_organization_appliance_vpn_third_party_vpn_peers_2(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
from openapi_client.models.update_organization_appliance_vpn_third_party_vpn_peers_request import UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest
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
    api_instance = openapi_client.ThirdPartyVPNPeersApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_vpn_third_party_vpn_peers_request = openapi_client.UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest() # UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest | 

    try:
        # Update the third party VPN peers for an organization
        api_response = api_instance.update_organization_appliance_vpn_third_party_vpn_peers_2(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)
        print("The response of ThirdPartyVPNPeersApi->update_organization_appliance_vpn_third_party_vpn_peers_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyVPNPeersApi->update_organization_appliance_vpn_third_party_vpn_peers_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_vpn_third_party_vpn_peers_request** | [**UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest**](UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.md)|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

