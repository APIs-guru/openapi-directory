# TasksList200Response

OData page of tasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to load the next page of tasks | [optional] 
**value** | [**List[TasksList200ResponseValueInner]**](TasksList200ResponseValueInner.md) | List of tasks | [optional] 

## Example

```python
from openapi_client.models.tasks_list200_response import TasksList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TasksList200Response from a JSON string
tasks_list200_response_instance = TasksList200Response.from_json(json)
# print the JSON string representation of the object
print(TasksList200Response.to_json())

# convert the object into a dict
tasks_list200_response_dict = tasks_list200_response_instance.to_dict()
# create an instance of TasksList200Response from a dict
tasks_list200_response_from_dict = TasksList200Response.from_dict(tasks_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


