# GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata

All metadata of most recent monitoring pipelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_time** | **str** | The time that most recent monitoring pipelines that is related to this run. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata import GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata from a JSON string
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata_instance = GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata_dict = google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata from a dict
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata_from_dict = GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata.from_dict(google_cloud_aiplatform_v1beta1_model_deployment_monitoring_job_latest_monitoring_pipeline_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


