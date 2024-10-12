# GoogleCloudAiplatformV1StudySpecParameterSpec

Represents a single parameter to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_value_spec** | [**GoogleCloudAiplatformV1StudySpecParameterSpecCategoricalValueSpec**](GoogleCloudAiplatformV1StudySpecParameterSpecCategoricalValueSpec.md) |  | [optional] 
**conditional_parameter_specs** | [**List[GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec]**](GoogleCloudAiplatformV1StudySpecParameterSpecConditionalParameterSpec.md) | A conditional parameter node is active if the parameter&#39;s value matches the conditional node&#39;s parent_value_condition. If two items in conditional_parameter_specs have the same name, they must have disjoint parent_value_condition. | [optional] 
**discrete_value_spec** | [**GoogleCloudAiplatformV1StudySpecParameterSpecDiscreteValueSpec**](GoogleCloudAiplatformV1StudySpecParameterSpecDiscreteValueSpec.md) |  | [optional] 
**double_value_spec** | [**GoogleCloudAiplatformV1StudySpecParameterSpecDoubleValueSpec**](GoogleCloudAiplatformV1StudySpecParameterSpecDoubleValueSpec.md) |  | [optional] 
**integer_value_spec** | [**GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec**](GoogleCloudAiplatformV1StudySpecParameterSpecIntegerValueSpec.md) |  | [optional] 
**parameter_id** | **str** | Required. The ID of the parameter. Must not contain whitespaces and must be unique amongst all ParameterSpecs. | [optional] 
**scale_type** | **str** | How the parameter should be scaled. Leave unset for &#x60;CATEGORICAL&#x60; parameters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_parameter_spec import GoogleCloudAiplatformV1StudySpecParameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpec from a JSON string
google_cloud_aiplatform_v1_study_spec_parameter_spec_instance = GoogleCloudAiplatformV1StudySpecParameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecParameterSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_dict = google_cloud_aiplatform_v1_study_spec_parameter_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecParameterSpec from a dict
google_cloud_aiplatform_v1_study_spec_parameter_spec_from_dict = GoogleCloudAiplatformV1StudySpecParameterSpec.from_dict(google_cloud_aiplatform_v1_study_spec_parameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


