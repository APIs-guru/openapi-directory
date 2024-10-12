# GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest

The migrate key request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_billing_check** | **bool** | Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_migrate_key_request import GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest from a JSON string
google_cloud_recaptchaenterprise_v1_migrate_key_request_instance = GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_migrate_key_request_dict = google_cloud_recaptchaenterprise_v1_migrate_key_request_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest from a dict
google_cloud_recaptchaenterprise_v1_migrate_key_request_from_dict = GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest.from_dict(google_cloud_recaptchaenterprise_v1_migrate_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


