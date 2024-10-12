# GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition

Represents the spec to match categorical values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Required. Matches values of the parent parameter of &#39;CATEGORICAL&#39; type. All values must exist in &#x60;categorical_value_spec&#x60; of parent parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition import GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition from a JSON string
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition_instance = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition_dict = google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition from a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition_from_dict = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecCategoricalValueCondition.from_dict(google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_categorical_value_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


