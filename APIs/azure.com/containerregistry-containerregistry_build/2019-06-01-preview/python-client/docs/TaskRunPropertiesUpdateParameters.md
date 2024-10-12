# TaskRunPropertiesUpdateParameters

The properties of a task run update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_update_tag** | **str** | How the run should be forced to rerun even if the run request configuration has not changed | [optional] 
**run_request** | [**RunRequest**](RunRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_run_properties_update_parameters import TaskRunPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRunPropertiesUpdateParameters from a JSON string
task_run_properties_update_parameters_instance = TaskRunPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TaskRunPropertiesUpdateParameters.to_json())

# convert the object into a dict
task_run_properties_update_parameters_dict = task_run_properties_update_parameters_instance.to_dict()
# create an instance of TaskRunPropertiesUpdateParameters from a dict
task_run_properties_update_parameters_from_dict = TaskRunPropertiesUpdateParameters.from_dict(task_run_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


