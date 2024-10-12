# FirewallPolicyRuleCondition

Properties of a rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the rule condition. | [optional] 
**name** | **str** | Name of the rule condition. | [optional] 
**rule_condition_type** | **str** | Rule Condition Type | 

## Example

```python
from openapi_client.models.firewall_policy_rule_condition import FirewallPolicyRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRuleCondition from a JSON string
firewall_policy_rule_condition_instance = FirewallPolicyRuleCondition.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRuleCondition.to_json())

# convert the object into a dict
firewall_policy_rule_condition_dict = firewall_policy_rule_condition_instance.to_dict()
# create an instance of FirewallPolicyRuleCondition from a dict
firewall_policy_rule_condition_from_dict = FirewallPolicyRuleCondition.from_dict(firewall_policy_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


