# GetNetworkApplianceSingleLan200ResponseIpv6

IPv6 configuration on the single LAN

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable IPv6 on single LAN | [optional] 
**prefix_assignments** | [**List[GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner]**](GetNetworkApplianceSingleLan200ResponseIpv6PrefixAssignmentsInner.md) | Prefix assignments on the single LAN | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_single_lan200_response_ipv6 import GetNetworkApplianceSingleLan200ResponseIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSingleLan200ResponseIpv6 from a JSON string
get_network_appliance_single_lan200_response_ipv6_instance = GetNetworkApplianceSingleLan200ResponseIpv6.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSingleLan200ResponseIpv6.to_json())

# convert the object into a dict
get_network_appliance_single_lan200_response_ipv6_dict = get_network_appliance_single_lan200_response_ipv6_instance.to_dict()
# create an instance of GetNetworkApplianceSingleLan200ResponseIpv6 from a dict
get_network_appliance_single_lan200_response_ipv6_from_dict = GetNetworkApplianceSingleLan200ResponseIpv6.from_dict(get_network_appliance_single_lan200_response_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


