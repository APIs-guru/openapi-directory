# DiskImageDefaults

Contains details about the image source used to create the disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_image** | **str** | Required. The Image resource used when creating the disk. | [optional] 

## Example

```python
from openapi_client.models.disk_image_defaults import DiskImageDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of DiskImageDefaults from a JSON string
disk_image_defaults_instance = DiskImageDefaults.from_json(json)
# print the JSON string representation of the object
print(DiskImageDefaults.to_json())

# convert the object into a dict
disk_image_defaults_dict = disk_image_defaults_instance.to_dict()
# create an instance of DiskImageDefaults from a dict
disk_image_defaults_from_dict = DiskImageDefaults.from_dict(disk_image_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


