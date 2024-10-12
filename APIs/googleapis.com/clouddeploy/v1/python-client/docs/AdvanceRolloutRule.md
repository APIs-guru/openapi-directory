# AdvanceRolloutRule

The `AdvanceRollout` automation rule will automatically advance a successful Rollout to the next phase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**AutomationRuleCondition**](AutomationRuleCondition.md) |  | [optional] 
**id** | **str** | Required. ID of the rule. This id must be unique in the &#x60;Automation&#x60; resource to which this rule belongs. The format is &#x60;a-z{0,62}&#x60;. | [optional] 
**source_phases** | **List[str]** | Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: &#x60;^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$&#x60;. | [optional] 
**wait** | **str** | Optional. How long to wait after a rollout is finished. | [optional] 

## Example

```python
from openapi_client.models.advance_rollout_rule import AdvanceRolloutRule

# TODO update the JSON string below
json = "{}"
# create an instance of AdvanceRolloutRule from a JSON string
advance_rollout_rule_instance = AdvanceRolloutRule.from_json(json)
# print the JSON string representation of the object
print(AdvanceRolloutRule.to_json())

# convert the object into a dict
advance_rollout_rule_dict = advance_rollout_rule_instance.to_dict()
# create an instance of AdvanceRolloutRule from a dict
advance_rollout_rule_from_dict = AdvanceRolloutRule.from_dict(advance_rollout_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


