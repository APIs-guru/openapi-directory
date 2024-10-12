# AvailabilityGroupListenerListResult

A list of availability group listeners.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[AvailabilityGroupListener]**](AvailabilityGroupListener.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.availability_group_listener_list_result import AvailabilityGroupListenerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityGroupListenerListResult from a JSON string
availability_group_listener_list_result_instance = AvailabilityGroupListenerListResult.from_json(json)
# print the JSON string representation of the object
print(AvailabilityGroupListenerListResult.to_json())

# convert the object into a dict
availability_group_listener_list_result_dict = availability_group_listener_list_result_instance.to_dict()
# create an instance of AvailabilityGroupListenerListResult from a dict
availability_group_listener_list_result_from_dict = AvailabilityGroupListenerListResult.from_dict(availability_group_listener_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


