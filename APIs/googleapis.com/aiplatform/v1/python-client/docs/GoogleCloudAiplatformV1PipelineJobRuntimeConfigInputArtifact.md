# GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact

The type of an input artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Artifact resource id from MLMD. Which is the last portion of an artifact resource name: &#x60;projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}&#x60;. The artifact must stay within the same project, location and default metadatastore as the pipeline. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact import GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact from a JSON string
google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact_instance = GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact_dict = google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact from a dict
google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact_from_dict = GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact.from_dict(google_cloud_aiplatform_v1_pipeline_job_runtime_config_input_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


