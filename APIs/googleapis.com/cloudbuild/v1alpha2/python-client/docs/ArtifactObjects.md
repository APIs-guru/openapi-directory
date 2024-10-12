# ArtifactObjects

Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Cloud Storage bucket and optional object path, in the form \&quot;gs://bucket/path/to/somewhere/\&quot;. (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. | [optional] 
**paths** | **List[str]** | Path globs used to match files in the build&#39;s workspace. | [optional] 
**timing** | [**TimeSpan**](TimeSpan.md) |  | [optional] 

## Example

```python
from openapi_client.models.artifact_objects import ArtifactObjects

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactObjects from a JSON string
artifact_objects_instance = ArtifactObjects.from_json(json)
# print the JSON string representation of the object
print(ArtifactObjects.to_json())

# convert the object into a dict
artifact_objects_dict = artifact_objects_instance.to_dict()
# create an instance of ArtifactObjects from a dict
artifact_objects_from_dict = ArtifactObjects.from_dict(artifact_objects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


