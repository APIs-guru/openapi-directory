# UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6

Information regarding IPv6 address of the neighbor, Required if `ip` is not present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IPv6 address of the neighbor. | 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6 import UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6 from a JSON string
update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6_instance = UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6.to_json())

# convert the object into a dict
update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6_dict = update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6 from a dict
update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6_from_dict = UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6.from_dict(update_network_appliance_vpn_bgp_request_neighbors_inner_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


