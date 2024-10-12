# DeviceSpec

The device spec used to generate a system APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**screen_density** | **int** | Screen dpi. | [optional] 
**supported_abis** | **List[str]** | Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. \&quot;armeabi-v7a\&quot;, \&quot;x86_64\&quot;. | [optional] 
**supported_locales** | **List[str]** | All installed locales represented as BCP-47 strings, e.g. \&quot;en-US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.device_spec import DeviceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSpec from a JSON string
device_spec_instance = DeviceSpec.from_json(json)
# print the JSON string representation of the object
print(DeviceSpec.to_json())

# convert the object into a dict
device_spec_dict = device_spec_instance.to_dict()
# create an instance of DeviceSpec from a dict
device_spec_from_dict = DeviceSpec.from_dict(device_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


