# WorkflowRunAction

The workflow run action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets the workflow run action name. | [optional] [readonly] 
**properties** | [**WorkflowRunActionProperties**](WorkflowRunActionProperties.md) |  | [optional] 
**type** | **str** | Gets the workflow run action type. | [optional] [readonly] 
**id** | **str** | The resource id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_run_action import WorkflowRunAction

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunAction from a JSON string
workflow_run_action_instance = WorkflowRunAction.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunAction.to_json())

# convert the object into a dict
workflow_run_action_dict = workflow_run_action_instance.to_dict()
# create an instance of WorkflowRunAction from a dict
workflow_run_action_from_dict = WorkflowRunAction.from_dict(workflow_run_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


