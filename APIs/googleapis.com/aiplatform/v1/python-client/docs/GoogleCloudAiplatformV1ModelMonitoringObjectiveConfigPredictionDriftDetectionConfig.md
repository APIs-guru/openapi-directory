# GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig

The config for Prediction data drift detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_score_drift_thresholds** | [**Dict[str, GoogleCloudAiplatformV1ThresholdConfig]**](GoogleCloudAiplatformV1ThresholdConfig.md) | Key is the feature name and value is the threshold. The threshold here is against attribution score distance between different time windows. | [optional] 
**default_drift_threshold** | [**GoogleCloudAiplatformV1ThresholdConfig**](GoogleCloudAiplatformV1ThresholdConfig.md) |  | [optional] 
**drift_thresholds** | [**Dict[str, GoogleCloudAiplatformV1ThresholdConfig]**](GoogleCloudAiplatformV1ThresholdConfig.md) | Key is the feature name and value is the threshold. If a feature needs to be monitored for drift, a value threshold must be configured for that feature. The threshold here is against feature distribution distance between different time windws. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config import GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig from a JSON string
google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config_instance = GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config_dict = google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig from a dict
google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config_from_dict = GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigPredictionDriftDetectionConfig.from_dict(google_cloud_aiplatform_v1_model_monitoring_objective_config_prediction_drift_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


