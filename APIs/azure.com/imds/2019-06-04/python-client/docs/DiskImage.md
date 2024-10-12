# DiskImage

This is the source user image virtual hard disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | This is the uri of the virtual hard disk. | [optional] 

## Example

```python
from openapi_client.models.disk_image import DiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of DiskImage from a JSON string
disk_image_instance = DiskImage.from_json(json)
# print the JSON string representation of the object
print(DiskImage.to_json())

# convert the object into a dict
disk_image_dict = disk_image_instance.to_dict()
# create an instance of DiskImage from a dict
disk_image_from_dict = DiskImage.from_dict(disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


