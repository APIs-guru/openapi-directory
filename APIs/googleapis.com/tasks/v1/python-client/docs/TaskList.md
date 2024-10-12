# TaskList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | Task list identifier. | [optional] 
**kind** | **str** | Type of the resource. This is always \&quot;tasks#taskList\&quot;. | [optional] 
**self_link** | **str** | URL pointing to this task list. Used to retrieve, update, or delete this task list. | [optional] 
**title** | **str** | Title of the task list. | [optional] 
**updated** | **str** | Last modification time of the task list (as a RFC 3339 timestamp). | [optional] 

## Example

```python
from openapi_client.models.task_list import TaskList

# TODO update the JSON string below
json = "{}"
# create an instance of TaskList from a JSON string
task_list_instance = TaskList.from_json(json)
# print the JSON string representation of the object
print(TaskList.to_json())

# convert the object into a dict
task_list_dict = task_list_instance.to_dict()
# create an instance of TaskList from a dict
task_list_from_dict = TaskList.from_dict(task_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


