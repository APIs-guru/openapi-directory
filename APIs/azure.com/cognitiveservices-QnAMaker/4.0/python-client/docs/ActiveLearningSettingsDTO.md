# ActiveLearningSettingsDTO

Active Learning settings of the endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **str** | True/False string providing Active Learning | [optional] 

## Example

```python
from openapi_client.models.active_learning_settings_dto import ActiveLearningSettingsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveLearningSettingsDTO from a JSON string
active_learning_settings_dto_instance = ActiveLearningSettingsDTO.from_json(json)
# print the JSON string representation of the object
print(ActiveLearningSettingsDTO.to_json())

# convert the object into a dict
active_learning_settings_dto_dict = active_learning_settings_dto_instance.to_dict()
# create an instance of ActiveLearningSettingsDTO from a dict
active_learning_settings_dto_from_dict = ActiveLearningSettingsDTO.from_dict(active_learning_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


