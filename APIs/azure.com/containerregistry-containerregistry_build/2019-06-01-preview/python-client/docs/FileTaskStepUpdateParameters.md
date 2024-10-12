# FileTaskStepUpdateParameters

The properties of updating a task step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_file_path** | **str** | The task template/definition file path relative to the source context. | [optional] 
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 
**values_file_path** | **str** | The values/parameters file path relative to the source context. | [optional] 

## Example

```python
from openapi_client.models.file_task_step_update_parameters import FileTaskStepUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FileTaskStepUpdateParameters from a JSON string
file_task_step_update_parameters_instance = FileTaskStepUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(FileTaskStepUpdateParameters.to_json())

# convert the object into a dict
file_task_step_update_parameters_dict = file_task_step_update_parameters_instance.to_dict()
# create an instance of FileTaskStepUpdateParameters from a dict
file_task_step_update_parameters_from_dict = FileTaskStepUpdateParameters.from_dict(file_task_step_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


