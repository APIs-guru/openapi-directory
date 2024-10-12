# GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings

IPv4 OSPF Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area id | [optional] 
**cost** | **int** | OSPF Cost | [optional] 
**is_passive_enabled** | **bool** | Disable sending Hello packets on this interface&#39;s IPv4 area | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner_ospf_settings import GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings from a JSON string
get_device_switch_routing_interfaces200_response_inner_ospf_settings_instance = GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings.to_json())

# convert the object into a dict
get_device_switch_routing_interfaces200_response_inner_ospf_settings_dict = get_device_switch_routing_interfaces200_response_inner_ospf_settings_instance.to_dict()
# create an instance of GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings from a dict
get_device_switch_routing_interfaces200_response_inner_ospf_settings_from_dict = GetDeviceSwitchRoutingInterfaces200ResponseInnerOspfSettings.from_dict(get_device_switch_routing_interfaces200_response_inner_ospf_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


