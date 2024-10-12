# WorkflowRunActionRepetitionDefinition

The workflow run action repetition definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkflowRunActionRepetitionProperties**](WorkflowRunActionRepetitionProperties.md) |  | 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_run_action_repetition_definition import WorkflowRunActionRepetitionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionRepetitionDefinition from a JSON string
workflow_run_action_repetition_definition_instance = WorkflowRunActionRepetitionDefinition.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionRepetitionDefinition.to_json())

# convert the object into a dict
workflow_run_action_repetition_definition_dict = workflow_run_action_repetition_definition_instance.to_dict()
# create an instance of WorkflowRunActionRepetitionDefinition from a dict
workflow_run_action_repetition_definition_from_dict = WorkflowRunActionRepetitionDefinition.from_dict(workflow_run_action_repetition_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


