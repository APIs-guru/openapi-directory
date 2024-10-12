# GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig

The objective configuration for model monitoring, including the information needed to detect anomalies for one particular model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation_config** | [**GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig.md) |  | [optional] 
**prediction_drift_detection_config** | [**GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig.md) |  | [optional] 
**training_dataset** | [**GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingDataset**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingDataset.md) |  | [optional] 
**training_prediction_skew_detection_config** | [**GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_objective_config import GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_instance = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_dict = google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfig.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


