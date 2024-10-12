# GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec

Value specification for a parameter in `INTEGER` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | A default value for an &#x60;INTEGER&#x60; parameter that is assumed to be a relatively good starting point. Unset value signals that there is no offered starting point. Currently only supported by the Vertex AI Vizier service. Not supported by HyperparameterTuningJob or TrainingPipeline. | [optional] 
**max_value** | **str** | Required. Inclusive maximum value of the parameter. | [optional] 
**min_value** | **str** | Required. Inclusive minimum value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec import GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec from a JSON string
google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec_instance = GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec_dict = google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec from a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec_from_dict = GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec.from_dict(google_cloud_aiplatform_v1_study_spec_parameter_spec_integer_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


