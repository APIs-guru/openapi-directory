# GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec

The decay curve automated stopping rule builds a Gaussian Process Regressor to predict the final objective value of a Trial based on the already completed Trials and the intermediate measurements of the current Trial. Early stopping is requested for the current Trial if there is very low probability to exceed the optimal value found so far.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_elapsed_duration** | **bool** | True if Measurement.elapsed_duration is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.step_count will be used as the x-axis. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec import GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec_instance = GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpecDecayCurveAutomatedStoppingSpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_decay_curve_automated_stopping_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


