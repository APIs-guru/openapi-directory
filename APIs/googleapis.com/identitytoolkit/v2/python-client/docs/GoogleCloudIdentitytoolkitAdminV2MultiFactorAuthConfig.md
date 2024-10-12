# GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig

Options related to MultiFactor Authentication for the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_providers** | **List[str]** | A list of usable second factors for this project. | [optional] 
**provider_configs** | [**List[GoogleCloudIdentitytoolkitAdminV2ProviderConfig]**](GoogleCloudIdentitytoolkitAdminV2ProviderConfig.md) | A list of usable second factors for this project along with their configurations. This field does not support phone based MFA, for that use the &#39;enabled_providers&#39; field. | [optional] 
**state** | **str** | Whether MultiFactor Authentication has been enabled for this project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config import GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config_instance = GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config_dict = google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig from a dict
google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config_from_dict = GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig.from_dict(google_cloud_identitytoolkit_admin_v2_multi_factor_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


