# FirewallPolicyRuleGroupListResult

Response for ListFirewallPolicyRuleGroups API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[FirewallPolicyRuleGroup]**](FirewallPolicyRuleGroup.md) | List of FirewallPolicyRuleGroups in a FirewallPolicy. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_rule_group_list_result import FirewallPolicyRuleGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRuleGroupListResult from a JSON string
firewall_policy_rule_group_list_result_instance = FirewallPolicyRuleGroupListResult.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRuleGroupListResult.to_json())

# convert the object into a dict
firewall_policy_rule_group_list_result_dict = firewall_policy_rule_group_list_result_instance.to_dict()
# create an instance of FirewallPolicyRuleGroupListResult from a dict
firewall_policy_rule_group_list_result_from_dict = FirewallPolicyRuleGroupListResult.from_dict(firewall_policy_rule_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


