# ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact

A Maven artifact uploaded using the MavenArtifact directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes**](ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.md) |  | [optional] 
**push_timing** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan**](ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.md) |  | [optional] 
**uri** | **str** | URI of the uploaded artifact. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact import ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact_dict = containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact from a dict
containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact.from_dict(containeranalysis_google_devtools_cloudbuild_v1_uploaded_maven_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


