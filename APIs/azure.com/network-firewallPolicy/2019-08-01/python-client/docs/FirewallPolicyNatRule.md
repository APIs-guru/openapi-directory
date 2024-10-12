# FirewallPolicyNatRule

Firewall Policy NAT Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**FirewallPolicyNatRuleAction**](FirewallPolicyNatRuleAction.md) |  | [optional] 
**rule_condition** | [**FirewallPolicyRuleCondition**](FirewallPolicyRuleCondition.md) |  | [optional] 
**translated_address** | **str** | The translated address for this NAT rule. | [optional] 
**translated_port** | **str** | The translated port for this NAT rule. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_nat_rule import FirewallPolicyNatRule

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyNatRule from a JSON string
firewall_policy_nat_rule_instance = FirewallPolicyNatRule.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyNatRule.to_json())

# convert the object into a dict
firewall_policy_nat_rule_dict = firewall_policy_nat_rule_instance.to_dict()
# create an instance of FirewallPolicyNatRule from a dict
firewall_policy_nat_rule_from_dict = FirewallPolicyNatRule.from_dict(firewall_policy_nat_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


