# DeviceFile

A single device file description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obb_file** | [**ObbFile**](ObbFile.md) |  | [optional] 
**regular_file** | [**RegularFile**](RegularFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_file import DeviceFile

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFile from a JSON string
device_file_instance = DeviceFile.from_json(json)
# print the JSON string representation of the object
print(DeviceFile.to_json())

# convert the object into a dict
device_file_dict = device_file_instance.to_dict()
# create an instance of DeviceFile from a dict
device_file_from_dict = DeviceFile.from_dict(device_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


