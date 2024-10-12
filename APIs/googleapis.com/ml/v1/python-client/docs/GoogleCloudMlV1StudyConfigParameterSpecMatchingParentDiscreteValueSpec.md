# GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec

Represents the spec to match discrete values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** | Matches values of the parent parameter with type &#39;DISCRETE&#39;. All values must exist in &#x60;discrete_value_spec&#x60; of parent parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec import GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_matching_parent_discrete_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


