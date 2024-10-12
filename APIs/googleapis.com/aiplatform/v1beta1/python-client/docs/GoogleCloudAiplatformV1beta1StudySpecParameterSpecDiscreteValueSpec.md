# GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec

Value specification for a parameter in `DISCRETE` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **float** | A default value for a &#x60;DISCRETE&#x60; parameter that is assumed to be a relatively good starting point. Unset value signals that there is no offered starting point. It automatically rounds to the nearest feasible discrete point. Currently only supported by the Vertex AI Vizier service. Not supported by HyperparameterTuningJob or TrainingPipeline. | [optional] 
**values** | **List[float]** | Required. A list of possible values. The list should be in increasing order and at least 1e-10 apart. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec import GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec_instance = GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpecParameterSpecDiscreteValueSpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_discrete_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


