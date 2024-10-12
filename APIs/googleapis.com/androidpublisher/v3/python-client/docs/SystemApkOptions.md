# SystemApkOptions

Options for system APKs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rotated** | **bool** | Whether to use the rotated key for signing the system APK. | [optional] 
**uncompressed_dex_files** | **bool** | Whether system APK was generated with uncompressed dex files. | [optional] 
**uncompressed_native_libraries** | **bool** | Whether system APK was generated with uncompressed native libraries. | [optional] 

## Example

```python
from openapi_client.models.system_apk_options import SystemApkOptions

# TODO update the JSON string below
json = "{}"
# create an instance of SystemApkOptions from a JSON string
system_apk_options_instance = SystemApkOptions.from_json(json)
# print the JSON string representation of the object
print(SystemApkOptions.to_json())

# convert the object into a dict
system_apk_options_dict = system_apk_options_instance.to_dict()
# create an instance of SystemApkOptions from a dict
system_apk_options_from_dict = SystemApkOptions.from_dict(system_apk_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


