# AutomationRule

`AutomationRule` defines the automation activities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_rollout_rule** | [**AdvanceRolloutRule**](AdvanceRolloutRule.md) |  | [optional] 
**promote_release_rule** | [**PromoteReleaseRule**](PromoteReleaseRule.md) |  | [optional] 
**repair_rollout_rule** | [**RepairRolloutRule**](RepairRolloutRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.automation_rule import AutomationRule

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRule from a JSON string
automation_rule_instance = AutomationRule.from_json(json)
# print the JSON string representation of the object
print(AutomationRule.to_json())

# convert the object into a dict
automation_rule_dict = automation_rule_instance.to_dict()
# create an instance of AutomationRule from a dict
automation_rule_from_dict = AutomationRule.from_dict(automation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


