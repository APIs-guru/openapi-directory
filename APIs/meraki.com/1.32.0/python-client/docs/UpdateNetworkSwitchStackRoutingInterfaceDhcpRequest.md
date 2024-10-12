# UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_file_name** | **str** | The PXE boot server file name for the DHCP server running on the switch stack interface | [optional] 
**boot_next_server** | **str** | The PXE boot server IP for the DHCP server running on the switch stack interface | [optional] 
**boot_options_enabled** | **bool** | Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch stack interface | [optional] 
**dhcp_lease_time** | **str** | The DHCP lease time config for the dhcp server running on switch stack interface (&#39;30 minutes&#39;, &#39;1 hour&#39;, &#39;4 hours&#39;, &#39;12 hours&#39;, &#39;1 day&#39; or &#39;1 week&#39;) | [optional] 
**dhcp_mode** | **str** | The DHCP mode options for the switch stack interface (&#39;dhcpDisabled&#39;, &#39;dhcpRelay&#39; or &#39;dhcpServer&#39;) | [optional] 
**dhcp_options** | [**List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner]**](UpdateDeviceSwitchRoutingInterfaceDhcpRequestDhcpOptionsInner.md) | Array of DHCP options consisting of code, type and value for the DHCP server running on the switch stack interface | [optional] 
**dhcp_relay_server_ips** | **List[str]** | The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface | [optional] 
**dns_custom_nameservers** | **List[str]** | The DHCP name server IPs when DHCP name server option is &#39;custom&#39; | [optional] 
**dns_nameservers_option** | **str** | The DHCP name server option for the dhcp server running on the switch stack interface (&#39;googlePublicDns&#39;, &#39;openDns&#39; or &#39;custom&#39;) | [optional] 
**fixed_ip_assignments** | [**List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner]**](UpdateDeviceSwitchRoutingInterfaceDhcpRequestFixedIpAssignmentsInner.md) | Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface | [optional] 
**reserved_ip_ranges** | [**List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner]**](UpdateDeviceSwitchRoutingInterfaceDhcpRequestReservedIpRangesInner.md) | Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stack_routing_interface_dhcp_request import UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest from a JSON string
update_network_switch_stack_routing_interface_dhcp_request_instance = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.to_json())

# convert the object into a dict
update_network_switch_stack_routing_interface_dhcp_request_dict = update_network_switch_stack_routing_interface_dhcp_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest from a dict
update_network_switch_stack_routing_interface_dhcp_request_from_dict = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.from_dict(update_network_switch_stack_routing_interface_dhcp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


