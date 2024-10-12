# WorkflowNode

The workflow node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Output only. The error detail. | [optional] [readonly] 
**job_id** | **str** | Output only. The job id; populated after the node enters RUNNING state. | [optional] [readonly] 
**prerequisite_step_ids** | **List[str]** | Output only. Node&#39;s prerequisite nodes. | [optional] [readonly] 
**state** | **str** | Output only. The node state. | [optional] [readonly] 
**step_id** | **str** | Output only. The name of the node. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_node import WorkflowNode

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowNode from a JSON string
workflow_node_instance = WorkflowNode.from_json(json)
# print the JSON string representation of the object
print(WorkflowNode.to_json())

# convert the object into a dict
workflow_node_dict = workflow_node_instance.to_dict()
# create an instance of WorkflowNode from a dict
workflow_node_from_dict = WorkflowNode.from_dict(workflow_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


