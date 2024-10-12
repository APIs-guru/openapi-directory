# Tasks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Task]**](Task.md) | Collection of tasks. | [optional] 
**kind** | **str** | Type of the resource. This is always \&quot;tasks#tasks\&quot;. | [optional] 
**next_page_token** | **str** | Token used to access the next page of this result. | [optional] 

## Example

```python
from openapi_client.models.tasks import Tasks

# TODO update the JSON string below
json = "{}"
# create an instance of Tasks from a JSON string
tasks_instance = Tasks.from_json(json)
# print the JSON string representation of the object
print(Tasks.to_json())

# convert the object into a dict
tasks_dict = tasks_instance.to_dict()
# create an instance of Tasks from a dict
tasks_from_dict = Tasks.from_dict(tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


