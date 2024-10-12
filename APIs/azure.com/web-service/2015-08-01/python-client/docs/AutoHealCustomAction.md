# AutoHealCustomAction

AutoHealCustomAction - Describes the custom action to be executed              when an auto heal rule is triggered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exe** | **str** | Executable to be run | [optional] 
**parameters** | **str** | Parameters for the executable | [optional] 

## Example

```python
from openapi_client.models.auto_heal_custom_action import AutoHealCustomAction

# TODO update the JSON string below
json = "{}"
# create an instance of AutoHealCustomAction from a JSON string
auto_heal_custom_action_instance = AutoHealCustomAction.from_json(json)
# print the JSON string representation of the object
print(AutoHealCustomAction.to_json())

# convert the object into a dict
auto_heal_custom_action_dict = auto_heal_custom_action_instance.to_dict()
# create an instance of AutoHealCustomAction from a dict
auto_heal_custom_action_from_dict = AutoHealCustomAction.from_dict(auto_heal_custom_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


