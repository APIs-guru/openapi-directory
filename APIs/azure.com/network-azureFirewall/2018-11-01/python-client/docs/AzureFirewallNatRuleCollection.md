# AzureFirewallNatRuleCollection

NAT rule collection resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**AzureFirewallNatRuleCollectionProperties**](AzureFirewallNatRuleCollectionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_nat_rule_collection import AzureFirewallNatRuleCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallNatRuleCollection from a JSON string
azure_firewall_nat_rule_collection_instance = AzureFirewallNatRuleCollection.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallNatRuleCollection.to_json())

# convert the object into a dict
azure_firewall_nat_rule_collection_dict = azure_firewall_nat_rule_collection_instance.to_dict()
# create an instance of AzureFirewallNatRuleCollection from a dict
azure_firewall_nat_rule_collection_from_dict = AzureFirewallNatRuleCollection.from_dict(azure_firewall_nat_rule_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


