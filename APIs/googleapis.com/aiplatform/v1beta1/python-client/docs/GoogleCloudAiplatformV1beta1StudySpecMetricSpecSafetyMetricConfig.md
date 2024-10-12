# GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig

Used in safe optimization to specify threshold levels and risk tolerance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired_min_safe_trials_fraction** | **float** | Desired minimum fraction of safe trials (over total number of trials) that should be targeted by the algorithm at any time during the study (best effort). This should be between 0.0 and 1.0 and a value of 0.0 means that there is no minimum and an algorithm proceeds without targeting any specific fraction. A value of 1.0 means that the algorithm attempts to only Suggest safe Trials. | [optional] 
**safety_threshold** | **float** | Safety threshold (boundary value between safe and unsafe). NOTE that if you leave SafetyMetricConfig unset, a default value of 0 will be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config import GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config_instance = GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config_dict = google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig from a dict
google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config_from_dict = GoogleCloudAiplatformV1beta1StudySpecMetricSpecSafetyMetricConfig.from_dict(google_cloud_aiplatform_v1beta1_study_spec_metric_spec_safety_metric_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


