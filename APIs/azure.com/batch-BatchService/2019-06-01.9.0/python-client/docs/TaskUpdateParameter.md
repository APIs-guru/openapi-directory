# TaskUpdateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_update_parameter import TaskUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of TaskUpdateParameter from a JSON string
task_update_parameter_instance = TaskUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(TaskUpdateParameter.to_json())

# convert the object into a dict
task_update_parameter_dict = task_update_parameter_instance.to_dict()
# create an instance of TaskUpdateParameter from a dict
task_update_parameter_from_dict = TaskUpdateParameter.from_dict(task_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


