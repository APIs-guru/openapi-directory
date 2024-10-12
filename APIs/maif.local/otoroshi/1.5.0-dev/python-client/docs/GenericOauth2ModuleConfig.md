# GenericOauth2ModuleConfig

Settings to authenticate users using a generic OAuth2 provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token_field** | **str** | Field name to get access token | 
**authorize_url** | **str** | OAuth authorize URL | 
**callback_url** | **str** | Otoroshi callback URL | 
**claims** | **str** | The claims of the token | [optional] 
**client_id** | **str** | OAuth Client id | 
**client_secret** | **str** | OAuth Client secret | 
**desc** | **str** | Description of the config | 
**email_field** | **str** | Field name to get email from user profile | 
**id** | **str** | Unique id of the config | 
**jwt_verifier** | [**GenericOauth2ModuleConfigJwtVerifier**](GenericOauth2ModuleConfigJwtVerifier.md) |  | [optional] 
**login_url** | **str** | OAuth login URL | 
**logout_url** | **str** | OAuth logout URL | 
**name** | **str** | Name of the config | 
**name_field** | **str** | Field name to get name from user profile | 
**oid_config** | **str** | URL of the OIDC config. file | [optional] 
**otoroshi_data_field** | **str** | Field name to get otoroshi metadata from. You can specify sub fields using | as separator | 
**read_profile_from_token** | **bool** | The user profile will be read from the JWT token in id_token | [optional] 
**scope** | **str** | The scope of the token | [optional] 
**session_max_age** | **int** | Max age of the session | 
**token_url** | **str** | OAuth token URL | 
**type** | **str** | Type of settings. value is oauth2 | 
**use_cookies** | **bool** | Use for redirection to actual service | [optional] 
**use_json** | **bool** | Use JSON or URL Form Encoded as payload with the OAuth provider | [optional] 
**user_info_url** | **str** | OAuth userinfo to get user profile | 

## Example

```python
from openapi_client.models.generic_oauth2_module_config import GenericOauth2ModuleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GenericOauth2ModuleConfig from a JSON string
generic_oauth2_module_config_instance = GenericOauth2ModuleConfig.from_json(json)
# print the JSON string representation of the object
print(GenericOauth2ModuleConfig.to_json())

# convert the object into a dict
generic_oauth2_module_config_dict = generic_oauth2_module_config_instance.to_dict()
# create an instance of GenericOauth2ModuleConfig from a dict
generic_oauth2_module_config_from_dict = GenericOauth2ModuleConfig.from_dict(generic_oauth2_module_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


