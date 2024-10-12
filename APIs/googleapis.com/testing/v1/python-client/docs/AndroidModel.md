# AndroidModel

A description of an Android device tests may be run on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | The company that this device is branded with. Example: \&quot;Google\&quot;, \&quot;Samsung\&quot;. | [optional] 
**codename** | **str** | The name of the industrial design. This corresponds to android.os.Build.DEVICE. | [optional] 
**form** | **str** | Whether this device is virtual or physical. | [optional] 
**form_factor** | **str** | Whether this device is a phone, tablet, wearable, etc. | [optional] 
**id** | **str** | The unique opaque id for this model. Use this for invoking the TestExecutionService. | [optional] 
**low_fps_video_recording** | **bool** | True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config. | [optional] 
**manufacturer** | **str** | The manufacturer of this device. | [optional] 
**name** | **str** | The human-readable marketing name for this device model. Examples: \&quot;Nexus 5\&quot;, \&quot;Galaxy S5\&quot;. | [optional] 
**per_version_info** | [**List[PerAndroidVersionInfo]**](PerAndroidVersionInfo.md) | Version-specific information of an Android model. | [optional] 
**screen_density** | **int** | Screen density in DPI. This corresponds to ro.sf.lcd_density | [optional] 
**screen_x** | **int** | Screen size in the horizontal (X) dimension measured in pixels. | [optional] 
**screen_y** | **int** | Screen size in the vertical (Y) dimension measured in pixels. | [optional] 
**supported_abis** | **List[str]** | The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by \&quot;version_id:\&quot; (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version. | [optional] 
**supported_version_ids** | **List[str]** | The set of Android versions this device supports. | [optional] 
**tags** | **List[str]** | Tags for this dimension. Examples: \&quot;default\&quot;, \&quot;preview\&quot;, \&quot;deprecated\&quot;. | [optional] 
**thumbnail_url** | **str** | URL of a thumbnail image (photo) of the device. | [optional] 

## Example

```python
from openapi_client.models.android_model import AndroidModel

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidModel from a JSON string
android_model_instance = AndroidModel.from_json(json)
# print the JSON string representation of the object
print(AndroidModel.to_json())

# convert the object into a dict
android_model_dict = android_model_instance.to_dict()
# create an instance of AndroidModel from a dict
android_model_from_dict = AndroidModel.from_dict(android_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


