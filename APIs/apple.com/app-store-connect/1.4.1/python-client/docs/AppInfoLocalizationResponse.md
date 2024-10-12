# AppInfoLocalizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfoLocalization**](AppInfoLocalization.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_info_localization_response import AppInfoLocalizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationResponse from a JSON string
app_info_localization_response_instance = AppInfoLocalizationResponse.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationResponse.to_json())

# convert the object into a dict
app_info_localization_response_dict = app_info_localization_response_instance.to_dict()
# create an instance of AppInfoLocalizationResponse from a dict
app_info_localization_response_from_dict = AppInfoLocalizationResponse.from_dict(app_info_localization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


