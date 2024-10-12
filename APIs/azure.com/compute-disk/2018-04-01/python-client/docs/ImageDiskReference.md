# ImageDiskReference

The source image used for creating the disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A relative uri containing either a Platform Image Repository or user image reference. | 
**lun** | **int** | If the disk is created from an image&#39;s data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. | [optional] 

## Example

```python
from openapi_client.models.image_disk_reference import ImageDiskReference

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDiskReference from a JSON string
image_disk_reference_instance = ImageDiskReference.from_json(json)
# print the JSON string representation of the object
print(ImageDiskReference.to_json())

# convert the object into a dict
image_disk_reference_dict = image_disk_reference_instance.to_dict()
# create an instance of ImageDiskReference from a dict
image_disk_reference_from_dict = ImageDiskReference.from_dict(image_disk_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


