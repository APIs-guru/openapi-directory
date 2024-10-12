# UpdateFirewallRuleWithAccountParameters

The parameters used to update a firewall rule while updating a Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the firewall rule to update. | 
**properties** | [**UpdateFirewallRuleProperties**](UpdateFirewallRuleProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_firewall_rule_with_account_parameters import UpdateFirewallRuleWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFirewallRuleWithAccountParameters from a JSON string
update_firewall_rule_with_account_parameters_instance = UpdateFirewallRuleWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateFirewallRuleWithAccountParameters.to_json())

# convert the object into a dict
update_firewall_rule_with_account_parameters_dict = update_firewall_rule_with_account_parameters_instance.to_dict()
# create an instance of UpdateFirewallRuleWithAccountParameters from a dict
update_firewall_rule_with_account_parameters_from_dict = UpdateFirewallRuleWithAccountParameters.from_dict(update_firewall_rule_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


