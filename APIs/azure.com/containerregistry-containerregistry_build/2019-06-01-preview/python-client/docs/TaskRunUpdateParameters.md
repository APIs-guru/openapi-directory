# TaskRunUpdateParameters

The parameters for updating a task run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**properties** | [**TaskRunPropertiesUpdateParameters**](TaskRunPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The ARM resource tags. | [optional] 

## Example

```python
from openapi_client.models.task_run_update_parameters import TaskRunUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRunUpdateParameters from a JSON string
task_run_update_parameters_instance = TaskRunUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TaskRunUpdateParameters.to_json())

# convert the object into a dict
task_run_update_parameters_dict = task_run_update_parameters_instance.to_dict()
# create an instance of TaskRunUpdateParameters from a dict
task_run_update_parameters_from_dict = TaskRunUpdateParameters.from_dict(task_run_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


