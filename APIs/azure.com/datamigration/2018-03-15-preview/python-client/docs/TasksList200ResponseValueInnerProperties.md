# TasksList200ResponseValueInnerProperties

Base class for all types of DMS task properties. If task is not supported by current client, this object is returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[OperationsListDefaultResponseError]**](OperationsListDefaultResponseError.md) | Array of errors. This is ignored if submitted. | [optional] [readonly] 
**state** | **str** | The state of the task. This is ignored if submitted. | [optional] [readonly] 
**task_type** | **str** | Task type. | 

## Example

```python
from openapi_client.models.tasks_list200_response_value_inner_properties import TasksList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TasksList200ResponseValueInnerProperties from a JSON string
tasks_list200_response_value_inner_properties_instance = TasksList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(TasksList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
tasks_list200_response_value_inner_properties_dict = tasks_list200_response_value_inner_properties_instance.to_dict()
# create an instance of TasksList200ResponseValueInnerProperties from a dict
tasks_list200_response_value_inner_properties_from_dict = TasksList200ResponseValueInnerProperties.from_dict(tasks_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


