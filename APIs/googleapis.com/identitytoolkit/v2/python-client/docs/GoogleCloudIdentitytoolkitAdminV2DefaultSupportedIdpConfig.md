# GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig

Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_sign_in_config** | [**GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig**](GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.md) |  | [optional] 
**client_id** | **str** | OAuth client ID. | [optional] 
**client_secret** | **str** | OAuth client secret. | [optional] 
**enabled** | **bool** | True if allows the user to sign in with the provider. | [optional] 
**name** | **str** | The name of the DefaultSupportedIdpConfig resource, for example: \&quot;projects/my-awesome-project/defaultSupportedIdpConfigs/google.com\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_default_supported_idp_config import GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_default_supported_idp_config_instance = GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_default_supported_idp_config_dict = google_cloud_identitytoolkit_admin_v2_default_supported_idp_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig from a dict
google_cloud_identitytoolkit_admin_v2_default_supported_idp_config_from_dict = GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig.from_dict(google_cloud_identitytoolkit_admin_v2_default_supported_idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


