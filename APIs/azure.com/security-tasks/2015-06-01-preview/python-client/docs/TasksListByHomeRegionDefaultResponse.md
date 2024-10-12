# TasksListByHomeRegionDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TasksListByHomeRegionDefaultResponseError**](TasksListByHomeRegionDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.tasks_list_by_home_region_default_response import TasksListByHomeRegionDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TasksListByHomeRegionDefaultResponse from a JSON string
tasks_list_by_home_region_default_response_instance = TasksListByHomeRegionDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TasksListByHomeRegionDefaultResponse.to_json())

# convert the object into a dict
tasks_list_by_home_region_default_response_dict = tasks_list_by_home_region_default_response_instance.to_dict()
# create an instance of TasksListByHomeRegionDefaultResponse from a dict
tasks_list_by_home_region_default_response_from_dict = TasksListByHomeRegionDefaultResponse.from_dict(tasks_list_by_home_region_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


