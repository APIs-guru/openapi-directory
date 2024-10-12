# GoogleCloudAiplatformV1ModelDeploymentMonitoringJob

Represents a job that runs periodically to monitor the deployed models in an endpoint. It will analyze the logged training & prediction data to detect any abnormal behaviors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_instance_schema_uri** | **str** | YAML schema file uri describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze. If this field is empty, all the feature data types are inferred from predict_instance_schema_uri, meaning that TFDV will use the data in the exact format(data type) as prediction request/response. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string. | [optional] 
**bigquery_tables** | [**List[GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable]**](GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable.md) | Output only. The created bigquery tables for the job under customer project. Customer could do their own query &amp; analysis. There could be 4 log tables in maximum: 1. Training data logging predict request/response 2. Serving data logging predict request/response | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp when this ModelDeploymentMonitoringJob was created. | [optional] [readonly] 
**display_name** | **str** | Required. The user-defined name of the ModelDeploymentMonitoringJob. The name can be up to 128 characters long and can consist of any UTF-8 characters. Display name of a ModelDeploymentMonitoringJob. | [optional] 
**enable_monitoring_pipeline_logs** | **bool** | If true, the scheduled monitoring pipeline logs are sent to Google Cloud Logging, including pipeline status and anomalies detected. Please note the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging#pricing). | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**endpoint** | **str** | Required. Endpoint resource name. Format: &#x60;projects/{project}/locations/{location}/endpoints/{endpoint}&#x60; | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your ModelDeploymentMonitoringJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**latest_monitoring_pipeline_metadata** | [**GoogleCloudAiplatformV1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata**](GoogleCloudAiplatformV1ModelDeploymentMonitoringJobLatestMonitoringPipelineMetadata.md) |  | [optional] 
**log_ttl** | **str** | The TTL of BigQuery tables in user projects which stores logs. A day is the basic unit of the TTL and we take the ceil of TTL/86400(a day). e.g. { second: 3600} indicates ttl &#x3D; 1 day. | [optional] 
**logging_sampling_strategy** | [**GoogleCloudAiplatformV1SamplingStrategy**](GoogleCloudAiplatformV1SamplingStrategy.md) |  | [optional] 
**model_deployment_monitoring_objective_configs** | [**List[GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig]**](GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig.md) | Required. The config for monitoring objectives. This is a per DeployedModel config. Each DeployedModel needs to be configured separately. | [optional] 
**model_deployment_monitoring_schedule_config** | [**GoogleCloudAiplatformV1ModelDeploymentMonitoringScheduleConfig**](GoogleCloudAiplatformV1ModelDeploymentMonitoringScheduleConfig.md) |  | [optional] 
**model_monitoring_alert_config** | [**GoogleCloudAiplatformV1ModelMonitoringAlertConfig**](GoogleCloudAiplatformV1ModelMonitoringAlertConfig.md) |  | [optional] 
**name** | **str** | Output only. Resource name of a ModelDeploymentMonitoringJob. | [optional] [readonly] 
**next_schedule_time** | **str** | Output only. Timestamp when this monitoring pipeline will be scheduled to run for the next round. | [optional] [readonly] 
**predict_instance_schema_uri** | **str** | YAML schema file uri describing the format of a single instance, which are given to format this Endpoint&#39;s prediction (and explanation). If not set, we will generate predict schema from collected predict requests. | [optional] 
**sample_predict_instance** | **object** | Sample Predict instance, same format as PredictRequest.instances, this can be set as a replacement of ModelDeploymentMonitoringJob.predict_instance_schema_uri. If not set, we will generate predict schema from collected predict requests. | [optional] 
**schedule_state** | **str** | Output only. Schedule state when the monitoring job is in Running state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the monitoring job. When the job is still creating, the state will be &#39;PENDING&#39;. Once the job is successfully created, the state will be &#39;RUNNING&#39;. Pause the job, the state will be &#39;PAUSED&#39;. Resume the job, the state will return to &#39;RUNNING&#39;. | [optional] [readonly] 
**stats_anomalies_base_directory** | [**GoogleCloudAiplatformV1GcsDestination**](GoogleCloudAiplatformV1GcsDestination.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this ModelDeploymentMonitoringJob was updated most recently. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_deployment_monitoring_job import GoogleCloudAiplatformV1ModelDeploymentMonitoringJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringJob from a JSON string
google_cloud_aiplatform_v1_model_deployment_monitoring_job_instance = GoogleCloudAiplatformV1ModelDeploymentMonitoringJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelDeploymentMonitoringJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_job_dict = google_cloud_aiplatform_v1_model_deployment_monitoring_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringJob from a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_job_from_dict = GoogleCloudAiplatformV1ModelDeploymentMonitoringJob.from_dict(google_cloud_aiplatform_v1_model_deployment_monitoring_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


