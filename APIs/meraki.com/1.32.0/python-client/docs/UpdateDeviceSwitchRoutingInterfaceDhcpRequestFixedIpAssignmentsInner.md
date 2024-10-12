# UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | The IP address of the client which has fixed IP address assigned to it | 
**mac** | **str** | The MAC address of the client which has fixed IP address | 
**name** | **str** | The name of the client which has fixed IP address | 

## Example

```python
from openapi_client.models.update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner import UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner from a JSON string
update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner_instance = UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner.to_json())

# convert the object into a dict
update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner_dict = update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner_instance.to_dict()
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner from a dict
update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner_from_dict = UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner.from_dict(update_device_switch_routing_interface_dhcp_request_fixed_ip_assignments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


