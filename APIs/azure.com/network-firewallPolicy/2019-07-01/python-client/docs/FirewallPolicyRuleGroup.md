# FirewallPolicyRuleGroup

Rule Group resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**FirewallPolicyRuleGroupProperties**](FirewallPolicyRuleGroupProperties.md) |  | [optional] 
**type** | **str** | Rule Group type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_rule_group import FirewallPolicyRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyRuleGroup from a JSON string
firewall_policy_rule_group_instance = FirewallPolicyRuleGroup.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyRuleGroup.to_json())

# convert the object into a dict
firewall_policy_rule_group_dict = firewall_policy_rule_group_instance.to_dict()
# create an instance of FirewallPolicyRuleGroup from a dict
firewall_policy_rule_group_from_dict = FirewallPolicyRuleGroup.from_dict(firewall_policy_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


