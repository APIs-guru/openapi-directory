# CreateFirewallRuleWithAccountParameters

The parameters used to create a new firewall rule while creating a new Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the firewall rule to create. | 
**properties** | [**CreateOrUpdateFirewallRuleProperties**](CreateOrUpdateFirewallRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.create_firewall_rule_with_account_parameters import CreateFirewallRuleWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFirewallRuleWithAccountParameters from a JSON string
create_firewall_rule_with_account_parameters_instance = CreateFirewallRuleWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateFirewallRuleWithAccountParameters.to_json())

# convert the object into a dict
create_firewall_rule_with_account_parameters_dict = create_firewall_rule_with_account_parameters_instance.to_dict()
# create an instance of CreateFirewallRuleWithAccountParameters from a dict
create_firewall_rule_with_account_parameters_from_dict = CreateFirewallRuleWithAccountParameters.from_dict(create_firewall_rule_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


