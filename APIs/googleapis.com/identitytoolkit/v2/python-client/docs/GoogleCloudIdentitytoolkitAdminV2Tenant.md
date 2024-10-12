# GoogleCloudIdentitytoolkitAdminV2Tenant

A Tenant contains configuration for the tenant in a multi-tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_password_signup** | **bool** | Whether to allow email/password user authentication. | [optional] 
**autodelete_anonymous_users** | **bool** | Whether anonymous users will be auto-deleted after a period of 30 days. | [optional] 
**client** | [**GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig**](GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig.md) |  | [optional] 
**disable_auth** | **bool** | Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users. | [optional] 
**display_name** | **str** | Display name of the tenant. | [optional] 
**email_privacy_config** | [**GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig**](GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig.md) |  | [optional] 
**enable_anonymous_user** | **bool** | Whether to enable anonymous user authentication. | [optional] 
**enable_email_link_signin** | **bool** | Whether to enable email link user authentication. | [optional] 
**hash_config** | [**GoogleCloudIdentitytoolkitAdminV2HashConfig**](GoogleCloudIdentitytoolkitAdminV2HashConfig.md) |  | [optional] 
**inheritance** | [**GoogleCloudIdentitytoolkitAdminV2Inheritance**](GoogleCloudIdentitytoolkitAdminV2Inheritance.md) |  | [optional] 
**mfa_config** | [**GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig**](GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig.md) |  | [optional] 
**monitoring** | [**GoogleCloudIdentitytoolkitAdminV2MonitoringConfig**](GoogleCloudIdentitytoolkitAdminV2MonitoringConfig.md) |  | [optional] 
**name** | **str** | Output only. Resource name of a tenant. For example: \&quot;projects/{project-id}/tenants/{tenant-id}\&quot; | [optional] [readonly] 
**password_policy_config** | [**GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig**](GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig.md) |  | [optional] 
**recaptcha_config** | [**GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig**](GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig.md) |  | [optional] 
**sms_region_config** | [**GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig**](GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig.md) |  | [optional] 
**test_phone_numbers** | **Dict[str, str]** | A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_tenant import GoogleCloudIdentitytoolkitAdminV2Tenant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Tenant from a JSON string
google_cloud_identitytoolkit_admin_v2_tenant_instance = GoogleCloudIdentitytoolkitAdminV2Tenant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Tenant.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_tenant_dict = google_cloud_identitytoolkit_admin_v2_tenant_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Tenant from a dict
google_cloud_identitytoolkit_admin_v2_tenant_from_dict = GoogleCloudIdentitytoolkitAdminV2Tenant.from_dict(google_cloud_identitytoolkit_admin_v2_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


