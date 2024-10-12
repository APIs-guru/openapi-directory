# GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **float** | Must be specified if type is &#x60;DOUBLE&#x60;. Maximum value of the parameter. | [optional] 
**min_value** | **float** | Must be specified if type is &#x60;DOUBLE&#x60;. Minimum value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_double_value_spec import GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_double_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_double_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_double_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_double_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_double_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


