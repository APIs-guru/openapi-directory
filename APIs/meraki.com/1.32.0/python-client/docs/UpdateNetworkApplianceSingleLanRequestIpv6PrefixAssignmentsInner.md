# UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autonomous** | **bool** | Auto assign a /64 prefix from the origin to the VLAN | [optional] 
**origin** | [**UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInnerOrigin**](UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInnerOrigin.md) |  | [optional] 
**static_appliance_ip6** | **str** | Manual configuration of the IPv6 Appliance IP | [optional] 
**static_prefix** | **str** | Manual configuration of a /64 prefix on the VLAN | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner import UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner from a JSON string
update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner_instance = UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner.to_json())

# convert the object into a dict
update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner_dict = update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner from a dict
update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner_from_dict = UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner.from_dict(update_network_appliance_single_lan_request_ipv6_prefix_assignments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


