# AppDevExperienceFeatureState

State for App Dev Exp Feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networking_install_succeeded** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_dev_experience_feature_state import AppDevExperienceFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of AppDevExperienceFeatureState from a JSON string
app_dev_experience_feature_state_instance = AppDevExperienceFeatureState.from_json(json)
# print the JSON string representation of the object
print(AppDevExperienceFeatureState.to_json())

# convert the object into a dict
app_dev_experience_feature_state_dict = app_dev_experience_feature_state_instance.to_dict()
# create an instance of AppDevExperienceFeatureState from a dict
app_dev_experience_feature_state_from_dict = AppDevExperienceFeatureState.from_dict(app_dev_experience_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


