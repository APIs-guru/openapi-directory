# UpdateDeviceWirelessRadioSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**five_ghz_settings** | [**UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings**](UpdateDeviceWirelessRadioSettingsRequestFiveGhzSettings.md) |  | [optional] 
**rf_profile_id** | **str** | The ID of an RF profile to assign to the device. If the value of this parameter is null, the appropriate basic RF profile (indoor or outdoor) will be assigned to the device. Assigning an RF profile will clear ALL manually configured overrides on the device (channel width, channel, power). | [optional] 
**two_four_ghz_settings** | [**UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings**](UpdateDeviceWirelessRadioSettingsRequestTwoFourGhzSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_wireless_radio_settings_request import UpdateDeviceWirelessRadioSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceWirelessRadioSettingsRequest from a JSON string
update_device_wireless_radio_settings_request_instance = UpdateDeviceWirelessRadioSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceWirelessRadioSettingsRequest.to_json())

# convert the object into a dict
update_device_wireless_radio_settings_request_dict = update_device_wireless_radio_settings_request_instance.to_dict()
# create an instance of UpdateDeviceWirelessRadioSettingsRequest from a dict
update_device_wireless_radio_settings_request_from_dict = UpdateDeviceWirelessRadioSettingsRequest.from_dict(update_device_wireless_radio_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


