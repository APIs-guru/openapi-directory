# GalleryImageVersionStorageProfile

This is the storage profile of a Gallery Image Version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk_images** | [**List[GalleryDataDiskImage]**](GalleryDataDiskImage.md) | A list of data disk images. | [optional] 
**os_disk_image** | [**GalleryOSDiskImage**](GalleryOSDiskImage.md) |  | [optional] 
**source** | [**GalleryArtifactVersionSource**](GalleryArtifactVersionSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.gallery_image_version_storage_profile import GalleryImageVersionStorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageVersionStorageProfile from a JSON string
gallery_image_version_storage_profile_instance = GalleryImageVersionStorageProfile.from_json(json)
# print the JSON string representation of the object
print(GalleryImageVersionStorageProfile.to_json())

# convert the object into a dict
gallery_image_version_storage_profile_dict = gallery_image_version_storage_profile_instance.to_dict()
# create an instance of GalleryImageVersionStorageProfile from a dict
gallery_image_version_storage_profile_from_dict = GalleryImageVersionStorageProfile.from_dict(gallery_image_version_storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


