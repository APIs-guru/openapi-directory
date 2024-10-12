# AzureFirewallNatRuleCollectionProperties

Properties of the NAT rule collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**AzureFirewallNatRCAction**](AzureFirewallNatRCAction.md) |  | [optional] 
**priority** | **int** | Priority of the NAT rule collection resource. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**rules** | [**List[AzureFirewallNatRule]**](AzureFirewallNatRule.md) | Collection of rules used by a NAT rule collection. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_nat_rule_collection_properties import AzureFirewallNatRuleCollectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallNatRuleCollectionProperties from a JSON string
azure_firewall_nat_rule_collection_properties_instance = AzureFirewallNatRuleCollectionProperties.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallNatRuleCollectionProperties.to_json())

# convert the object into a dict
azure_firewall_nat_rule_collection_properties_dict = azure_firewall_nat_rule_collection_properties_instance.to_dict()
# create an instance of AzureFirewallNatRuleCollectionProperties from a dict
azure_firewall_nat_rule_collection_properties_from_dict = AzureFirewallNatRuleCollectionProperties.from_dict(azure_firewall_nat_rule_collection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


