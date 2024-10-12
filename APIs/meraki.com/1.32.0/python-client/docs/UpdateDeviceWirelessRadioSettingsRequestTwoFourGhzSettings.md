# UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings

Manual radio settings for 2.4 GHz.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **int** | Sets a manual channel for 2.4 GHz. Can be &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;, &#39;10&#39;, &#39;11&#39;, &#39;12&#39;, &#39;13&#39; or &#39;14&#39; or null for using auto channel. | [optional] 
**target_power** | **int** | Set a manual target power for 2.4 GHz. Can be between &#39;5&#39; or &#39;30&#39; or null for using auto power range. | [optional] 

## Example

```python
from openapi_client.models.update_device_wireless_radio_settings_request_two_four_ghz_settings import UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings from a JSON string
update_device_wireless_radio_settings_request_two_four_ghz_settings_instance = UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings.to_json())

# convert the object into a dict
update_device_wireless_radio_settings_request_two_four_ghz_settings_dict = update_device_wireless_radio_settings_request_two_four_ghz_settings_instance.to_dict()
# create an instance of UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings from a dict
update_device_wireless_radio_settings_request_two_four_ghz_settings_from_dict = UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings.from_dict(update_device_wireless_radio_settings_request_two_four_ghz_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


