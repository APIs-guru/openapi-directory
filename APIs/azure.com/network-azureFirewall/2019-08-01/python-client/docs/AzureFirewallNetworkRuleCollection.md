# AzureFirewallNetworkRuleCollection

Network rule collection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. | [optional] 
**properties** | [**AzureFirewallNetworkRuleCollectionPropertiesFormat**](AzureFirewallNetworkRuleCollectionPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_network_rule_collection import AzureFirewallNetworkRuleCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallNetworkRuleCollection from a JSON string
azure_firewall_network_rule_collection_instance = AzureFirewallNetworkRuleCollection.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallNetworkRuleCollection.to_json())

# convert the object into a dict
azure_firewall_network_rule_collection_dict = azure_firewall_network_rule_collection_instance.to_dict()
# create an instance of AzureFirewallNetworkRuleCollection from a dict
azure_firewall_network_rule_collection_from_dict = AzureFirewallNetworkRuleCollection.from_dict(azure_firewall_network_rule_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


