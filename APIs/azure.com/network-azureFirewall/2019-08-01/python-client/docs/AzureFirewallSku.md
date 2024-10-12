# AzureFirewallSku

SKU of an Azure Firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of an Azure Firewall SKU. | [optional] 
**tier** | **str** | Tier of an Azure Firewall. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_sku import AzureFirewallSku

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallSku from a JSON string
azure_firewall_sku_instance = AzureFirewallSku.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallSku.to_json())

# convert the object into a dict
azure_firewall_sku_dict = azure_firewall_sku_instance.to_dict()
# create an instance of AzureFirewallSku from a dict
azure_firewall_sku_from_dict = AzureFirewallSku.from_dict(azure_firewall_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


