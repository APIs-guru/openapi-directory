# OSDiskImage

Contains the os disk image information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operating_system** | **str** | The operating system of the osDiskImage. | 

## Example

```python
from openapi_client.models.os_disk_image import OSDiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of OSDiskImage from a JSON string
os_disk_image_instance = OSDiskImage.from_json(json)
# print the JSON string representation of the object
print(OSDiskImage.to_json())

# convert the object into a dict
os_disk_image_dict = os_disk_image_instance.to_dict()
# create an instance of OSDiskImage from a dict
os_disk_image_from_dict = OSDiskImage.from_dict(os_disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


