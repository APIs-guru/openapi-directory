# FirewallPolicyFilterRule

Firewall Policy Filter Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**FirewallPolicyFilterRuleAction**](FirewallPolicyFilterRuleAction.md) |  | [optional] 
**rule_conditions** | [**List[FirewallPolicyRuleCondition]**](FirewallPolicyRuleCondition.md) | Collection of rule conditions used by a rule. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_filter_rule import FirewallPolicyFilterRule

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyFilterRule from a JSON string
firewall_policy_filter_rule_instance = FirewallPolicyFilterRule.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyFilterRule.to_json())

# convert the object into a dict
firewall_policy_filter_rule_dict = firewall_policy_filter_rule_instance.to_dict()
# create an instance of FirewallPolicyFilterRule from a dict
firewall_policy_filter_rule_from_dict = FirewallPolicyFilterRule.from_dict(firewall_policy_filter_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


