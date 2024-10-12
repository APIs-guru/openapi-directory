# UpdateNetworkApplianceFirewallSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spoofing_protection** | [**UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection**](UpdateNetworkApplianceFirewallSettingsRequestSpoofingProtection.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_settings_request import UpdateNetworkApplianceFirewallSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallSettingsRequest from a JSON string
update_network_appliance_firewall_settings_request_instance = UpdateNetworkApplianceFirewallSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallSettingsRequest.to_json())

# convert the object into a dict
update_network_appliance_firewall_settings_request_dict = update_network_appliance_firewall_settings_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallSettingsRequest from a dict
update_network_appliance_firewall_settings_request_from_dict = UpdateNetworkApplianceFirewallSettingsRequest.from_dict(update_network_appliance_firewall_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


