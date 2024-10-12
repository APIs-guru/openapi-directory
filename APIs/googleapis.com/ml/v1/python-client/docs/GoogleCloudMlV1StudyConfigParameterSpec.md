# GoogleCloudMlV1StudyConfigParameterSpec

Represents a single parameter to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_value_spec** | [**GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec.md) |  | [optional] 
**child_parameter_specs** | [**List[GoogleCloudMlV1StudyConfigParameterSpec]**](GoogleCloudMlV1StudyConfigParameterSpec.md) | A child node is active if the parameter&#39;s value matches the child node&#39;s matching_parent_values. If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values. | [optional] 
**discrete_value_spec** | [**GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec.md) |  | [optional] 
**double_value_spec** | [**GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec.md) |  | [optional] 
**integer_value_spec** | [**GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec.md) |  | [optional] 
**parameter** | **str** | Required. The parameter name must be unique amongst all ParameterSpecs. | [optional] 
**parent_categorical_values** | [**GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec.md) |  | [optional] 
**parent_discrete_values** | [**GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec.md) |  | [optional] 
**parent_int_values** | [**GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec**](GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec.md) |  | [optional] 
**scale_type** | **str** | How the parameter should be scaled. Leave unset for categorical parameters. | [optional] 
**type** | **str** | Required. The type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec import GoogleCloudMlV1StudyConfigParameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_instance = GoogleCloudMlV1StudyConfigParameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


