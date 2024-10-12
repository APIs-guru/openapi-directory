# CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port_id** | **str** | Port identifier of switch port. For modules, the identifier is \&quot;SlotNumber_ModuleType_PortNumber\&quot; (Ex: \&quot;1_8X10G_1\&quot;), otherwise it is just the port number (Ex: \&quot;8\&quot;). | 
**serial** | **str** | Serial number of the switch. | 

## Example

```python
from openapi_client.models.create_network_switch_link_aggregation_request_switch_ports_inner import CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner from a JSON string
create_network_switch_link_aggregation_request_switch_ports_inner_instance = CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner.to_json())

# convert the object into a dict
create_network_switch_link_aggregation_request_switch_ports_inner_dict = create_network_switch_link_aggregation_request_switch_ports_inner_instance.to_dict()
# create an instance of CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner from a dict
create_network_switch_link_aggregation_request_switch_ports_inner_from_dict = CreateNetworkSwitchLinkAggregationRequestSwitchPortsInner.from_dict(create_network_switch_link_aggregation_request_switch_ports_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


