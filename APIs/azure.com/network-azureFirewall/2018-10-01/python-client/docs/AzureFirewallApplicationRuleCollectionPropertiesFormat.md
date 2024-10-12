# AzureFirewallApplicationRuleCollectionPropertiesFormat

Properties of the application rule collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**AzureFirewallRCAction**](AzureFirewallRCAction.md) |  | [optional] 
**priority** | **int** | Priority of the application rule collection resource. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**rules** | [**List[AzureFirewallApplicationRule]**](AzureFirewallApplicationRule.md) | Collection of rules used by a application rule collection. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_application_rule_collection_properties_format import AzureFirewallApplicationRuleCollectionPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallApplicationRuleCollectionPropertiesFormat from a JSON string
azure_firewall_application_rule_collection_properties_format_instance = AzureFirewallApplicationRuleCollectionPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallApplicationRuleCollectionPropertiesFormat.to_json())

# convert the object into a dict
azure_firewall_application_rule_collection_properties_format_dict = azure_firewall_application_rule_collection_properties_format_instance.to_dict()
# create an instance of AzureFirewallApplicationRuleCollectionPropertiesFormat from a dict
azure_firewall_application_rule_collection_properties_format_from_dict = AzureFirewallApplicationRuleCollectionPropertiesFormat.from_dict(azure_firewall_application_rule_collection_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


