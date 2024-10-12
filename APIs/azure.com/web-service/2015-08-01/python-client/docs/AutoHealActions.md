# AutoHealActions

AutoHealActions - Describes the actions which can be              taken by the auto-heal module when a rule is triggered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | ActionType - predefined action to be taken | 
**custom_action** | [**AutoHealCustomAction**](AutoHealCustomAction.md) |  | [optional] 
**min_process_execution_time** | **str** | MinProcessExecutionTime - minimum time the process must execute              before taking the action | [optional] 

## Example

```python
from openapi_client.models.auto_heal_actions import AutoHealActions

# TODO update the JSON string below
json = "{}"
# create an instance of AutoHealActions from a JSON string
auto_heal_actions_instance = AutoHealActions.from_json(json)
# print the JSON string representation of the object
print(AutoHealActions.to_json())

# convert the object into a dict
auto_heal_actions_dict = auto_heal_actions_instance.to_dict()
# create an instance of AutoHealActions from a dict
auto_heal_actions_from_dict = AutoHealActions.from_dict(auto_heal_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


