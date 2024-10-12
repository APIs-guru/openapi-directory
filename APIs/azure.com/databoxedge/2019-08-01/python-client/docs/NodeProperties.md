# NodeProperties

This class represents the nodes in a highly available cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_chassis_serial_number** | **str** | Serial number of the Chassis | [optional] [readonly] 
**node_display_name** | **str** | Display Name of the individual node | [optional] [readonly] 
**node_friendly_software_version** | **str** | Friendly software version name that is currently installed on the node | [optional] [readonly] 
**node_hcs_version** | **str** | HCS version that is currently installed on the node | [optional] [readonly] 
**node_instance_id** | **str** | Guid instance id of the node | [optional] [readonly] 
**node_serial_number** | **str** | Serial number of the individual node | [optional] [readonly] 
**node_status** | **str** | The current status of the individual node | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_properties import NodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NodeProperties from a JSON string
node_properties_instance = NodeProperties.from_json(json)
# print the JSON string representation of the object
print(NodeProperties.to_json())

# convert the object into a dict
node_properties_dict = node_properties_instance.to_dict()
# create an instance of NodeProperties from a dict
node_properties_from_dict = NodeProperties.from_dict(node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


