# ApiOAuthSettingsParameter

OAuth settings for the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **object** | Options available to this parameter | [optional] 
**ui_definition** | **object** | UI definitions per culture as caller can specify the culture | [optional] 
**value** | **str** | Value of the setting | [optional] 

## Example

```python
from openapi_client.models.api_o_auth_settings_parameter import ApiOAuthSettingsParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOAuthSettingsParameter from a JSON string
api_o_auth_settings_parameter_instance = ApiOAuthSettingsParameter.from_json(json)
# print the JSON string representation of the object
print(ApiOAuthSettingsParameter.to_json())

# convert the object into a dict
api_o_auth_settings_parameter_dict = api_o_auth_settings_parameter_instance.to_dict()
# create an instance of ApiOAuthSettingsParameter from a dict
api_o_auth_settings_parameter_from_dict = ApiOAuthSettingsParameter.from_dict(api_o_auth_settings_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


