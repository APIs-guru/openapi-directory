# GoogleCloudAiplatformV1beta1TrialParameter

A message representing a parameter to be tuned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_id** | **str** | Output only. The ID of the parameter. The parameter should be defined in StudySpec&#39;s Parameters. | [optional] [readonly] 
**value** | **object** | Output only. The value of the parameter. &#x60;number_value&#x60; will be set if a parameter defined in StudySpec is in type &#39;INTEGER&#39;, &#39;DOUBLE&#39; or &#39;DISCRETE&#39;. &#x60;string_value&#x60; will be set if a parameter defined in StudySpec is in type &#39;CATEGORICAL&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_trial_parameter import GoogleCloudAiplatformV1beta1TrialParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TrialParameter from a JSON string
google_cloud_aiplatform_v1beta1_trial_parameter_instance = GoogleCloudAiplatformV1beta1TrialParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TrialParameter.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_trial_parameter_dict = google_cloud_aiplatform_v1beta1_trial_parameter_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TrialParameter from a dict
google_cloud_aiplatform_v1beta1_trial_parameter_from_dict = GoogleCloudAiplatformV1beta1TrialParameter.from_dict(google_cloud_aiplatform_v1beta1_trial_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


