# FirewallRuleListResult

Represents the response to a List Firewall Rules request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FirewallRule]**](FirewallRule.md) | The list of server firewall rules. | [optional] 

## Example

```python
from openapi_client.models.firewall_rule_list_result import FirewallRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallRuleListResult from a JSON string
firewall_rule_list_result_instance = FirewallRuleListResult.from_json(json)
# print the JSON string representation of the object
print(FirewallRuleListResult.to_json())

# convert the object into a dict
firewall_rule_list_result_dict = firewall_rule_list_result_instance.to_dict()
# create an instance of FirewallRuleListResult from a dict
firewall_rule_list_result_from_dict = FirewallRuleListResult.from_dict(firewall_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


