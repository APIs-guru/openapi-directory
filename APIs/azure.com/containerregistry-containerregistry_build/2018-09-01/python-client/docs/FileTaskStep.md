# FileTaskStep

The properties of a task step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_file_path** | **str** | The task template/definition file path relative to the source context. | 
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 
**values_file_path** | **str** | The task values/parameters file path relative to the source context. | [optional] 

## Example

```python
from openapi_client.models.file_task_step import FileTaskStep

# TODO update the JSON string below
json = "{}"
# create an instance of FileTaskStep from a JSON string
file_task_step_instance = FileTaskStep.from_json(json)
# print the JSON string representation of the object
print(FileTaskStep.to_json())

# convert the object into a dict
file_task_step_dict = file_task_step_instance.to_dict()
# create an instance of FileTaskStep from a dict
file_task_step_from_dict = FileTaskStep.from_dict(file_task_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


