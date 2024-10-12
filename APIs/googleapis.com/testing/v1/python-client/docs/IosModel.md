# IosModel

A description of an iOS device tests may be run on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_capabilities** | **List[str]** | Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html | [optional] 
**form_factor** | **str** | Whether this device is a phone, tablet, wearable, etc. | [optional] 
**id** | **str** | The unique opaque id for this model. Use this for invoking the TestExecutionService. | [optional] 
**name** | **str** | The human-readable name for this device model. Examples: \&quot;iPhone 4s\&quot;, \&quot;iPad Mini 2\&quot;. | [optional] 
**per_version_info** | [**List[PerIosVersionInfo]**](PerIosVersionInfo.md) | Version-specific information of an iOS model. | [optional] 
**screen_density** | **int** | Screen density in DPI. | [optional] 
**screen_x** | **int** | Screen size in the horizontal (X) dimension measured in pixels. | [optional] 
**screen_y** | **int** | Screen size in the vertical (Y) dimension measured in pixels. | [optional] 
**supported_version_ids** | **List[str]** | The set of iOS major software versions this device supports. | [optional] 
**tags** | **List[str]** | Tags for this dimension. Examples: \&quot;default\&quot;, \&quot;preview\&quot;, \&quot;deprecated\&quot;. | [optional] 

## Example

```python
from openapi_client.models.ios_model import IosModel

# TODO update the JSON string below
json = "{}"
# create an instance of IosModel from a JSON string
ios_model_instance = IosModel.from_json(json)
# print the JSON string representation of the object
print(IosModel.to_json())

# convert the object into a dict
ios_model_dict = ios_model_instance.to_dict()
# create an instance of IosModel from a dict
ios_model_from_dict = IosModel.from_dict(ios_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


