# UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code for DHCP option which should be from 2 to 254 | 
**type** | **str** | The type of the DHCP option which should be one of (&#39;text&#39;, &#39;ip&#39;, &#39;integer&#39; or &#39;hex&#39;) | 
**value** | **str** | The value of the DHCP option | 

## Example

```python
from openapi_client.models.update_device_switch_routing_interface_dhcp_request_dhcp_options_inner import UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner from a JSON string
update_device_switch_routing_interface_dhcp_request_dhcp_options_inner_instance = UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner.to_json())

# convert the object into a dict
update_device_switch_routing_interface_dhcp_request_dhcp_options_inner_dict = update_device_switch_routing_interface_dhcp_request_dhcp_options_inner_instance.to_dict()
# create an instance of UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner from a dict
update_device_switch_routing_interface_dhcp_request_dhcp_options_inner_from_dict = UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner.from_dict(update_device_switch_routing_interface_dhcp_request_dhcp_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


