# UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6

The IPv6 settings of the interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IPv6 address of the interface. Required if assignmentMode is included and set as &#39;static&#39;. Must not be included if assignmentMode is &#39;eui-64&#39;. | [optional] 
**assignment_mode** | **str** | The IPv6 assignment mode for the interface. Can be either &#39;eui-64&#39; or &#39;static&#39;. | [optional] 
**gateway** | **str** | The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the stack. | [optional] 
**prefix** | **str** | The IPv6 prefix of the interface. Required if IPv6 object is included and interface does not already have ipv6.prefix configured | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stack_routing_interface_request_ipv6 import UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6 from a JSON string
update_network_switch_stack_routing_interface_request_ipv6_instance = UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6.to_json())

# convert the object into a dict
update_network_switch_stack_routing_interface_request_ipv6_dict = update_network_switch_stack_routing_interface_request_ipv6_instance.to_dict()
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6 from a dict
update_network_switch_stack_routing_interface_request_ipv6_from_dict = UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6.from_dict(update_network_switch_stack_routing_interface_request_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


