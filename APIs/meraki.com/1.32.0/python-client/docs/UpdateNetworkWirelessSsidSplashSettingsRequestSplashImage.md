# UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage

The image used in the splash page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | The extension of the image file. | [optional] 
**image** | [**UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage**](UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage.md) |  | [optional] 
**md5** | **str** | The MD5 value of the image file. Setting this to null will remove the image from the splash page. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_splash_image import UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage from a JSON string
update_network_wireless_ssid_splash_settings_request_splash_image_instance = UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_splash_image_dict = update_network_wireless_ssid_splash_settings_request_splash_image_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage from a dict
update_network_wireless_ssid_splash_settings_request_splash_image_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestSplashImage.from_dict(update_network_wireless_ssid_splash_settings_request_splash_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


