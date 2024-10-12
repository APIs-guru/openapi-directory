# NodeDeactivationTask

The task representing the deactivation operation on the node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deactivation_intent** | [**NodeDeactivationIntent**](NodeDeactivationIntent.md) |  | [optional] 
**node_deactivation_task_id** | [**NodeDeactivationTaskId**](NodeDeactivationTaskId.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_deactivation_task import NodeDeactivationTask

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivationTask from a JSON string
node_deactivation_task_instance = NodeDeactivationTask.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivationTask.to_json())

# convert the object into a dict
node_deactivation_task_dict = node_deactivation_task_instance.to_dict()
# create an instance of NodeDeactivationTask from a dict
node_deactivation_task_from_dict = NodeDeactivationTask.from_dict(node_deactivation_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


