# FirewallRuleList

A list of server firewall rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[FirewallRule]**](FirewallRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.firewall_rule_list import FirewallRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallRuleList from a JSON string
firewall_rule_list_instance = FirewallRuleList.from_json(json)
# print the JSON string representation of the object
print(FirewallRuleList.to_json())

# convert the object into a dict
firewall_rule_list_dict = firewall_rule_list_instance.to_dict()
# create an instance of FirewallRuleList from a dict
firewall_rule_list_from_dict = FirewallRuleList.from_dict(firewall_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


