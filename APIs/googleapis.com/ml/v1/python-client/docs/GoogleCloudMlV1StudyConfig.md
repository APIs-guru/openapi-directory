# GoogleCloudMlV1StudyConfig

Represents configuration of a study.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The search algorithm specified for the study. | [optional] 
**automated_stopping_config** | [**GoogleCloudMlV1AutomatedStoppingConfig**](GoogleCloudMlV1AutomatedStoppingConfig.md) |  | [optional] 
**metrics** | [**List[GoogleCloudMlV1StudyConfigMetricSpec]**](GoogleCloudMlV1StudyConfigMetricSpec.md) | Metric specs for the study. | [optional] 
**parameters** | [**List[GoogleCloudMlV1StudyConfigParameterSpec]**](GoogleCloudMlV1StudyConfigParameterSpec.md) | Required. The set of parameters to tune. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config import GoogleCloudMlV1StudyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfig from a JSON string
google_cloud_ml_v1_study_config_instance = GoogleCloudMlV1StudyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_dict = google_cloud_ml_v1_study_config_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfig from a dict
google_cloud_ml_v1_study_config_from_dict = GoogleCloudMlV1StudyConfig.from_dict(google_cloud_ml_v1_study_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


