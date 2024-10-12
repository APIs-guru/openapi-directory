# GoogleCloudAiplatformV1beta1ModelMonitoringConfig

The model monitoring configuration used for Batch Prediction Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_config** | [**GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfig**](GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfig.md) |  | [optional] 
**analysis_instance_schema_uri** | **str** | YAML schema file uri in Cloud Storage describing the format of a single instance that you want Tensorflow Data Validation (TFDV) to analyze. If there are any data type differences between predict instance and TFDV instance, this field can be used to override the schema. For models trained with Vertex AI, this field must be set as all the fields in predict instance formatted as string. | [optional] 
**objective_configs** | [**List[GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig]**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig.md) | Model monitoring objective config. | [optional] 
**stats_anomalies_base_directory** | [**GoogleCloudAiplatformV1beta1GcsDestination**](GoogleCloudAiplatformV1beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_config import GoogleCloudAiplatformV1beta1ModelMonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_config_instance = GoogleCloudAiplatformV1beta1ModelMonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_config_dict = google_cloud_aiplatform_v1beta1_model_monitoring_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringConfig from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_config_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringConfig.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


