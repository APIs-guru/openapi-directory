# GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship

Details associated with guest sponsored splash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_minutes** | **int** | Duration in minutes of sponsored guest authorization. | [optional] 
**guest_can_request_timeframe** | **bool** | Whether or not guests can specify how much time they are requesting. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response_guest_sponsorship import GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship from a JSON string
get_network_wireless_ssid_splash_settings200_response_guest_sponsorship_instance = GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship.to_json())

# convert the object into a dict
get_network_wireless_ssid_splash_settings200_response_guest_sponsorship_dict = get_network_wireless_ssid_splash_settings200_response_guest_sponsorship_instance.to_dict()
# create an instance of GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship from a dict
get_network_wireless_ssid_splash_settings200_response_guest_sponsorship_from_dict = GetNetworkWirelessSsidSplashSettings200ResponseGuestSponsorship.from_dict(get_network_wireless_ssid_splash_settings200_response_guest_sponsorship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


