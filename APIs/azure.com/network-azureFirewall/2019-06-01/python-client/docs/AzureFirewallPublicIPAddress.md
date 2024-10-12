# AzureFirewallPublicIPAddress

Public IP Address associated with azure firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Public IP Address value. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_public_ip_address import AzureFirewallPublicIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallPublicIPAddress from a JSON string
azure_firewall_public_ip_address_instance = AzureFirewallPublicIPAddress.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallPublicIPAddress.to_json())

# convert the object into a dict
azure_firewall_public_ip_address_dict = azure_firewall_public_ip_address_instance.to_dict()
# create an instance of AzureFirewallPublicIPAddress from a dict
azure_firewall_public_ip_address_from_dict = AzureFirewallPublicIPAddress.from_dict(azure_firewall_public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


