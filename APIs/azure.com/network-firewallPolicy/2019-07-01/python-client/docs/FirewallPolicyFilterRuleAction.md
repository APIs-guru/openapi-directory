# FirewallPolicyFilterRuleAction

Properties of the FirewallPolicyFilterRuleAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**FirewallPolicyFilterRuleActionType**](FirewallPolicyFilterRuleActionType.md) |  | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_filter_rule_action import FirewallPolicyFilterRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyFilterRuleAction from a JSON string
firewall_policy_filter_rule_action_instance = FirewallPolicyFilterRuleAction.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyFilterRuleAction.to_json())

# convert the object into a dict
firewall_policy_filter_rule_action_dict = firewall_policy_filter_rule_action_instance.to_dict()
# create an instance of FirewallPolicyFilterRuleAction from a dict
firewall_policy_filter_rule_action_from_dict = FirewallPolicyFilterRuleAction.from_dict(firewall_policy_filter_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


