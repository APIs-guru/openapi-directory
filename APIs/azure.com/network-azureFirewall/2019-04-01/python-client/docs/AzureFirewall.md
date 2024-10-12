# AzureFirewall

Azure Firewall resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**AzureFirewallPropertiesFormat**](AzureFirewallPropertiesFormat.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting where the resource needs to come from. | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_firewall import AzureFirewall

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewall from a JSON string
azure_firewall_instance = AzureFirewall.from_json(json)
# print the JSON string representation of the object
print(AzureFirewall.to_json())

# convert the object into a dict
azure_firewall_dict = azure_firewall_instance.to_dict()
# create an instance of AzureFirewall from a dict
azure_firewall_from_dict = AzureFirewall.from_dict(azure_firewall_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


