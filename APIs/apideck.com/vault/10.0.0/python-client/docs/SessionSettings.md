# SessionSettings

Settings to change the way the Vault is displayed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_actions** | **List[str]** | Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in &#x60;allow_actions&#x60; will be shown on a connection in Vault. Available actions are: &#x60;delete&#x60;, &#x60;disconnect&#x60;, &#x60;reauthorize&#x60; and &#x60;disable&#x60;. Empty array will hide all actions. By default all actions are visible. | [optional] 
**auto_redirect** | **bool** | Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to &#x60;false&#x60;. | [optional] [default to False]
**hide_guides** | **bool** | Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to &#x60;false&#x60;. | [optional] [default to False]
**hide_resource_settings** | **bool** | A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user. | [optional] [default to False]
**isolation_mode** | **bool** | Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items. | [optional] [default to False]
**sandbox_mode** | **bool** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment. | [optional] [default to False]
**session_length** | **str** | The duration of time the session is valid for (maximum 1 week). | [optional] [default to '1h']
**show_logs** | **bool** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to &#x60;true&#x60;. | [optional] [default to True]
**show_sidebar** | **bool** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to &#x60;true&#x60;. | [optional] [default to True]
**show_suggestions** | **bool** | Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to &#x60;false&#x60;. | [optional] [default to False]
**unified_apis** | [**List[UnifiedApiId]**](UnifiedApiId.md) | Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs. | [optional] 

## Example

```python
from openapi_client.models.session_settings import SessionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SessionSettings from a JSON string
session_settings_instance = SessionSettings.from_json(json)
# print the JSON string representation of the object
print(SessionSettings.to_json())

# convert the object into a dict
session_settings_dict = session_settings_instance.to_dict()
# create an instance of SessionSettings from a dict
session_settings_from_dict = SessionSettings.from_dict(session_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


