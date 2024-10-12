# GoogleCloudAiplatformV1PipelineJobRuntimeConfig

The runtime config of a PipelineJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_policy** | **str** | Represents the failure policy of a pipeline. Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as PIPELINE_FAILURE_POLICY_FAIL_SLOW. However, if a pipeline is set to PIPELINE_FAILURE_POLICY_FAIL_FAST, it will stop scheduling any new tasks when a task has failed. Any scheduled tasks will continue to completion. | [optional] 
**gcs_output_directory** | **str** | Required. A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-path pattern &#x60;{job_id}/{task_id}/{output_key}&#x60; under the specified output directory. The service account specified in this pipeline must have the &#x60;storage.objects.get&#x60; and &#x60;storage.objects.create&#x60; permissions for this bucket. | [optional] 
**input_artifacts** | [**Dict[str, GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact]**](GoogleCloudAiplatformV1PipelineJobRuntimeConfigInputArtifact.md) | The runtime artifacts of the PipelineJob. The key will be the input artifact name and the value would be one of the InputArtifact. | [optional] 
**parameter_values** | **Dict[str, object]** | The runtime parameters of the PipelineJob. The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using &#x60;PipelineJob.pipeline_spec.schema_version&#x60; 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL. | [optional] 
**parameters** | [**Dict[str, GoogleCloudAiplatformV1Value]**](GoogleCloudAiplatformV1Value.md) | Deprecated. Use RuntimeConfig.parameter_values instead. The runtime parameters of the PipelineJob. The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using &#x60;PipelineJob.pipeline_spec.schema_version&#x60; 2.0.0 or lower, such as pipelines built using Kubeflow Pipelines SDK 1.8 or lower. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_pipeline_job_runtime_config import GoogleCloudAiplatformV1PipelineJobRuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PipelineJobRuntimeConfig from a JSON string
google_cloud_aiplatform_v1_pipeline_job_runtime_config_instance = GoogleCloudAiplatformV1PipelineJobRuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PipelineJobRuntimeConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_pipeline_job_runtime_config_dict = google_cloud_aiplatform_v1_pipeline_job_runtime_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PipelineJobRuntimeConfig from a dict
google_cloud_aiplatform_v1_pipeline_job_runtime_config_from_dict = GoogleCloudAiplatformV1PipelineJobRuntimeConfig.from_dict(google_cloud_aiplatform_v1_pipeline_job_runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


