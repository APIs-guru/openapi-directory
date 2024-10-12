# GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition

Represents the spec to match integer values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Required. Matches values of the parent parameter of &#39;INTEGER&#39; type. All values must lie in &#x60;integer_value_spec&#x60; of parent parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition import GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition from a JSON string
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition_instance = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition_dict = google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition from a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition_from_dict = GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpecIntValueCondition.from_dict(google_cloud_aiplatform_v1_study_spec_parameter_spec_conditional_parameter_spec_int_value_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


