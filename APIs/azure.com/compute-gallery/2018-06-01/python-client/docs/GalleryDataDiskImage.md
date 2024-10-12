# GalleryDataDiskImage

This is the data disk image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **int** | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | [optional] [readonly] 
**host_caching** | **str** | The host caching of the disk. Valid values are &#39;None&#39;, &#39;ReadOnly&#39;, and &#39;ReadWrite&#39; | [optional] [readonly] 
**size_in_gb** | **int** | This property indicates the size of the VHD to be created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_data_disk_image import GalleryDataDiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryDataDiskImage from a JSON string
gallery_data_disk_image_instance = GalleryDataDiskImage.from_json(json)
# print the JSON string representation of the object
print(GalleryDataDiskImage.to_json())

# convert the object into a dict
gallery_data_disk_image_dict = gallery_data_disk_image_instance.to_dict()
# create an instance of GalleryDataDiskImage from a dict
gallery_data_disk_image_from_dict = GalleryDataDiskImage.from_dict(gallery_data_disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


