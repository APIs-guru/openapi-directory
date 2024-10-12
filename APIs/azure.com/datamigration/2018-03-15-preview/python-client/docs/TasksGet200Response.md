# TasksGet200Response

A task resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | HTTP strong entity tag value. This is ignored if submitted. | [optional] 
**properties** | [**TasksList200ResponseValueInnerProperties**](TasksList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tasks_get200_response import TasksGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TasksGet200Response from a JSON string
tasks_get200_response_instance = TasksGet200Response.from_json(json)
# print the JSON string representation of the object
print(TasksGet200Response.to_json())

# convert the object into a dict
tasks_get200_response_dict = tasks_get200_response_instance.to_dict()
# create an instance of TasksGet200Response from a dict
tasks_get200_response_from_dict = TasksGet200Response.from_dict(tasks_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


