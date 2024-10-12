# FirewallPolicyRule

Properties of the rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the rule. | [optional] 
**priority** | **int** | Priority of the Firewall Policy Rule resource. | [optional] 
**rule_type** | **str** | The type of the rule. | 

## Example

```python
from openapi_client.models.firewall_policy_rule import FirewallPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRule from a JSON string
firewall_policy_rule_instance = FirewallPolicyRule.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRule.to_json())

# convert the object into a dict
firewall_policy_rule_dict = firewall_policy_rule_instance.to_dict()
# create an instance of FirewallPolicyRule from a dict
firewall_policy_rule_from_dict = FirewallPolicyRule.from_dict(firewall_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


