# GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec

Represents the spec to match integer values from parent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Matches values of the parent parameter with type &#39;INTEGER&#39;. All values must lie in &#x60;integer_value_spec&#x60; of parent parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec import GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_matching_parent_int_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


