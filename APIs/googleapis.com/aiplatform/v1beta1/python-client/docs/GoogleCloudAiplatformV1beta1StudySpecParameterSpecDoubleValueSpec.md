# GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec

Value specification for a parameter in `DOUBLE` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **float** | A default value for a &#x60;DOUBLE&#x60; parameter that is assumed to be a relatively good starting point. Unset value signals that there is no offered starting point. Currently only supported by the Vertex AI Vizier service. Not supported by HyperparameterTuningJob or TrainingPipeline. | [optional] 
**max_value** | **float** | Required. Inclusive maximum value of the parameter. | [optional] 
**min_value** | **float** | Required. Inclusive minimum value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec import GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec_instance = GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpecParameterSpecDoubleValueSpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_double_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


