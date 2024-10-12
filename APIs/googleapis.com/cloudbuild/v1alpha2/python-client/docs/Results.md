# Results

Artifacts created by the build pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_manifest** | **str** | Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. | [optional] 
**artifact_timing** | [**TimeSpan**](TimeSpan.md) |  | [optional] 
**build_step_images** | **List[str]** | List of build step digests, in the order corresponding to build step indices. | [optional] 
**build_step_outputs** | **List[bytearray]** | List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to &#x60;$BUILDER_OUTPUT/output&#x60;. Only the first 4KB of data is stored. | [optional] 
**images** | [**List[BuiltImage]**](BuiltImage.md) | Container images that were built as a part of the build. | [optional] 
**maven_artifacts** | [**List[UploadedMavenArtifact]**](UploadedMavenArtifact.md) | Maven artifacts uploaded to Artifact Registry at the end of the build. | [optional] 
**num_artifacts** | **str** | Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. | [optional] 
**python_packages** | [**List[UploadedPythonPackage]**](UploadedPythonPackage.md) | Python artifacts uploaded to Artifact Registry at the end of the build. | [optional] 

## Example

```python
from openapi_client.models.results import Results

# TODO update the JSON string below
json = "{}"
# create an instance of Results from a JSON string
results_instance = Results.from_json(json)
# print the JSON string representation of the object
print(Results.to_json())

# convert the object into a dict
results_dict = results_instance.to_dict()
# create an instance of Results from a dict
results_from_dict = Results.from_dict(results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


