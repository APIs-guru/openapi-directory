# Device

A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_id** | **str** | The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, \&quot;123456789abcdef0\&quot;. | [optional] 
**device** | **str** | The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named \&quot;device\&quot; per logs/wireless/android/android_checkin.proto) | [optional] 
**latest_build_fingerprint** | **str** | The build fingerprint of the device if known. | [optional] 
**maker** | **str** | The manufacturer of the device. This comes from android.os.Build.MANUFACTURER. | [optional] 
**management_type** | **str** | Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - \&quot;managedDevice\&quot;, a device that has the EMM&#39;s device policy controller (DPC) as the device owner. - \&quot;managedProfile\&quot;, a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - \&quot;containerApp\&quot;, no longer used (deprecated). - \&quot;unmanagedProfile\&quot;, a device that has been allowed (by the domain&#39;s admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.  | [optional] 
**model** | **str** | The model name of the device. This comes from android.os.Build.MODEL. | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 
**product** | **str** | The product name of the device. This comes from android.os.Build.PRODUCT. | [optional] 
**report** | [**DeviceReport**](DeviceReport.md) |  | [optional] 
**retail_brand** | **str** | Retail brand for the device, if set. See android.os.Build.BRAND | [optional] 
**sdk_version** | **int** | API compatibility version. | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


