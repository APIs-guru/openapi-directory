# GalleryArtifactSource

The source image from which the Image Version is going to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_image** | [**ManagedArtifact**](ManagedArtifact.md) |  | 

## Example

```python
from openapi_client.models.gallery_artifact_source import GalleryArtifactSource

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryArtifactSource from a JSON string
gallery_artifact_source_instance = GalleryArtifactSource.from_json(json)
# print the JSON string representation of the object
print(GalleryArtifactSource.to_json())

# convert the object into a dict
gallery_artifact_source_dict = gallery_artifact_source_instance.to_dict()
# create an instance of GalleryArtifactSource from a dict
gallery_artifact_source_from_dict = GalleryArtifactSource.from_dict(gallery_artifact_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


