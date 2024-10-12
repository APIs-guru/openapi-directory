# AzureFirewallApplicationRule

Properties of an application rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the rule. | [optional] 
**name** | **str** | Name of the application rule. | [optional] 
**protocols** | [**List[AzureFirewallApplicationRuleProtocol]**](AzureFirewallApplicationRuleProtocol.md) | Array of ApplicationRuleProtocols. | [optional] 
**source_addresses** | **List[str]** | List of source IP addresses for this rule. | [optional] 
**target_urls** | **List[str]** | List of URLs for this rule. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_application_rule import AzureFirewallApplicationRule

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallApplicationRule from a JSON string
azure_firewall_application_rule_instance = AzureFirewallApplicationRule.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallApplicationRule.to_json())

# convert the object into a dict
azure_firewall_application_rule_dict = azure_firewall_application_rule_instance.to_dict()
# create an instance of AzureFirewallApplicationRule from a dict
azure_firewall_application_rule_from_dict = AzureFirewallApplicationRule.from_dict(azure_firewall_application_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


