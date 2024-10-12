# RegularFile

A file or directory to install on the device before the test starts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**FileReference**](FileReference.md) |  | [optional] 
**device_path** | **str** | Required. Where to put the content on the device. Must be an absolute, allowlisted path. If the file exists, it will be replaced. The following device-side directories and any of their subdirectories are allowlisted: ${EXTERNAL_STORAGE}, /sdcard, or /storage ${ANDROID_DATA}/local/tmp, or /data/local/tmp Specifying a path outside of these directory trees is invalid. The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device and copy the file there. It is strongly advised to use the Environment API in app and test code to access files on the device in a portable way. | [optional] 

## Example

```python
from openapi_client.models.regular_file import RegularFile

# TODO update the JSON string below
json = "{}"
# create an instance of RegularFile from a JSON string
regular_file_instance = RegularFile.from_json(json)
# print the JSON string representation of the object
print(RegularFile.to_json())

# convert the object into a dict
regular_file_dict = regular_file_instance.to_dict()
# create an instance of RegularFile from a dict
regular_file_from_dict = RegularFile.from_dict(regular_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


