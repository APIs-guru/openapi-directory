# ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects

Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Cloud Storage bucket and optional object path, in the form \&quot;gs://bucket/path/to/somewhere/\&quot;. (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. | [optional] 
**paths** | **List[str]** | Path globs used to match files in the build&#39;s workspace. | [optional] 
**timing** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan**](ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.md) |  | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects import ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects_dict = containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects from a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects.from_dict(containeranalysis_google_devtools_cloudbuild_v1_artifacts_artifact_objects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


