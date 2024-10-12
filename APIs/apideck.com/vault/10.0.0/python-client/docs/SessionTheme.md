# SessionTheme

Theming options to change the look and feel of Vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**favicon** | **str** | The URL to the favicon to use for Vault. | [optional] 
**logo** | **str** | The URL to the logo to use for Vault. | [optional] 
**primary_color** | **str** | The primary color to use for Vault. | [optional] 
**privacy_url** | **str** | The URL to the privacy policy that will be shown in the sidebar. | [optional] 
**sidepanel_background_color** | **str** | The background color to use for the sidebar. | [optional] 
**sidepanel_text_color** | **str** | The text color to use for the sidebar. | [optional] 
**terms_url** | **str** | The URL to the terms and conditions that will be shown in the sidebar. | [optional] 
**vault_name** | **str** | The name that will be shown in the sidebar. | [optional] 

## Example

```python
from openapi_client.models.session_theme import SessionTheme

# TODO update the JSON string below
json = "{}"
# create an instance of SessionTheme from a JSON string
session_theme_instance = SessionTheme.from_json(json)
# print the JSON string representation of the object
print(SessionTheme.to_json())

# convert the object into a dict
session_theme_dict = session_theme_instance.to_dict()
# create an instance of SessionTheme from a dict
session_theme_from_dict = SessionTheme.from_dict(session_theme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


