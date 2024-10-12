# ScaleAction

The parameters for the scaling action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cooldown** | **str** | the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format. | 
**direction** | **str** | the scale direction. Whether the scaling action increases or decreases the number of instances. | 
**type** | **str** | the type of action that should occur when the scale rule fires. | 
**value** | **str** | the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1. | [optional] [default to '1']

## Example

```python
from openapi_client.models.scale_action import ScaleAction

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleAction from a JSON string
scale_action_instance = ScaleAction.from_json(json)
# print the JSON string representation of the object
print(ScaleAction.to_json())

# convert the object into a dict
scale_action_dict = scale_action_instance.to_dict()
# create an instance of ScaleAction from a dict
scale_action_from_dict = ScaleAction.from_dict(scale_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


