# GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec

Represents a parameter spec with condition from its parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_spec** | [**GoogleCloudAiplatformV1beta1StudySpecParameterSpec**](GoogleCloudAiplatformV1beta1StudySpecParameterSpec.md) |  | [optional] 
**parent_categorical_values** | [**GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition**](GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition.md) |  | [optional] 
**parent_discrete_values** | [**GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition**](GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition.md) |  | [optional] 
**parent_int_values** | [**GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecIntValueCondition**](GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecIntValueCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec import GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_instance = GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_dict = google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec from a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_from_dict = GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpec.from_dict(google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


