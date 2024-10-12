# UploadedMavenArtifact

A Maven artifact uploaded using the MavenArtifact directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**FileHashes**](FileHashes.md) |  | [optional] 
**push_timing** | [**TimeSpan**](TimeSpan.md) |  | [optional] 
**uri** | **str** | URI of the uploaded artifact. | [optional] 

## Example

```python
from openapi_client.models.uploaded_maven_artifact import UploadedMavenArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of UploadedMavenArtifact from a JSON string
uploaded_maven_artifact_instance = UploadedMavenArtifact.from_json(json)
# print the JSON string representation of the object
print(UploadedMavenArtifact.to_json())

# convert the object into a dict
uploaded_maven_artifact_dict = uploaded_maven_artifact_instance.to_dict()
# create an instance of UploadedMavenArtifact from a dict
uploaded_maven_artifact_from_dict = UploadedMavenArtifact.from_dict(uploaded_maven_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


