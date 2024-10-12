# AzureFirewallPropertiesFormat

Properties of the Azure Firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_rule_collections** | [**List[AzureFirewallApplicationRuleCollection]**](AzureFirewallApplicationRuleCollection.md) | Collection of application rule collections used by Azure Firewall. | [optional] 
**ip_configurations** | [**List[AzureFirewallIPConfiguration]**](AzureFirewallIPConfiguration.md) | IP configuration of the Azure Firewall resource. | [optional] 
**nat_rule_collections** | [**List[AzureFirewallNatRuleCollection]**](AzureFirewallNatRuleCollection.md) | Collection of NAT rule collections used by Azure Firewall. | [optional] 
**network_rule_collections** | [**List[AzureFirewallNetworkRuleCollection]**](AzureFirewallNetworkRuleCollection.md) | Collection of network rule collections used by Azure Firewall. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**threat_intel_mode** | [**AzureFirewallThreatIntelMode**](AzureFirewallThreatIntelMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_properties_format import AzureFirewallPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallPropertiesFormat from a JSON string
azure_firewall_properties_format_instance = AzureFirewallPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallPropertiesFormat.to_json())

# convert the object into a dict
azure_firewall_properties_format_dict = azure_firewall_properties_format_instance.to_dict()
# create an instance of AzureFirewallPropertiesFormat from a dict
azure_firewall_properties_format_from_dict = AzureFirewallPropertiesFormat.from_dict(azure_firewall_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


