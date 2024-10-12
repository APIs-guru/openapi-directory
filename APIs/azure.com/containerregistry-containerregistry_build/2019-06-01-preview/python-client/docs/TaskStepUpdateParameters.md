# TaskStepUpdateParameters

Base properties for updating any task step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_access_token** | **str** | The token (git PAT or SAS token of storage account blob) associated with the context for a step. | [optional] 
**context_path** | **str** | The URL(absolute or relative) of the source context for the task step. | [optional] 
**type** | **str** | The type of the step. | 

## Example

```python
from openapi_client.models.task_step_update_parameters import TaskStepUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TaskStepUpdateParameters from a JSON string
task_step_update_parameters_instance = TaskStepUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TaskStepUpdateParameters.to_json())

# convert the object into a dict
task_step_update_parameters_dict = task_step_update_parameters_instance.to_dict()
# create an instance of TaskStepUpdateParameters from a dict
task_step_update_parameters_from_dict = TaskStepUpdateParameters.from_dict(task_step_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


