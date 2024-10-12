# ListTasksResponse

ListTasksResponse is a list of Tasks resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;run.googleapis.com/v1\&quot;. | [optional] 
**items** | [**List[Task]**](Task.md) | List of Tasks. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;TasksList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
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


