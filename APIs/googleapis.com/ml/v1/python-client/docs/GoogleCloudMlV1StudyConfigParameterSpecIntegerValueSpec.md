# GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **str** | Must be specified if type is &#x60;INTEGER&#x60;. Maximum value of the parameter. | [optional] 
**min_value** | **str** | Must be specified if type is &#x60;INTEGER&#x60;. Minimum value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec import GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_integer_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


