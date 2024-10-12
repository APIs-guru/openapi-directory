# GalleryArtifactVersionSource

The gallery artifact version source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, or user image. | 

## Example

```python
from openapi_client.models.gallery_artifact_version_source import GalleryArtifactVersionSource

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryArtifactVersionSource from a JSON string
gallery_artifact_version_source_instance = GalleryArtifactVersionSource.from_json(json)
# print the JSON string representation of the object
print(GalleryArtifactVersionSource.to_json())

# convert the object into a dict
gallery_artifact_version_source_dict = gallery_artifact_version_source_instance.to_dict()
# create an instance of GalleryArtifactVersionSource from a dict
gallery_artifact_version_source_from_dict = GalleryArtifactVersionSource.from_dict(gallery_artifact_version_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


