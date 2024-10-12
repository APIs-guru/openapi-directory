# TaskLists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[TaskList]**](TaskList.md) | Collection of task lists. | [optional] 
**kind** | **str** | Type of the resource. This is always \&quot;tasks#taskLists\&quot;. | [optional] 
**next_page_token** | **str** | Token that can be used to request the next page of this result. | [optional] 

## Example

```python
from openapi_client.models.task_lists import TaskLists

# TODO update the JSON string below
json = "{}"
# create an instance of TaskLists from a JSON string
task_lists_instance = TaskLists.from_json(json)
# print the JSON string representation of the object
print(TaskLists.to_json())

# convert the object into a dict
task_lists_dict = task_lists_instance.to_dict()
# create an instance of TaskLists from a dict
task_lists_from_dict = TaskLists.from_dict(task_lists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


