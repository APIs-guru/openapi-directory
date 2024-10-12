# UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings

The OSPF routing settings of the interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | The OSPF area to which this interface should belong. Can be either &#39;disabled&#39; or the identifier of an existing OSPF area. | [optional] 
**cost** | **int** | The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority. | [optional] 
**is_passive_enabled** | **bool** | When enabled, OSPF will not run on the interface, but the subnet will still be advertised. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stack_routing_interface_request_ospf_settings import UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings from a JSON string
update_network_switch_stack_routing_interface_request_ospf_settings_instance = UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.to_json())

# convert the object into a dict
update_network_switch_stack_routing_interface_request_ospf_settings_dict = update_network_switch_stack_routing_interface_request_ospf_settings_instance.to_dict()
# create an instance of UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings from a dict
update_network_switch_stack_routing_interface_request_ospf_settings_from_dict = UpdateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.from_dict(update_network_switch_stack_routing_interface_request_ospf_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


