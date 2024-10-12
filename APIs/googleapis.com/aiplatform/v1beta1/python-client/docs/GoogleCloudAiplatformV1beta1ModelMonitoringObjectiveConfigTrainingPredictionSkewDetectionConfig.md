# GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig

The config for Training & Prediction data skew detection. It specifies the training dataset sources and the skew detection parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_score_skew_thresholds** | [**Dict[str, GoogleCloudAiplatformV1beta1ThresholdConfig]**](GoogleCloudAiplatformV1beta1ThresholdConfig.md) | Key is the feature name and value is the threshold. The threshold here is against attribution score distance between the training and prediction feature. | [optional] 
**default_skew_threshold** | [**GoogleCloudAiplatformV1beta1ThresholdConfig**](GoogleCloudAiplatformV1beta1ThresholdConfig.md) |  | [optional] 
**skew_thresholds** | [**Dict[str, GoogleCloudAiplatformV1beta1ThresholdConfig]**](GoogleCloudAiplatformV1beta1ThresholdConfig.md) | Key is the feature name and value is the threshold. If a feature needs to be monitored for skew, a value threshold must be configured for that feature. The threshold here is against feature distribution distance between the training and prediction feature. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config import GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config_instance = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config_dict = google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigTrainingPredictionSkewDetectionConfig.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_training_prediction_skew_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


