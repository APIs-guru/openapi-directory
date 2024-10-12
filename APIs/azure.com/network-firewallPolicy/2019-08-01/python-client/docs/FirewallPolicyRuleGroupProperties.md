# FirewallPolicyRuleGroupProperties

Properties of the rule group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **int** | Priority of the Firewall Policy Rule Group resource. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**rules** | [**List[FirewallPolicyRule]**](FirewallPolicyRule.md) | Group of Firewall Policy rules. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_rule_group_properties import FirewallPolicyRuleGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRuleGroupProperties from a JSON string
firewall_policy_rule_group_properties_instance = FirewallPolicyRuleGroupProperties.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRuleGroupProperties.to_json())

# convert the object into a dict
firewall_policy_rule_group_properties_dict = firewall_policy_rule_group_properties_instance.to_dict()
# create an instance of FirewallPolicyRuleGroupProperties from a dict
firewall_policy_rule_group_properties_from_dict = FirewallPolicyRuleGroupProperties.from_dict(firewall_policy_rule_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


