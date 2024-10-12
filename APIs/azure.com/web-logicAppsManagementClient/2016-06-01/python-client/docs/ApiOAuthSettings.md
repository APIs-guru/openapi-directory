# ApiOAuthSettings

OAuth settings for the connection provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Resource provider client id | [optional] 
**client_secret** | **str** | Client Secret needed for OAuth | [optional] 
**custom_parameters** | [**Dict[str, ApiOAuthSettingsParameter]**](ApiOAuthSettingsParameter.md) | OAuth parameters key is the name of parameter | [optional] 
**identity_provider** | **str** | Identity provider | [optional] 
**properties** | **object** | Read only properties for this oauth setting. | [optional] 
**redirect_url** | **str** | Url | [optional] 
**scopes** | **List[str]** | OAuth scopes | [optional] 

## Example

```python
from openapi_client.models.api_o_auth_settings import ApiOAuthSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOAuthSettings from a JSON string
api_o_auth_settings_instance = ApiOAuthSettings.from_json(json)
# print the JSON string representation of the object
print(ApiOAuthSettings.to_json())

# convert the object into a dict
api_o_auth_settings_dict = api_o_auth_settings_instance.to_dict()
# create an instance of ApiOAuthSettings from a dict
api_o_auth_settings_from_dict = ApiOAuthSettings.from_dict(api_o_auth_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


