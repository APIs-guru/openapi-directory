# DeviceSettings

Information about security related device settings on device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adb_enabled** | **bool** | Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. | [optional] 
**development_settings_enabled** | **bool** | Whether developer mode is enabled on the device. | [optional] 
**encryption_status** | **str** | Encryption status from DevicePolicyManager. | [optional] 
**is_device_secure** | **bool** | Whether the device is secured with PIN/password. | [optional] 
**is_encrypted** | **bool** | Whether the storage encryption is enabled. | [optional] 
**unknown_sources_enabled** | **bool** | Whether installing apps from unknown sources is enabled. | [optional] 
**verify_apps_enabled** | **bool** | Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device. | [optional] 

## Example

```python
from openapi_client.models.device_settings import DeviceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSettings from a JSON string
device_settings_instance = DeviceSettings.from_json(json)
# print the JSON string representation of the object
print(DeviceSettings.to_json())

# convert the object into a dict
device_settings_dict = device_settings_instance.to_dict()
# create an instance of DeviceSettings from a dict
device_settings_from_dict = DeviceSettings.from_dict(device_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


