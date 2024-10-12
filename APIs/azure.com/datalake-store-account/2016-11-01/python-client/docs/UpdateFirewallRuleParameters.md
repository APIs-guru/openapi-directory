# UpdateFirewallRuleParameters

The parameters used to update a firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateFirewallRuleProperties**](UpdateFirewallRuleProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_firewall_rule_parameters import UpdateFirewallRuleParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFirewallRuleParameters from a JSON string
update_firewall_rule_parameters_instance = UpdateFirewallRuleParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateFirewallRuleParameters.to_json())

# convert the object into a dict
update_firewall_rule_parameters_dict = update_firewall_rule_parameters_instance.to_dict()
# create an instance of UpdateFirewallRuleParameters from a dict
update_firewall_rule_parameters_from_dict = UpdateFirewallRuleParameters.from_dict(update_firewall_rule_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


