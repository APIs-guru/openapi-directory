# TasksList200ResponseValueInner

A task resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | HTTP strong entity tag value. This is ignored if submitted. | [optional] 
**properties** | [**TasksList200ResponseValueInnerProperties**](TasksList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tasks_list200_response_value_inner import TasksList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of TasksList200ResponseValueInner from a JSON string
tasks_list200_response_value_inner_instance = TasksList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(TasksList200ResponseValueInner.to_json())

# convert the object into a dict
tasks_list200_response_value_inner_dict = tasks_list200_response_value_inner_instance.to_dict()
# create an instance of TasksList200ResponseValueInner from a dict
tasks_list200_response_value_inner_from_dict = TasksList200ResponseValueInner.from_dict(tasks_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


