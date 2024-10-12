# GoogleCloudIdentitytoolkitAdminV2SendEmail

Options for email sending.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_uri** | **str** | action url in email template. | [optional] 
**change_email_template** | [**GoogleCloudIdentitytoolkitAdminV2EmailTemplate**](GoogleCloudIdentitytoolkitAdminV2EmailTemplate.md) |  | [optional] 
**dns_info** | [**GoogleCloudIdentitytoolkitAdminV2DnsInfo**](GoogleCloudIdentitytoolkitAdminV2DnsInfo.md) |  | [optional] 
**legacy_reset_password_template** | [**GoogleCloudIdentitytoolkitAdminV2EmailTemplate**](GoogleCloudIdentitytoolkitAdminV2EmailTemplate.md) |  | [optional] 
**method** | **str** | The method used for sending an email. | [optional] 
**reset_password_template** | [**GoogleCloudIdentitytoolkitAdminV2EmailTemplate**](GoogleCloudIdentitytoolkitAdminV2EmailTemplate.md) |  | [optional] 
**revert_second_factor_addition_template** | [**GoogleCloudIdentitytoolkitAdminV2EmailTemplate**](GoogleCloudIdentitytoolkitAdminV2EmailTemplate.md) |  | [optional] 
**smtp** | [**GoogleCloudIdentitytoolkitAdminV2Smtp**](GoogleCloudIdentitytoolkitAdminV2Smtp.md) |  | [optional] 
**verify_email_template** | [**GoogleCloudIdentitytoolkitAdminV2EmailTemplate**](GoogleCloudIdentitytoolkitAdminV2EmailTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_send_email import GoogleCloudIdentitytoolkitAdminV2SendEmail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2SendEmail from a JSON string
google_cloud_identitytoolkit_admin_v2_send_email_instance = GoogleCloudIdentitytoolkitAdminV2SendEmail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2SendEmail.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_send_email_dict = google_cloud_identitytoolkit_admin_v2_send_email_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2SendEmail from a dict
google_cloud_identitytoolkit_admin_v2_send_email_from_dict = GoogleCloudIdentitytoolkitAdminV2SendEmail.from_dict(google_cloud_identitytoolkit_admin_v2_send_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


