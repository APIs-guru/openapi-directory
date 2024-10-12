# GoogleCloudConnectorsV1AuthConfig

AuthConfig defines details of a authentication type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_variables** | [**List[GoogleCloudConnectorsV1ConfigVariable]**](GoogleCloudConnectorsV1ConfigVariable.md) | List containing additional auth configs. | [optional] 
**auth_key** | **str** | Identifier key for auth config | [optional] 
**auth_type** | **str** | The type of authentication configured. | [optional] 
**oauth2_auth_code_flow** | [**GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow**](GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow.md) |  | [optional] 
**oauth2_client_credentials** | [**GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials**](GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials.md) |  | [optional] 
**oauth2_jwt_bearer** | [**GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer**](GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer.md) |  | [optional] 
**ssh_public_key** | [**GoogleCloudConnectorsV1AuthConfigSshPublicKey**](GoogleCloudConnectorsV1AuthConfigSshPublicKey.md) |  | [optional] 
**user_password** | [**GoogleCloudConnectorsV1AuthConfigUserPassword**](GoogleCloudConnectorsV1AuthConfigUserPassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config import GoogleCloudConnectorsV1AuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfig from a JSON string
google_cloud_connectors_v1_auth_config_instance = GoogleCloudConnectorsV1AuthConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_dict = google_cloud_connectors_v1_auth_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfig from a dict
google_cloud_connectors_v1_auth_config_from_dict = GoogleCloudConnectorsV1AuthConfig.from_dict(google_cloud_connectors_v1_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


