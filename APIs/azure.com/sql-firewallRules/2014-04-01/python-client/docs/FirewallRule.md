# FirewallRule

Represents a server firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of server that contains this firewall rule. | [optional] [readonly] 
**location** | **str** | Location of the server that contains this firewall rule. | [optional] [readonly] 
**properties** | [**FirewallRuleProperties**](FirewallRuleProperties.md) |  | [optional] 
**type** | **str** | Type of resource this is. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_rule import FirewallRule

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallRule from a JSON string
firewall_rule_instance = FirewallRule.from_json(json)
# print the JSON string representation of the object
print(FirewallRule.to_json())

# convert the object into a dict
firewall_rule_dict = firewall_rule_instance.to_dict()
# create an instance of FirewallRule from a dict
firewall_rule_from_dict = FirewallRule.from_dict(firewall_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


