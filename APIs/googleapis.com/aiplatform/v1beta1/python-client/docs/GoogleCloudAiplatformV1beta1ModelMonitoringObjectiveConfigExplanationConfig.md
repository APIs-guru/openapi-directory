# GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig

The config for integrating with Vertex Explainable AI. Only applicable if the Model has explanation_spec populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_feature_attributes** | **bool** | If want to analyze the Vertex Explainable AI feature attribute scores or not. If set to true, Vertex AI will log the feature attributions from explain response and do the skew/drift detection for them. | [optional] 
**explanation_baseline** | [**GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline**](GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfigExplanationBaseline.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config import GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_instance = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_dict = google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringObjectiveConfigExplanationConfig.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_objective_config_explanation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


