# CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings

The OSPF routing settings of the interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | The OSPF area to which this interface should belong. Can be either &#39;disabled&#39; or the identifier of an existing OSPF area. Defaults to &#39;disabled&#39;. | [optional] 
**cost** | **int** | The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority. | [optional] 
**is_passive_enabled** | **bool** | When enabled, OSPF will not run on the interface, but the subnet will still be advertised. | [optional] 

## Example

```python
from openapi_client.models.create_network_switch_stack_routing_interface_request_ospf_settings import CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings from a JSON string
create_network_switch_stack_routing_interface_request_ospf_settings_instance = CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.to_json())

# convert the object into a dict
create_network_switch_stack_routing_interface_request_ospf_settings_dict = create_network_switch_stack_routing_interface_request_ospf_settings_instance.to_dict()
# create an instance of CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings from a dict
create_network_switch_stack_routing_interface_request_ospf_settings_from_dict = CreateNetworkSwitchStackRoutingInterfaceRequestOspfSettings.from_dict(create_network_switch_stack_routing_interface_request_ospf_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


