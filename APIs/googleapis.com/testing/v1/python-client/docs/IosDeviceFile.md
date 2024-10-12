# IosDeviceFile

A file or directory to install on the device before the test starts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | The bundle id of the app where this file lives. iOS apps sandbox their own filesystem, so app files must specify which app installed on the device. | [optional] 
**content** | [**FileReference**](FileReference.md) |  | [optional] 
**device_path** | **str** | Location of the file on the device, inside the app&#39;s sandboxed filesystem | [optional] 

## Example

```python
from openapi_client.models.ios_device_file import IosDeviceFile

# TODO update the JSON string below
json = "{}"
# create an instance of IosDeviceFile from a JSON string
ios_device_file_instance = IosDeviceFile.from_json(json)
# print the JSON string representation of the object
print(IosDeviceFile.to_json())

# convert the object into a dict
ios_device_file_dict = ios_device_file_instance.to_dict()
# create an instance of IosDeviceFile from a dict
ios_device_file_from_dict = IosDeviceFile.from_dict(ios_device_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


