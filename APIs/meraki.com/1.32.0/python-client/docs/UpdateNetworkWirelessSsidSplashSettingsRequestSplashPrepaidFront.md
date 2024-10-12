# UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront

The prepaid front image used in the splash page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | The extension of the prepaid front image file. | [optional] 
**image** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFrontImage**](UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFrontImage.md) |  | [optional] 
**md5** | **str** | The MD5 value of the prepaid front image file. Setting this to null will remove the prepaid front from the splash page. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_splash_prepaid_front import UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront from a JSON string
update_network_wireless_ssid_splash_settings_request_splash_prepaid_front_instance = UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_splash_prepaid_front_dict = update_network_wireless_ssid_splash_settings_request_splash_prepaid_front_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront from a dict
update_network_wireless_ssid_splash_settings_request_splash_prepaid_front_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestSplashPrepaidFront.from_dict(update_network_wireless_ssid_splash_settings_request_splash_prepaid_front_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


