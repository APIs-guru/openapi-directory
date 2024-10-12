# GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec

Represents the spec to match categorical values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Matches values of the parent parameter with type &#39;CATEGORICAL&#39;. All values must exist in &#x60;categorical_value_spec&#x60; of parent parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec import GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_matching_parent_categorical_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


