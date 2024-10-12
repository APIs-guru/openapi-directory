# GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig

The configuration for the password policy on the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_upgrade_on_signin** | **bool** | Users must have a password compliant with the password policy to sign-in. | [optional] 
**last_update_time** | **str** | Output only. The last time the password policy on the project was updated. | [optional] [readonly] 
**password_policy_enforcement_state** | **str** | Which enforcement mode to use for the password policy. | [optional] 
**password_policy_versions** | [**List[GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion]**](GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion.md) | Must be of length 1. Contains the strength attributes for the password policy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_password_policy_config import GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_password_policy_config_instance = GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_password_policy_config_dict = google_cloud_identitytoolkit_admin_v2_password_policy_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig from a dict
google_cloud_identitytoolkit_admin_v2_password_policy_config_from_dict = GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig.from_dict(google_cloud_identitytoolkit_admin_v2_password_policy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


