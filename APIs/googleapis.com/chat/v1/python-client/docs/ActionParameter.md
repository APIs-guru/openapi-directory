# ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The name of the parameter for the action script. | [optional] 
**value** | **str** | The value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.action_parameter import ActionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ActionParameter from a JSON string
action_parameter_instance = ActionParameter.from_json(json)
# print the JSON string representation of the object
print(ActionParameter.to_json())

# convert the object into a dict
action_parameter_dict = action_parameter_instance.to_dict()
# create an instance of ActionParameter from a dict
action_parameter_from_dict = ActionParameter.from_dict(action_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


