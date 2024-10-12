# GalleryArtifactPublishingProfileBase

Describes the basic gallery artifact publishing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**GalleryArtifactSource**](GalleryArtifactSource.md) |  | 
**target_regions** | [**List[TargetRegion]**](TargetRegion.md) | The target regions where the Image Version is going to be replicated to. This property is updatable. | [optional] 

## Example

```python
from openapi_client.models.gallery_artifact_publishing_profile_base import GalleryArtifactPublishingProfileBase

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryArtifactPublishingProfileBase from a JSON string
gallery_artifact_publishing_profile_base_instance = GalleryArtifactPublishingProfileBase.from_json(json)
# print the JSON string representation of the object
print(GalleryArtifactPublishingProfileBase.to_json())

# convert the object into a dict
gallery_artifact_publishing_profile_base_dict = gallery_artifact_publishing_profile_base_instance.to_dict()
# create an instance of GalleryArtifactPublishingProfileBase from a dict
gallery_artifact_publishing_profile_base_from_dict = GalleryArtifactPublishingProfileBase.from_dict(gallery_artifact_publishing_profile_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


