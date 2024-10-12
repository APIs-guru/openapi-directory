# UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment for the reserved IP range | [optional] 
**end** | **str** | The ending IP address of the reserved IP range | 
**start** | **str** | The starting IP address of the reserved IP range | 

## Example

```python
from openapi_client.models.update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner import UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner from a JSON string
update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner_instance = UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner.to_json())

# convert the object into a dict
update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner_dict = update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner_instance.to_dict()
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner from a dict
update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner_from_dict = UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner.from_dict(update_device_switch_routing_interface_dhcp_request_reserved_ip_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


