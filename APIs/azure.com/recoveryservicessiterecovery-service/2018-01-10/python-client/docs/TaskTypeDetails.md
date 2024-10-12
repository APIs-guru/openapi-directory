# TaskTypeDetails

Task details based on specific task type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The type of task details. | [optional] 

## Example

```python
from openapi_client.models.task_type_details import TaskTypeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TaskTypeDetails from a JSON string
task_type_details_instance = TaskTypeDetails.from_json(json)
# print the JSON string representation of the object
print(TaskTypeDetails.to_json())

# convert the object into a dict
task_type_details_dict = task_type_details_instance.to_dict()
# create an instance of TaskTypeDetails from a dict
task_type_details_from_dict = TaskTypeDetails.from_dict(task_type_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


