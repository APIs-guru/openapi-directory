# AzureFirewallNatRule

Properties of a NAT rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the rule. | [optional] 
**destination_addresses** | **List[str]** | List of destination IP addresses for this rule. | [optional] 
**destination_ports** | **List[str]** | List of destination ports. | [optional] 
**name** | **str** | Name of the NAT rule. | [optional] 
**protocols** | [**List[AzureFirewallNetworkRuleProtocol]**](AzureFirewallNetworkRuleProtocol.md) | Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule. | [optional] 
**source_addresses** | **List[str]** | List of source IP addresses for this rule. | [optional] 
**translated_address** | **str** | The translated address for this NAT rule. | [optional] 
**translated_port** | **str** | The translated port for this NAT rule. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_nat_rule import AzureFirewallNatRule

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallNatRule from a JSON string
azure_firewall_nat_rule_instance = AzureFirewallNatRule.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallNatRule.to_json())

# convert the object into a dict
azure_firewall_nat_rule_dict = azure_firewall_nat_rule_instance.to_dict()
# create an instance of AzureFirewallNatRule from a dict
azure_firewall_nat_rule_from_dict = AzureFirewallNatRule.from_dict(azure_firewall_nat_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


