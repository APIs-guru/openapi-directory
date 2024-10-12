# UpdateNetworkSwitchStackRoutingInterfaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_gateway** | **str** | The next hop for any traffic that isn&#39;t going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface. | [optional] 
**interface_ip** | **str** | The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch&#39;s management IP. | [optional] 
**ipv6** | [**UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6**](UpdateNetworkSwitchStackRoutingInterfaceRequestIpv6.md) |  | [optional] 
**multicast_routing** | **str** | Enable multicast support if, multicast routing between VLANs is required. Options are, &#39;disabled&#39;, &#39;enabled&#39; or &#39;IGMP snooping querier&#39;. | [optional] 
**name** | **str** | A friendly name or description for the interface or VLAN. | [optional] 
**ospf_settings** | [**UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings**](UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.md) |  | [optional] 
**subnet** | **str** | The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24). | [optional] 
**vlan_id** | **int** | The VLAN this routed interface is on. VLAN must be between 1 and 4094. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stack_routing_interface_request import UpdateNetworkSwitchStackRoutingInterfaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequest from a JSON string
update_network_switch_stack_routing_interface_request_instance = UpdateNetworkSwitchStackRoutingInterfaceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStackRoutingInterfaceRequest.to_json())

# convert the object into a dict
update_network_switch_stack_routing_interface_request_dict = update_network_switch_stack_routing_interface_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequest from a dict
update_network_switch_stack_routing_interface_request_from_dict = UpdateNetworkSwitchStackRoutingInterfaceRequest.from_dict(update_network_switch_stack_routing_interface_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


