# ListTasksResponse

ListTasks Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**tasks** | [**List[Task]**](Task.md) | Tasks. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_tasks_response import ListTasksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTasksResponse from a JSON string
list_tasks_response_instance = ListTasksResponse.from_json(json)
# print the JSON string representation of the object
print(ListTasksResponse.to_json())

# convert the object into a dict
list_tasks_response_dict = list_tasks_response_instance.to_dict()
# create an instance of ListTasksResponse from a dict
list_tasks_response_from_dict = ListTasksResponse.from_dict(list_tasks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


