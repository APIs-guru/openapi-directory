# TaskUpdateParameters

The parameters for updating a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**properties** | [**TaskPropertiesUpdateParameters**](TaskPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The ARM resource tags. | [optional] 

## Example

```python
from openapi_client.models.task_update_parameters import TaskUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TaskUpdateParameters from a JSON string
task_update_parameters_instance = TaskUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TaskUpdateParameters.to_json())

# convert the object into a dict
task_update_parameters_dict = task_update_parameters_instance.to_dict()
# create an instance of TaskUpdateParameters from a dict
task_update_parameters_from_dict = TaskUpdateParameters.from_dict(task_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


