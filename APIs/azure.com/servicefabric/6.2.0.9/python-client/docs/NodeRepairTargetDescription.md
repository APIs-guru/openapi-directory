# NodeRepairTargetDescription

Describes the list of nodes targeted by a repair action.  This type supports the Service Fabric platform; it is not meant to be used directly from your code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_names** | **List[str]** | The list of nodes targeted by a repair action. | [optional] 

## Example

```python
from openapi_client.models.node_repair_target_description import NodeRepairTargetDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NodeRepairTargetDescription from a JSON string
node_repair_target_description_instance = NodeRepairTargetDescription.from_json(json)
# print the JSON string representation of the object
print(NodeRepairTargetDescription.to_json())

# convert the object into a dict
node_repair_target_description_dict = node_repair_target_description_instance.to_dict()
# create an instance of NodeRepairTargetDescription from a dict
node_repair_target_description_from_dict = NodeRepairTargetDescription.from_dict(node_repair_target_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


