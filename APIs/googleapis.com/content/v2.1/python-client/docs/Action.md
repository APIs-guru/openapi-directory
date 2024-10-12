# Action

An actionable step that can be executed to solve the issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builtin_simple_action** | [**BuiltInSimpleAction**](BuiltInSimpleAction.md) |  | [optional] 
**button_label** | **str** | Label of the action button. | [optional] 
**external_action** | [**ExternalAction**](ExternalAction.md) |  | [optional] 
**is_available** | **bool** | Controlling whether the button is active or disabled. The value is &#39;false&#39; when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons. | [optional] 
**reasons** | [**List[ActionReason]**](ActionReason.md) | List of reasons why the action is not available. The list of reasons is empty if the action is available. If there is only one reason, it can be displayed next to the disabled button. If there are more reasons, all of them should be displayed, for example in a pop-up dialog. | [optional] 

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


