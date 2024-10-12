# TaskStepProperties

Base properties for any task step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_image_dependencies** | [**List[BaseImageDependency]**](BaseImageDependency.md) | List of base image dependencies for a step. | [optional] [readonly] 
**context_access_token** | **str** | The token (git PAT or SAS token of storage account blob) associated with the context for a step. | [optional] 
**context_path** | **str** | The URL(absolute or relative) of the source context for the task step. | [optional] 
**type** | **str** | The type of the step. | 

## Example

```python
from openapi_client.models.task_step_properties import TaskStepProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TaskStepProperties from a JSON string
task_step_properties_instance = TaskStepProperties.from_json(json)
# print the JSON string representation of the object
print(TaskStepProperties.to_json())

# convert the object into a dict
task_step_properties_dict = task_step_properties_instance.to_dict()
# create an instance of TaskStepProperties from a dict
task_step_properties_from_dict = TaskStepProperties.from_dict(task_step_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


