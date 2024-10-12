# GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec

The median automated stopping rule stops a pending Trial if the Trial's best objective_value is strictly below the median 'performance' of all completed Trials reported up to the Trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the Trial in each measurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_elapsed_duration** | **bool** | True if median automated stopping rule applies on Measurement.elapsed_duration. It means that elapsed_duration field of latest measurement of current Trial is used to compute median objective value for each completed Trials. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec import GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec_instance = GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpecMedianAutomatedStoppingSpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_median_automated_stopping_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


