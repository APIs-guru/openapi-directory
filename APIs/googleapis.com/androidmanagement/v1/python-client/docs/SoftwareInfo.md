# SoftwareInfo

Information about device software.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_build_number** | **str** | Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. | [optional] 
**android_build_time** | **str** | Build time. | [optional] 
**android_device_policy_version_code** | **int** | The Android Device Policy app version code. | [optional] 
**android_device_policy_version_name** | **str** | The Android Device Policy app version as displayed to the user. | [optional] 
**android_version** | **str** | The user-visible Android version string. For example, 6.0.1. | [optional] 
**bootloader_version** | **str** | The system bootloader version number, e.g. 0.6.7. | [optional] 
**device_build_signature** | **str** | SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn&#39;t been modified. | [optional] 
**device_kernel_version** | **str** | Kernel version, for example, 2.6.32.9-g103d848. | [optional] 
**primary_language_code** | **str** | An IETF BCP 47 language code for the primary locale on the device. | [optional] 
**security_patch_level** | **str** | Security patch level, e.g. 2016-05-01. | [optional] 
**system_update_info** | [**SystemUpdateInfo**](SystemUpdateInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_info import SoftwareInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareInfo from a JSON string
software_info_instance = SoftwareInfo.from_json(json)
# print the JSON string representation of the object
print(SoftwareInfo.to_json())

# convert the object into a dict
software_info_dict = software_info_instance.to_dict()
# create an instance of SoftwareInfo from a dict
software_info_from_dict = SoftwareInfo.from_dict(software_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


