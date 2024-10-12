# GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig

TotpMFAProviderConfig represents the TOTP based MFA provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjacent_intervals** | **int** | The allowed number of adjacent intervals that will be used for verification to avoid clock skew. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config import GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config_instance = GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config_dict = google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig from a dict
google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config_from_dict = GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig.from_dict(google_cloud_identitytoolkit_admin_v2_totp_mfa_provider_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


