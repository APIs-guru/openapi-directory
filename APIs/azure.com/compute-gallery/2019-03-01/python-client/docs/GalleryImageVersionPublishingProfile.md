# GalleryImageVersionPublishingProfile

The publishing profile of a gallery Image Version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**GalleryArtifactSource**](GalleryArtifactSource.md) |  | 
**end_of_life_date** | **datetime** | The end of life date of the gallery Image Version. This property can be used for decommissioning purposes. This property is updatable. | [optional] 
**exclude_from_latest** | **bool** | If set to true, Virtual Machines deployed from the latest version of the Image Definition won&#39;t use this Image Version. | [optional] 
**published_date** | **datetime** | The timestamp for when the gallery Image Version is published. | [optional] [readonly] 
**replica_count** | **int** | The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. | [optional] 
**storage_account_type** | **str** | Specifies the storage account type to be used to store the image. This property is not updatable. | [optional] 
**target_regions** | [**List[TargetRegion]**](TargetRegion.md) | The target regions where the Image Version is going to be replicated to. This property is updatable. | [optional] 

## Example

```python
from openapi_client.models.gallery_image_version_publishing_profile import GalleryImageVersionPublishingProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageVersionPublishingProfile from a JSON string
gallery_image_version_publishing_profile_instance = GalleryImageVersionPublishingProfile.from_json(json)
# print the JSON string representation of the object
print(GalleryImageVersionPublishingProfile.to_json())

# convert the object into a dict
gallery_image_version_publishing_profile_dict = gallery_image_version_publishing_profile_instance.to_dict()
# create an instance of GalleryImageVersionPublishingProfile from a dict
gallery_image_version_publishing_profile_from_dict = GalleryImageVersionPublishingProfile.from_dict(gallery_image_version_publishing_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


