# AvailabilityGroupListener

A SQL Server availability group listener.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AvailabilityGroupListenerProperties**](AvailabilityGroupListenerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.availability_group_listener import AvailabilityGroupListener

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityGroupListener from a JSON string
availability_group_listener_instance = AvailabilityGroupListener.from_json(json)
# print the JSON string representation of the object
print(AvailabilityGroupListener.to_json())

# convert the object into a dict
availability_group_listener_dict = availability_group_listener_instance.to_dict()
# create an instance of AvailabilityGroupListener from a dict
availability_group_listener_from_dict = AvailabilityGroupListener.from_dict(availability_group_listener_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


