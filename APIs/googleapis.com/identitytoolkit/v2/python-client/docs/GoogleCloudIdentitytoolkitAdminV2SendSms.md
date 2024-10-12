# GoogleCloudIdentitytoolkitAdminV2SendSms

Options for SMS sending.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sms_template** | [**GoogleCloudIdentitytoolkitAdminV2SmsTemplate**](GoogleCloudIdentitytoolkitAdminV2SmsTemplate.md) |  | [optional] 
**use_device_locale** | **bool** | Whether to use the accept_language header for SMS. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_send_sms import GoogleCloudIdentitytoolkitAdminV2SendSms

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2SendSms from a JSON string
google_cloud_identitytoolkit_admin_v2_send_sms_instance = GoogleCloudIdentitytoolkitAdminV2SendSms.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2SendSms.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_send_sms_dict = google_cloud_identitytoolkit_admin_v2_send_sms_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2SendSms from a dict
google_cloud_identitytoolkit_admin_v2_send_sms_from_dict = GoogleCloudIdentitytoolkitAdminV2SendSms.from_dict(google_cloud_identitytoolkit_admin_v2_send_sms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


