# GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6

IPv6 addressing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv6 address | [optional] 
**assignment_mode** | **str** | Assignment mode | [optional] 
**gateway** | **str** | IPv6 gateway | [optional] 
**prefix** | **str** | IPv6 subnet | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner_ipv6 import GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6 from a JSON string
get_device_switch_routing_interfaces200_response_inner_ipv6_instance = GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6.to_json())

# convert the object into a dict
get_device_switch_routing_interfaces200_response_inner_ipv6_dict = get_device_switch_routing_interfaces200_response_inner_ipv6_instance.to_dict()
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6 from a dict
get_device_switch_routing_interfaces200_response_inner_ipv6_from_dict = GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6.from_dict(get_device_switch_routing_interfaces200_response_inner_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


