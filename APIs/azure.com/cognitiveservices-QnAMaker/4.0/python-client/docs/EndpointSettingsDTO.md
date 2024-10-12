# EndpointSettingsDTO

Endpoint settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_learning** | [**ActiveLearningSettingsDTO**](ActiveLearningSettingsDTO.md) | Active Learning settings of the endpoint. | [optional] 

## Example

```python
from openapi_client.models.endpoint_settings_dto import EndpointSettingsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointSettingsDTO from a JSON string
endpoint_settings_dto_instance = EndpointSettingsDTO.from_json(json)
# print the JSON string representation of the object
print(EndpointSettingsDTO.to_json())

# convert the object into a dict
endpoint_settings_dto_dict = endpoint_settings_dto_instance.to_dict()
# create an instance of EndpointSettingsDTO from a dict
endpoint_settings_dto_from_dict = EndpointSettingsDTO.from_dict(endpoint_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


