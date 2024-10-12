# GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Must be specified if type is &#x60;CATEGORICAL&#x60;. The list of possible categories. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec import GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec from a JSON string
google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec_instance = GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec_dict = google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec from a dict
google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec_from_dict = GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec.from_dict(google_cloud_ml_v1_study_config_parameter_spec_categorical_value_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


