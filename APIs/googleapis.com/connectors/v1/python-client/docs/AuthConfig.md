# AuthConfig

AuthConfig defines details of a authentication type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[ConfigVariable]**](ConfigVariable.md) | List containing additional auth configs. | [optional] 
**auth_key** | **str** | Identifier key for auth config | [optional] 
**auth_type** | **str** | The type of authentication configured. | [optional] 
**oauth2_auth_code_flow** | [**Oauth2AuthCodeFlow**](Oauth2AuthCodeFlow.md) |  | [optional] 
**oauth2_client_credentials** | [**Oauth2ClientCredentials**](Oauth2ClientCredentials.md) |  | [optional] 
**oauth2_jwt_bearer** | [**Oauth2JwtBearer**](Oauth2JwtBearer.md) |  | [optional] 
**ssh_public_key** | [**SshPublicKey**](SshPublicKey.md) |  | [optional] 
**user_password** | [**UserPassword**](UserPassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.auth_config import AuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuthConfig from a JSON string
auth_config_instance = AuthConfig.from_json(json)
# print the JSON string representation of the object
print(AuthConfig.to_json())

# convert the object into a dict
auth_config_dict = auth_config_instance.to_dict()
# create an instance of AuthConfig from a dict
auth_config_from_dict = AuthConfig.from_dict(auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


