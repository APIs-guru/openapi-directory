# GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[float]** | Must be specified if type is &#x60;DISCRETE&#x60;. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec import GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_discrete_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


