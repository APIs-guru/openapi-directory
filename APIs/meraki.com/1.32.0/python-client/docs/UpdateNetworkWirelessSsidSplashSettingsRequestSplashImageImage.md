# UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage

Properties for setting a new image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The file contents (a base 64 encoded string) of your new image. | [optional] 
**format** | **str** | The format of the encoded contents. Supported formats are &#39;png&#39;, &#39;gif&#39;, and jpg&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_splash_settings_request_splash_image_image import UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage from a JSON string
update_network_wireless_ssid_splash_settings_request_splash_image_image_instance = UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage.to_json())

# convert the object into a dict
update_network_wireless_ssid_splash_settings_request_splash_image_image_dict = update_network_wireless_ssid_splash_settings_request_splash_image_image_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage from a dict
update_network_wireless_ssid_splash_settings_request_splash_image_image_from_dict = UpdateNetworkWirelessSsidSplashSettingsRequestSplashImageImage.from_dict(update_network_wireless_ssid_splash_settings_request_splash_image_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


