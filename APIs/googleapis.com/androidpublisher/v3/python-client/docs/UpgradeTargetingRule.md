# UpgradeTargetingRule

Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period_duration** | **str** | The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched. | [optional] 
**once_per_user** | **bool** | Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer. | [optional] 
**scope** | [**TargetingRuleScope**](TargetingRuleScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_targeting_rule import UpgradeTargetingRule

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeTargetingRule from a JSON string
upgrade_targeting_rule_instance = UpgradeTargetingRule.from_json(json)
# print the JSON string representation of the object
print(UpgradeTargetingRule.to_json())

# convert the object into a dict
upgrade_targeting_rule_dict = upgrade_targeting_rule_instance.to_dict()
# create an instance of UpgradeTargetingRule from a dict
upgrade_targeting_rule_from_dict = UpgradeTargetingRule.from_dict(upgrade_targeting_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


