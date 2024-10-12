# GoogleCloudAiplatformV1beta1StudySpec

Represents specification of a Study.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The search algorithm specified for the Study. | [optional] 
**convex_automated_stopping_spec** | [**GoogleCloudAiplatformV1beta1StudySpecConvexAutomatedStoppingSpec**](GoogleCloudAiplatformV1beta1StudySpecConvexAutomatedStoppingSpec.md) |  | [optional] 
**convex_stop_config** | [**GoogleCloudAiplatformV1beta1StudySpecConvexStopConfig**](GoogleCloudAiplatformV1beta1StudySpecConvexStopConfig.md) |  | [optional] 
**decay_curve_stopping_spec** | [**GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec**](GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec.md) |  | [optional] 
**measurement_selection_type** | **str** | Describe which measurement selection type will be used | [optional] 
**median_automated_stopping_spec** | [**GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec**](GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec.md) |  | [optional] 
**metrics** | [**List[GoogleCloudAiplatformV1beta1StudySpecMetricSpec]**](GoogleCloudAiplatformV1beta1StudySpecMetricSpec.md) | Required. Metric specs for the Study. | [optional] 
**observation_noise** | **str** | The observation noise level of the study. Currently only supported by the Vertex AI Vizier service. Not supported by HyperparameterTuningJob or TrainingPipeline. | [optional] 
**parameters** | [**List[GoogleCloudAiplatformV1beta1StudySpecParameterSpec]**](GoogleCloudAiplatformV1beta1StudySpecParameterSpec.md) | Required. The set of parameters to tune. | [optional] 
**study_stopping_config** | [**GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig**](GoogleCloudAiplatformV1beta1StudySpecStudyStoppingConfig.md) |  | [optional] 
**transfer_learning_config** | [**GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig**](GoogleCloudAiplatformV1beta1StudySpecTransferLearningConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec import GoogleCloudAiplatformV1beta1StudySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_instance = GoogleCloudAiplatformV1beta1StudySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


