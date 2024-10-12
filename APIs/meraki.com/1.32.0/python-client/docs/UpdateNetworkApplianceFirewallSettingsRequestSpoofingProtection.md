# UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection

Spoofing protection settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_source_guard** | [**UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtectionIpSourceGuard**](UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtectionIpSourceGuard.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_settings_request_spoofing_protection import UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection from a JSON string
update_network_appliance_firewall_settings_request_spoofing_protection_instance = UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection.to_json())

# convert the object into a dict
update_network_appliance_firewall_settings_request_spoofing_protection_dict = update_network_appliance_firewall_settings_request_spoofing_protection_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection from a dict
update_network_appliance_firewall_settings_request_spoofing_protection_from_dict = UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection.from_dict(update_network_appliance_firewall_settings_request_spoofing_protection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


