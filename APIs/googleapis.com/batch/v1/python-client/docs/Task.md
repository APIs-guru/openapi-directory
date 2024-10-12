# Task

A Cloud Batch task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Task name. The name is generated from the parent TaskGroup name and &#39;id&#39; field. For example: \&quot;projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01\&quot;. | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


