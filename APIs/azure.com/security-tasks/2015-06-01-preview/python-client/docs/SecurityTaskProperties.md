# SecurityTaskProperties

Describes properties of a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time_utc** | **datetime** | The time this task was discovered in UTC | [optional] [readonly] 
**last_state_change_time_utc** | **datetime** | The time this task&#39;s details were last changed in UTC | [optional] [readonly] 
**security_task_parameters** | [**SecurityTaskParameters**](SecurityTaskParameters.md) |  | [optional] 
**state** | **str** | State of the task (Active, Resolved etc.) | [optional] [readonly] 
**sub_state** | **str** | Additional data on the state of the task | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_task_properties import SecurityTaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityTaskProperties from a JSON string
security_task_properties_instance = SecurityTaskProperties.from_json(json)
# print the JSON string representation of the object
print(SecurityTaskProperties.to_json())

# convert the object into a dict
security_task_properties_dict = security_task_properties_instance.to_dict()
# create an instance of SecurityTaskProperties from a dict
security_task_properties_from_dict = SecurityTaskProperties.from_dict(security_task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


