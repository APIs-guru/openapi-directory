# GalleryDiskImage

This is the disk image base class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_caching** | **str** | The host caching of the disk. Valid values are &#39;None&#39;, &#39;ReadOnly&#39;, and &#39;ReadWrite&#39; | [optional] [readonly] 
**size_in_gb** | **int** | This property indicates the size of the VHD to be created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_disk_image import GalleryDiskImage

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryDiskImage from a JSON string
gallery_disk_image_instance = GalleryDiskImage.from_json(json)
# print the JSON string representation of the object
print(GalleryDiskImage.to_json())

# convert the object into a dict
gallery_disk_image_dict = gallery_disk_image_instance.to_dict()
# create an instance of GalleryDiskImage from a dict
gallery_disk_image_from_dict = GalleryDiskImage.from_dict(gallery_disk_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


