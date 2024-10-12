# UpdateNetworkApplianceVpnBgpRequestNeighborsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_transit** | **bool** | When this feature is on, the Meraki device will advertise routes learned from other Autonomous Systems, thereby allowing traffic between Autonomous Systems to transit this AS. When absent, it defaults to false. | [optional] 
**ebgp_hold_timer** | **int** | The EBGP hold timer in seconds for each neighbor. The EBGP hold timer must be an integer between 12 and 240. | 
**ebgp_multihop** | **int** | Configure this if the neighbor is not adjacent. The EBGP multi-hop must be an integer between 1 and 255. | 
**ip** | **str** | The IPv4 address of the neighbor | [optional] 
**ipv6** | [**UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6**](UpdateNetworkApplianceVpnBgpRequestNeighborsInnerIpv6.md) |  | [optional] 
**receive_limit** | **int** | The receive limit is the maximum number of routes that can be received from any BGP peer. The receive limit must be an integer between 0 and 4294967295. When absent, it defaults to 0. | [optional] 
**remote_as_number** | **int** | Remote ASN of the neighbor. The remote ASN must be an integer between 1 and 4294967295. | 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_bgp_request_neighbors_inner import UpdateNetworkApplianceVpnBgpRequestNeighborsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnBgpRequestNeighborsInner from a JSON string
update_network_appliance_vpn_bgp_request_neighbors_inner_instance = UpdateNetworkApplianceVpnBgpRequestNeighborsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnBgpRequestNeighborsInner.to_json())

# convert the object into a dict
update_network_appliance_vpn_bgp_request_neighbors_inner_dict = update_network_appliance_vpn_bgp_request_neighbors_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnBgpRequestNeighborsInner from a dict
update_network_appliance_vpn_bgp_request_neighbors_inner_from_dict = UpdateNetworkApplianceVpnBgpRequestNeighborsInner.from_dict(update_network_appliance_vpn_bgp_request_neighbors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


