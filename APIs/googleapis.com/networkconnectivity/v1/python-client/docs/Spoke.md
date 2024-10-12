# Spoke

A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances * linked_vpc_network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the spoke was created. | [optional] [readonly] 
**description** | **str** | An optional description of the spoke. | [optional] 
**group** | **str** | Optional. The name of the group that this spoke is associated with. | [optional] 
**hub** | **str** | Immutable. The name of the hub that this spoke is attached to. | [optional] 
**labels** | **Dict[str, str]** | Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). | [optional] 
**linked_interconnect_attachments** | [**LinkedInterconnectAttachments**](LinkedInterconnectAttachments.md) |  | [optional] 
**linked_router_appliance_instances** | [**LinkedRouterApplianceInstances**](LinkedRouterApplianceInstances.md) |  | [optional] 
**linked_vpc_network** | [**LinkedVpcNetwork**](LinkedVpcNetwork.md) |  | [optional] 
**linked_vpn_tunnels** | [**LinkedVpnTunnels**](LinkedVpnTunnels.md) |  | [optional] 
**name** | **str** | Immutable. The name of the spoke. Spoke names must be unique. They use the following form: &#x60;projects/{project_number}/locations/{region}/spokes/{spoke_id}&#x60; | [optional] 
**reasons** | [**List[StateReason]**](StateReason.md) | Output only. The reasons for current state of the spoke. Only present when the spoke is in the &#x60;INACTIVE&#x60; state. | [optional] [readonly] 
**spoke_type** | **str** | Output only. The type of resource associated with the spoke. | [optional] [readonly] 
**state** | **str** | Output only. The current lifecycle state of this spoke. | [optional] [readonly] 
**unique_id** | **str** | Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different &#x60;unique_id&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the spoke was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spoke import Spoke

# TODO update the JSON string below
json = "{}"
# create an instance of Spoke from a JSON string
spoke_instance = Spoke.from_json(json)
# print the JSON string representation of the object
print(Spoke.to_json())

# convert the object into a dict
spoke_dict = spoke_instance.to_dict()
# create an instance of Spoke from a dict
spoke_from_dict = Spoke.from_dict(spoke_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


