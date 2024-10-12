# GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec

Represents a parameter spec with condition from its parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_spec** | [**GoogleCloudAiplatformV1StudySpecParameterSpec**](GoogleCloudAiplatformV1StudySpecParameterSpec.md) |  | [optional] 
**parent_categorical_values** | [**GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition**](GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition.md) |  | [optional] 
**parent_discrete_values** | [**GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition**](GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition.md) |  | [optional] 
**parent_int_values** | [**GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition**](GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec import GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec from a JSON string
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_instance = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_dict = google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec from a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_from_dict = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec.from_dict(google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


