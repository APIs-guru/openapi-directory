# UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings

Manual radio settings for 5 GHz.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **int** | Sets a manual channel for 5 GHz. Can be &#39;36&#39;, &#39;40&#39;, &#39;44&#39;, &#39;48&#39;, &#39;52&#39;, &#39;56&#39;, &#39;60&#39;, &#39;64&#39;, &#39;100&#39;, &#39;104&#39;, &#39;108&#39;, &#39;112&#39;, &#39;116&#39;, &#39;120&#39;, &#39;124&#39;, &#39;128&#39;, &#39;132&#39;, &#39;136&#39;, &#39;140&#39;, &#39;144&#39;, &#39;149&#39;, &#39;153&#39;, &#39;157&#39;, &#39;161&#39;, &#39;165&#39;, &#39;169&#39;, &#39;173&#39; or &#39;177&#39; or null for using auto channel. | [optional] 
**channel_width** | **int** | Sets a manual channel for 5 GHz. Can be &#39;0&#39;, &#39;20&#39;, &#39;40&#39;, &#39;80&#39; or &#39;160&#39; or null for using auto channel width. | [optional] 
**target_power** | **int** | Set a manual target power for 5 GHz. Can be between &#39;8&#39; or &#39;30&#39; or null for using auto power range. | [optional] 

## Example

```python
from openapi_client.models.update_device_wireless_radio_settings_request_five_ghz_settings import UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings from a JSON string
update_device_wireless_radio_settings_request_five_ghz_settings_instance = UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings.to_json())

# convert the object into a dict
update_device_wireless_radio_settings_request_five_ghz_settings_dict = update_device_wireless_radio_settings_request_five_ghz_settings_instance.to_dict()
# create an instance of UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings from a dict
update_device_wireless_radio_settings_request_five_ghz_settings_from_dict = UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings.from_dict(update_device_wireless_radio_settings_request_five_ghz_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


