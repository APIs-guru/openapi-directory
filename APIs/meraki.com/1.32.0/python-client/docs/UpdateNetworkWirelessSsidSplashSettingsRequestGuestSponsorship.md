# UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship

Details associated with guest sponsored splash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_minutes** | **int** | Duration in minutes of sponsored guest authorization. Must be between 1 and 60480 (6 weeks) | [optional] 
**guest_can_request_timeframe** | **bool** | Whether or not guests can specify how much time they are requesting. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_guest_sponsorship import UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship from a JSON string
update_network_wireless_ssid_splash_settings_request_guest_sponsorship_instance = UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_guest_sponsorship_dict = update_network_wireless_ssid_splash_settings_request_guest_sponsorship_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship from a dict
update_network_wireless_ssid_splash_settings_request_guest_sponsorship_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestGuestSponsorship.from_dict(update_network_wireless_ssid_splash_settings_request_guest_sponsorship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


