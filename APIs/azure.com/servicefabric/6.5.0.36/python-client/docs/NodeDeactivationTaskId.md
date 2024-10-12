# NodeDeactivationTaskId

Identity of the task related to deactivation operation on the node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Value of the task id. | [optional] 
**node_deactivation_task_type** | [**NodeDeactivationTaskType**](NodeDeactivationTaskType.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_deactivation_task_id import NodeDeactivationTaskId

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivationTaskId from a JSON string
node_deactivation_task_id_instance = NodeDeactivationTaskId.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivationTaskId.to_json())

# convert the object into a dict
node_deactivation_task_id_dict = node_deactivation_task_id_instance.to_dict()
# create an instance of NodeDeactivationTaskId from a dict
node_deactivation_task_id_from_dict = NodeDeactivationTaskId.from_dict(node_deactivation_task_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


