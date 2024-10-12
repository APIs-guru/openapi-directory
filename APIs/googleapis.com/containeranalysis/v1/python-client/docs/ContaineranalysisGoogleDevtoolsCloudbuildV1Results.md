# ContaineranalysisGoogleDevtoolsCloudbuildV1Results

Artifacts created by the build pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_manifest** | **str** | Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. | [optional] 
**artifact_timing** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan**](ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.md) |  | [optional] 
**build_step_images** | **List[str]** | List of build step digests, in the order corresponding to build step indices. | [optional] 
**build_step_outputs** | **List[bytearray]** | List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to &#x60;$BUILDER_OUTPUT/output&#x60;. Only the first 50KB of data is stored. | [optional] 
**images** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage]**](ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage.md) | Container images that were built as a part of the build. | [optional] 
**maven_artifacts** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact]**](ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact.md) | Maven artifacts uploaded to Artifact Registry at the end of the build. | [optional] 
**npm_packages** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage]**](ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage.md) | Npm packages uploaded to Artifact Registry at the end of the build. | [optional] 
**num_artifacts** | **str** | Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. | [optional] 
**python_packages** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage]**](ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage.md) | Python artifacts uploaded to Artifact Registry at the end of the build. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_results import ContaineranalysisGoogleDevtoolsCloudbuildV1Results

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Results from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_results_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Results.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Results.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_results_dict = containeranalysis_google_devtools_cloudbuild_v1_results_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Results from a dict
containeranalysis_google_devtools_cloudbuild_v1_results_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Results.from_dict(containeranalysis_google_devtools_cloudbuild_v1_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


