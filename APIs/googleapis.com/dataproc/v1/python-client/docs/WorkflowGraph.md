# WorkflowGraph

The workflow graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[WorkflowNode]**](WorkflowNode.md) | Output only. The workflow nodes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_graph import WorkflowGraph

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowGraph from a JSON string
workflow_graph_instance = WorkflowGraph.from_json(json)
# print the JSON string representation of the object
print(WorkflowGraph.to_json())

# convert the object into a dict
workflow_graph_dict = workflow_graph_instance.to_dict()
# create an instance of WorkflowGraph from a dict
workflow_graph_from_dict = WorkflowGraph.from_dict(workflow_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


