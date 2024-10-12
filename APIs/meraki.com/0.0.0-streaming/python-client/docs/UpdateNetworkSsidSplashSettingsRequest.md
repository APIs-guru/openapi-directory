# UpdateNetworkSsidSplashSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**splash_url** | **str** | [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see &#39;useSplashUrl&#39; | [optional] 
**use_splash_url** | **bool** | [optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID&#39;s access control settings, it may not be possible to use the custom splash URL. | [optional] 

## Example

```python
from openapi_client.models.update_network_ssid_splash_settings_request import UpdateNetworkSsidSplashSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSsidSplashSettingsRequest from a JSON string
update_network_ssid_splash_settings_request_instance = UpdateNetworkSsidSplashSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSsidSplashSettingsRequest.to_json())

# convert the object into a dict
update_network_ssid_splash_settings_request_dict = update_network_ssid_splash_settings_request_instance.to_dict()
# create an instance of UpdateNetworkSsidSplashSettingsRequest from a dict
update_network_ssid_splash_settings_request_from_dict = UpdateNetworkSsidSplashSettingsRequest.from_dict(update_network_ssid_splash_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


