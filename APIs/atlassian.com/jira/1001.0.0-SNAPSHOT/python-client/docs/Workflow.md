# Workflow

Details about a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The creation date of the workflow. | [optional] 
**description** | **str** | The description of the workflow. | 
**has_draft_workflow** | **bool** | Whether the workflow has a draft version. | [optional] 
**id** | [**PublishedWorkflowId**](PublishedWorkflowId.md) |  | 
**is_default** | **bool** | Whether this is the default workflow. | [optional] 
**operations** | [**WorkflowOperations**](WorkflowOperations.md) |  | [optional] 
**projects** | [**List[ProjectDetails]**](ProjectDetails.md) | The projects the workflow is assigned to, through workflow schemes. | [optional] 
**schemes** | [**List[WorkflowSchemeIdName]**](WorkflowSchemeIdName.md) | The workflow schemes the workflow is assigned to. | [optional] 
**statuses** | [**List[WorkflowStatus]**](WorkflowStatus.md) | The statuses of the workflow. | [optional] 
**transitions** | [**List[Transition]**](Transition.md) | The transitions of the workflow. | [optional] 
**updated** | **datetime** | The last edited date of the workflow. | [optional] 

## Example

```python
from openapi_client.models.workflow import Workflow

# TODO update the JSON string below
json = "{}"
# create an instance of Workflow from a JSON string
workflow_instance = Workflow.from_json(json)
# print the JSON string representation of the object
print(Workflow.to_json())

# convert the object into a dict
workflow_dict = workflow_instance.to_dict()
# create an instance of Workflow from a dict
workflow_from_dict = Workflow.from_dict(workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


