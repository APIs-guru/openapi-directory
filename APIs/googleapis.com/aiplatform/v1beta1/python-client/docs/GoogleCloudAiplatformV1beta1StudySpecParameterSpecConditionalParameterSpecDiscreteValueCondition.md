# GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition

Represents the spec to match discrete values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** | Required. Matches values of the parent parameter of &#39;DISCRETE&#39; type. All values must exist in &#x60;discrete_value_spec&#x60; of parent parameter. The Epsilon of the value matching is 1e-10. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition import GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition from a JSON string
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition_instance = GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition_dict = google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition from a dict
google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition_from_dict = GoogleCloudAiplatformV1beta1StudySpecParameterSpecConditionalParameterSpecDiscreteValueCondition.from_dict(google_cloud_aiplatform_v1beta1_study_spec_parameter_spec_conditional_parameter_spec_discrete_value_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


