# UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_subnet** | **str** | The CIDR notation subnet used within the VPN | 
**use_vpn** | **bool** | Indicates the presence of the subnet in the VPN | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner import UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner from a JSON string
update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner_instance = UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner.to_json())

# convert the object into a dict
update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner_dict = update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner from a dict
update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner_from_dict = UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner.from_dict(update_network_appliance_vpn_site_to_site_vpn_request_subnets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


