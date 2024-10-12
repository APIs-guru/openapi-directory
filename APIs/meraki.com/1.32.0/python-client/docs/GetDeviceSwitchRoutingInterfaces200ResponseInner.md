# GetDeviceSwitchRoutingInterfaces200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_gateway** | **str** | IPv4 default gateway | [optional] 
**interface_id** | **str** | The id | [optional] 
**interface_ip** | **str** | IPv4 address | [optional] 
**ipv6** | [**GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6**](GetDeviceSwitchRoutingInterfaces200ResponseInnerIpv6.md) |  | [optional] 
**multicast_routing** | **str** | Multicast routing status | [optional] 
**name** | **str** | The name | [optional] 
**ospf_settings** | [**GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings**](GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings.md) |  | [optional] 
**ospf_v3** | [**GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfV3**](GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfV3.md) |  | [optional] 
**subnet** | **str** | IPv4 subnet | [optional] 
**vlan_id** | **int** | VLAN id | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInner from a JSON string
get_device_switch_routing_interfaces200_response_inner_instance = GetDeviceSwitchRoutingInterfaces200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchRoutingInterfaces200ResponseInner.to_json())

# convert the object into a dict
get_device_switch_routing_interfaces200_response_inner_dict = get_device_switch_routing_interfaces200_response_inner_instance.to_dict()
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInner from a dict
get_device_switch_routing_interfaces200_response_inner_from_dict = GetDeviceSwitchRoutingInterfaces200ResponseInner.from_dict(get_device_switch_routing_interfaces200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


