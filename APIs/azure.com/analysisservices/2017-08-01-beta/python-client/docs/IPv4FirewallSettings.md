# IPv4FirewallSettings

An array of firewall rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_power_bi_service** | **bool** | The indicator of enabling PBI service. | [optional] 
**firewall_rules** | [**List[IPv4FirewallRule]**](IPv4FirewallRule.md) | An array of firewall rules. | [optional] 

## Example

```python
from openapi_client.models.ipv4_firewall_settings import IPv4FirewallSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IPv4FirewallSettings from a JSON string
ipv4_firewall_settings_instance = IPv4FirewallSettings.from_json(json)
# print the JSON string representation of the object
print(IPv4FirewallSettings.to_json())

# convert the object into a dict
ipv4_firewall_settings_dict = ipv4_firewall_settings_instance.to_dict()
# create an instance of IPv4FirewallSettings from a dict
ipv4_firewall_settings_from_dict = IPv4FirewallSettings.from_dict(ipv4_firewall_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


