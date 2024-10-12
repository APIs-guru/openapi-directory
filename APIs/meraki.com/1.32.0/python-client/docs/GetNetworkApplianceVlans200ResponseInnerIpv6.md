# GetNetworkApplianceVlans200ResponseInnerIpv6

IPv6 configuration on the VLAN

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable IPv6 on VLAN | [optional] 
**prefix_assignments** | [**List[GetNetworkApplianceVlans200ResponseInnerIpv6PrefixAssignmentsInner]**](GetNetworkApplianceVlans200ResponseInnerIpv6PrefixAssignmentsInner.md) | Prefix assignments on the VLAN | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_vlans200_response_inner_ipv6 import GetNetworkApplianceVlans200ResponseInnerIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVlans200ResponseInnerIpv6 from a JSON string
get_network_appliance_vlans200_response_inner_ipv6_instance = GetNetworkApplianceVlans200ResponseInnerIpv6.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVlans200ResponseInnerIpv6.to_json())

# convert the object into a dict
get_network_appliance_vlans200_response_inner_ipv6_dict = get_network_appliance_vlans200_response_inner_ipv6_instance.to_dict()
# create an instance of GetNetworkApplianceVlans200ResponseInnerIpv6 from a dict
get_network_appliance_vlans200_response_inner_ipv6_from_dict = GetNetworkApplianceVlans200ResponseInnerIpv6.from_dict(get_network_appliance_vlans200_response_inner_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


