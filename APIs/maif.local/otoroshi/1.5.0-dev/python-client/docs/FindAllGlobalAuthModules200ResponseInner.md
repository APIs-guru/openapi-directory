# FindAllGlobalAuthModules200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_password** | **str** | The admin password | 
**admin_username** | **str** | The admin username | 
**desc** | **str** | Description of the config | 
**email_field** | **str** | Field name to get email from user profile | 
**group_filter** | **str** | Filter for groups | 
**id** | **str** | Unique id of the config | 
**name** | **str** | Name of the config | 
**name_field** | **str** | Field name to get name from user profile | 
**otoroshi_data_field** | **str** | Field name to get otoroshi metadata from. You can specify sub fields using | as separator | 
**search_base** | **str** | LDAP search base | 
**search_filter** | **str** | Filter for users | 
**server_url** | **str** | URL of the ldap server | 
**session_max_age** | **int** | Max age of the session | 
**type** | **str** | Type of settings. value is oauth2 | 
**user_base** | **str** | LDAP user base DN | 
**users** | [**List[InMemoryUser]**](InMemoryUser.md) | List of users | 
**access_token_field** | **str** | Field name to get access token | 
**authorize_url** | **str** | OAuth authorize URL | 
**callback_url** | **str** | Otoroshi callback URL | 
**claims** | **str** | The claims of the token | [optional] 
**client_id** | **str** | OAuth Client id | 
**client_secret** | **str** | OAuth Client secret | 
**jwt_verifier** | [**GenericOauth2ModuleConfigJwtVerifier**](GenericOauth2ModuleConfigJwtVerifier.md) |  | [optional] 
**login_url** | **str** | OAuth login URL | 
**logout_url** | **str** | OAuth logout URL | 
**oid_config** | **str** | URL of the OIDC config. file | [optional] 
**read_profile_from_token** | **bool** | The user profile will be read from the JWT token in id_token | [optional] 
**scope** | **str** | The scope of the token | [optional] 
**token_url** | **str** | OAuth token URL | 
**use_cookies** | **bool** | Use for redirection to actual service | [optional] 
**use_json** | **bool** | Use JSON or URL Form Encoded as payload with the OAuth provider | [optional] 
**user_info_url** | **str** | OAuth userinfo to get user profile | 

## Example

```python
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of FindAllGlobalAuthModules200ResponseInner from a JSON string
find_all_global_auth_modules200_response_inner_instance = FindAllGlobalAuthModules200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(FindAllGlobalAuthModules200ResponseInner.to_json())

# convert the object into a dict
find_all_global_auth_modules200_response_inner_dict = find_all_global_auth_modules200_response_inner_instance.to_dict()
# create an instance of FindAllGlobalAuthModules200ResponseInner from a dict
find_all_global_auth_modules200_response_inner_from_dict = FindAllGlobalAuthModules200ResponseInner.from_dict(find_all_global_auth_modules200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


