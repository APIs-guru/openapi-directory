# GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig

The reCAPTCHA Enterprise integration config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_password_enforcement_state** | **str** | The reCAPTCHA config for email/password provider, containing the enforcement status. The email/password provider contains all related user flows protected by reCAPTCHA. | [optional] 
**managed_rules** | [**List[GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule]**](GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule.md) | The managed rules for authentication action based on reCAPTCHA scores. The rules are shared across providers for a given tenant project. | [optional] 
**recaptcha_keys** | [**List[GoogleCloudIdentitytoolkitAdminV2RecaptchaKey]**](GoogleCloudIdentitytoolkitAdminV2RecaptchaKey.md) | Output only. The reCAPTCHA keys. | [optional] [readonly] 
**use_account_defender** | **bool** | Whether to use the account defender for reCAPTCHA assessment. Defaults to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_recaptcha_config import GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_recaptcha_config_instance = GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_config_dict = google_cloud_identitytoolkit_admin_v2_recaptcha_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig from a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_config_from_dict = GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig.from_dict(google_cloud_identitytoolkit_admin_v2_recaptcha_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


