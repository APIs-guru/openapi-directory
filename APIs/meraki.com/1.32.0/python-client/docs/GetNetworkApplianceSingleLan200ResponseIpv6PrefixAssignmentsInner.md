# GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autonomous** | **bool** | Auto assign a /64 prefix from the origin to the single LAN | [optional] 
**origin** | [**CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin**](CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.md) |  | [optional] 
**static_appliance_ip6** | **str** | Manual configuration of the IPv6 Appliance IP | [optional] 
**static_prefix** | **str** | Manual configuration of a /64 prefix on the single LAN | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner import GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner from a JSON string
get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner_instance = GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner.to_json())

# convert the object into a dict
get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner_dict = get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner_instance.to_dict()
# create an instance of GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner from a dict
get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner_from_dict = GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner.from_dict(get_network_appliance_single_lan200_response_ipv6_prefix_assignments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


