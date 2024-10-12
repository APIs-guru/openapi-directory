# GetNetworkApplianceVpnSiteToSiteVpn200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hubs** | [**List[GetNetworkApplianceVpnSiteToSiteVpn200ResponseHubsInner]**](GetNetworkApplianceVpnSiteToSiteVpn200ResponseHubsInner.md) | The list of VPN hubs, in order of preference. | [optional] 
**mode** | **str** | The site-to-site VPN mode. | [optional] 
**subnets** | [**List[GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner]**](GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner.md) | The list of subnets and their VPN presence. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response import GetNetworkApplianceVpnSiteToSiteVpn200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVpnSiteToSiteVpn200Response from a JSON string
get_network_appliance_vpn_site_to_site_vpn200_response_instance = GetNetworkApplianceVpnSiteToSiteVpn200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVpnSiteToSiteVpn200Response.to_json())

# convert the object into a dict
get_network_appliance_vpn_site_to_site_vpn200_response_dict = get_network_appliance_vpn_site_to_site_vpn200_response_instance.to_dict()
# create an instance of GetNetworkApplianceVpnSiteToSiteVpn200Response from a dict
get_network_appliance_vpn_site_to_site_vpn200_response_from_dict = GetNetworkApplianceVpnSiteToSiteVpn200Response.from_dict(get_network_appliance_vpn_site_to_site_vpn200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


