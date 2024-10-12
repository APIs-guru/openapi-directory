# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **str** | Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed. | [optional] 
**deleted** | **bool** | Flag indicating whether the task has been deleted. The default is False. | [optional] 
**due** | **str** | Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn&#39;t possible to read or write the time that a task is due via the API. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**hidden** | **bool** | Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only. | [optional] 
**id** | **str** | Task identifier. | [optional] 
**kind** | **str** | Type of the resource. This is always \&quot;tasks#task\&quot;. | [optional] 
**links** | [**List[TaskLinksInner]**](TaskLinksInner.md) | Collection of links. This collection is read-only. | [optional] 
**notes** | **str** | Notes describing the task. Optional. | [optional] 
**parent** | **str** | Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the \&quot;move\&quot; method to move the task under a different parent or to the top level. | [optional] 
**position** | **str** | String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task&#39;s corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the \&quot;move\&quot; method to move the task to another position. | [optional] 
**self_link** | **str** | URL pointing to this task. Used to retrieve, update, or delete this task. | [optional] 
**status** | **str** | Status of the task. This is either \&quot;needsAction\&quot; or \&quot;completed\&quot;. | [optional] 
**title** | **str** | Title of the task. | [optional] 
**updated** | **str** | Last modification time of the task (as a RFC 3339 timestamp). | [optional] 

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


