# OsDiskImage

OS disk image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operating_system** | [**OperatingSystem**](OperatingSystem.md) |  | [optional] 
**source_blob_sas_uri** | **str** | SAS key for source blob. | [optional] [readonly] 

## Example

```python
from openapi_client.models.os_disk_image import OsDiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of OsDiskImage from a JSON string
os_disk_image_instance = OsDiskImage.from_json(json)
# print the JSON string representation of the object
print(OsDiskImage.to_json())

# convert the object into a dict
os_disk_image_dict = os_disk_image_instance.to_dict()
# create an instance of OsDiskImage from a dict
os_disk_image_from_dict = OsDiskImage.from_dict(os_disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


