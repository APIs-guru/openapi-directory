# GoogleCloudIdentitytoolkitAdminV2SmsTemplate

The template to use when sending an SMS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Output only. The SMS&#39;s content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app&#39;s display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_sms_template import GoogleCloudIdentitytoolkitAdminV2SmsTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2SmsTemplate from a JSON string
google_cloud_identitytoolkit_admin_v2_sms_template_instance = GoogleCloudIdentitytoolkitAdminV2SmsTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2SmsTemplate.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_sms_template_dict = google_cloud_identitytoolkit_admin_v2_sms_template_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2SmsTemplate from a dict
google_cloud_identitytoolkit_admin_v2_sms_template_from_dict = GoogleCloudIdentitytoolkitAdminV2SmsTemplate.from_dict(google_cloud_identitytoolkit_admin_v2_sms_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


