# UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess

Details associated with a free access plan with limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_minutes** | **int** | How long a device can use a network for free. | [optional] 
**enabled** | **bool** | Whether or not free access is enabled. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_billing_free_access import UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess from a JSON string
update_network_wireless_ssid_splash_settings_request_billing_free_access_instance = UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_billing_free_access_dict = update_network_wireless_ssid_splash_settings_request_billing_free_access_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess from a dict
update_network_wireless_ssid_splash_settings_request_billing_free_access_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestBillingFreeAccess.from_dict(update_network_wireless_ssid_splash_settings_request_billing_free_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


