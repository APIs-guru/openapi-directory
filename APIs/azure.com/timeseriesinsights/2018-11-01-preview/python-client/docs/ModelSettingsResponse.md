# ModelSettingsResponse

Response containing full time series model settings which include model name, Time Series ID properties and default type ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_settings** | [**TimeSeriesModelSettings**](TimeSeriesModelSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_settings_response import ModelSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelSettingsResponse from a JSON string
model_settings_response_instance = ModelSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(ModelSettingsResponse.to_json())

# convert the object into a dict
model_settings_response_dict = model_settings_response_instance.to_dict()
# create an instance of ModelSettingsResponse from a dict
model_settings_response_from_dict = ModelSettingsResponse.from_dict(model_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


