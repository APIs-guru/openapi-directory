# GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_subnet** | **str** | The CIDR notation subnet used within the VPN | [optional] 
**use_vpn** | **bool** | Indicates the presence of the subnet in the VPN | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner import GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner from a JSON string
get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner_instance = GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner.to_json())

# convert the object into a dict
get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner_dict = get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner_instance.to_dict()
# create an instance of GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner from a dict
get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner_from_dict = GetNetworkApplianceVpnSiteToSiteVpn200ResponseSubnetsInner.from_dict(get_network_appliance_vpn_site_to_site_vpn200_response_subnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


