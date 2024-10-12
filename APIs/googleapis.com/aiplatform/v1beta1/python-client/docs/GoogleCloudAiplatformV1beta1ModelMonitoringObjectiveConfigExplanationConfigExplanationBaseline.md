# GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline

Output from BatchPredictionJob for Model Monitoring baseline dataset, which can be used to generate baseline attribution scores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery** | [**GoogleCloudAiplatformV1beta1BigQueryDestination**](GoogleCloudAiplatformV1beta1BigQueryDestination.md) |  | [optional] 
**gcs** | [**GoogleCloudAiplatformV1beta1GcsDestination**](GoogleCloudAiplatformV1beta1GcsDestination.md) |  | [optional] 
**prediction_format** | **str** | The storage format of the predictions generated BatchPrediction job. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline import GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline_instance = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline_dict = google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_explanation_baseline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


