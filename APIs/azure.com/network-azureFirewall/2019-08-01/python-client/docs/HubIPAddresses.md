# HubIPAddresses

IP addresses associated with azure firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | Private IP Address associated with azure firewall. | [optional] 
**public_ip_addresses** | [**List[AzureFirewallPublicIPAddress]**](AzureFirewallPublicIPAddress.md) | List of Public IP addresses associated with azure firewall. | [optional] 

## Example

```python
from openapi_client.models.hub_ip_addresses import HubIPAddresses

# TODO update the JSON string below
json = "{}"
# create an instance of HubIPAddresses from a JSON string
hub_ip_addresses_instance = HubIPAddresses.from_json(json)
# print the JSON string representation of the object
print(HubIPAddresses.to_json())

# convert the object into a dict
hub_ip_addresses_dict = hub_ip_addresses_instance.to_dict()
# create an instance of HubIPAddresses from a dict
hub_ip_addresses_from_dict = HubIPAddresses.from_dict(hub_ip_addresses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


