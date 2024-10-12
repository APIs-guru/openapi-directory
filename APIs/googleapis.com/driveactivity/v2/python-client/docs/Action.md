# Action

Information about the action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | [**Actor**](Actor.md) |  | [optional] 
**detail** | [**ActionDetail**](ActionDetail.md) |  | [optional] 
**target** | [**Target**](Target.md) |  | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 
**timestamp** | **str** | The action occurred at this specific time. | [optional] 

## Example

```python
from openapi_client.models.action import Action

# TODO update the JSON string below
json = "{}"
# create an instance of Action from a JSON string
action_instance = Action.from_json(json)
# print the JSON string representation of the object
print(Action.to_json())

# convert the object into a dict
action_dict = action_instance.to_dict()
# create an instance of Action from a dict
action_from_dict = Action.from_dict(action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


