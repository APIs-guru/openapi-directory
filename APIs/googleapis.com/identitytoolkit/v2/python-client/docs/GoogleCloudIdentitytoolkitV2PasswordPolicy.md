# GoogleCloudIdentitytoolkitV2PasswordPolicy

Configuration for password policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_non_alphanumeric_characters** | **List[str]** | Output only. Allowed characters which satisfy the non_alphanumeric requirement. | [optional] [readonly] 
**custom_strength_options** | [**GoogleCloudIdentitytoolkitV2CustomStrengthOptions**](GoogleCloudIdentitytoolkitV2CustomStrengthOptions.md) |  | [optional] 
**enforcement_state** | **str** | Output only. Which enforcement mode to use for the password policy. | [optional] [readonly] 
**force_upgrade_on_signin** | **bool** | Users must have a password compliant with the password policy to sign-in. | [optional] 
**schema_version** | **int** | Output only. schema version number for the password policy | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_password_policy import GoogleCloudIdentitytoolkitV2PasswordPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2PasswordPolicy from a JSON string
google_cloud_identitytoolkit_v2_password_policy_instance = GoogleCloudIdentitytoolkitV2PasswordPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2PasswordPolicy.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_password_policy_dict = google_cloud_identitytoolkit_v2_password_policy_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2PasswordPolicy from a dict
google_cloud_identitytoolkit_v2_password_policy_from_dict = GoogleCloudIdentitytoolkitV2PasswordPolicy.from_dict(google_cloud_identitytoolkit_v2_password_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


