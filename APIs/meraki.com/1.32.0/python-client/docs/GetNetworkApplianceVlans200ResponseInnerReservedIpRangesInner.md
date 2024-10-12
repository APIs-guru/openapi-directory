# GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | A text comment for the reserved range | [optional] 
**end** | **str** | The last IP in the reserved range | [optional] 
**start** | **str** | The first IP in the reserved range | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner import GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner from a JSON string
get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner_instance = GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner.to_json())

# convert the object into a dict
get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner_dict = get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner_instance.to_dict()
# create an instance of GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner from a dict
get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner_from_dict = GetNetworkApplianceVlans200ResponseInnerReservedIpRangesInner.from_dict(get_network_appliance_vlans200_response_inner_reserved_ip_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


