# WorkflowRunActionRepetitionDefinitionCollection

A collection of workflow run action repetitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of recommendations. | [optional] 
**value** | [**List[WorkflowRunActionRepetitionDefinition]**](WorkflowRunActionRepetitionDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_run_action_repetition_definition_collection import WorkflowRunActionRepetitionDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionRepetitionDefinitionCollection from a JSON string
workflow_run_action_repetition_definition_collection_instance = WorkflowRunActionRepetitionDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionRepetitionDefinitionCollection.to_json())

# convert the object into a dict
workflow_run_action_repetition_definition_collection_dict = workflow_run_action_repetition_definition_collection_instance.to_dict()
# create an instance of WorkflowRunActionRepetitionDefinitionCollection from a dict
workflow_run_action_repetition_definition_collection_from_dict = WorkflowRunActionRepetitionDefinitionCollection.from_dict(workflow_run_action_repetition_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


