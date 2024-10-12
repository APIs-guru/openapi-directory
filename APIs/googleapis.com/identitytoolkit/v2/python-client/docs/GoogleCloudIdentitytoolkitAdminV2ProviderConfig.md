# GoogleCloudIdentitytoolkitAdminV2ProviderConfig

ProviderConfig describes the supported MFA providers along with their configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Describes the state of the MultiFactor Authentication type. | [optional] 
**totp_provider_config** | [**GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig**](GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_provider_config import GoogleCloudIdentitytoolkitAdminV2ProviderConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ProviderConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_provider_config_instance = GoogleCloudIdentitytoolkitAdminV2ProviderConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ProviderConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_provider_config_dict = google_cloud_identitytoolkit_admin_v2_provider_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ProviderConfig from a dict
google_cloud_identitytoolkit_admin_v2_provider_config_from_dict = GoogleCloudIdentitytoolkitAdminV2ProviderConfig.from_dict(google_cloud_identitytoolkit_admin_v2_provider_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


