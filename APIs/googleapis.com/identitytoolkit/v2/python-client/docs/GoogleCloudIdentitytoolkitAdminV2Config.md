# GoogleCloudIdentitytoolkitAdminV2Config

Represents an Identity Toolkit project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_domains** | **List[str]** | List of domains authorized for OAuth redirects | [optional] 
**autodelete_anonymous_users** | **bool** | Whether anonymous users will be auto-deleted after a period of 30 days. | [optional] 
**blocking_functions** | [**GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig**](GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig.md) |  | [optional] 
**client** | [**GoogleCloudIdentitytoolkitAdminV2ClientConfig**](GoogleCloudIdentitytoolkitAdminV2ClientConfig.md) |  | [optional] 
**email_privacy_config** | [**GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig**](GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig.md) |  | [optional] 
**mfa** | [**GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig**](GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig.md) |  | [optional] 
**monitoring** | [**GoogleCloudIdentitytoolkitAdminV2MonitoringConfig**](GoogleCloudIdentitytoolkitAdminV2MonitoringConfig.md) |  | [optional] 
**multi_tenant** | [**GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig**](GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig.md) |  | [optional] 
**name** | **str** | Output only. The name of the Config resource. Example: \&quot;projects/my-awesome-project/config\&quot; | [optional] [readonly] 
**notification** | [**GoogleCloudIdentitytoolkitAdminV2NotificationConfig**](GoogleCloudIdentitytoolkitAdminV2NotificationConfig.md) |  | [optional] 
**password_policy_config** | [**GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig**](GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig.md) |  | [optional] 
**quota** | [**GoogleCloudIdentitytoolkitAdminV2QuotaConfig**](GoogleCloudIdentitytoolkitAdminV2QuotaConfig.md) |  | [optional] 
**recaptcha_config** | [**GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig**](GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig.md) |  | [optional] 
**sign_in** | [**GoogleCloudIdentitytoolkitAdminV2SignInConfig**](GoogleCloudIdentitytoolkitAdminV2SignInConfig.md) |  | [optional] 
**sms_region_config** | [**GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig**](GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig.md) |  | [optional] 
**subtype** | **str** | Output only. The subtype of this config. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_config import GoogleCloudIdentitytoolkitAdminV2Config

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Config from a JSON string
google_cloud_identitytoolkit_admin_v2_config_instance = GoogleCloudIdentitytoolkitAdminV2Config.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Config.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_config_dict = google_cloud_identitytoolkit_admin_v2_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Config from a dict
google_cloud_identitytoolkit_admin_v2_config_from_dict = GoogleCloudIdentitytoolkitAdminV2Config.from_dict(google_cloud_identitytoolkit_admin_v2_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


