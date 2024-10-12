# FirewallPolicyNatRuleAction

Properties of the FirewallPolicyNatRuleAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**FirewallPolicyNatRuleActionType**](FirewallPolicyNatRuleActionType.md) |  | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_nat_rule_action import FirewallPolicyNatRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyNatRuleAction from a JSON string
firewall_policy_nat_rule_action_instance = FirewallPolicyNatRuleAction.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyNatRuleAction.to_json())

# convert the object into a dict
firewall_policy_nat_rule_action_dict = firewall_policy_nat_rule_action_instance.to_dict()
# create an instance of FirewallPolicyNatRuleAction from a dict
firewall_policy_nat_rule_action_from_dict = FirewallPolicyNatRuleAction.from_dict(firewall_policy_nat_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


