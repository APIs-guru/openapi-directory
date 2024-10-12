# GoogleCloudIdentitytoolkitAdminV2NotificationConfig

Configuration related to sending notifications to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_locale** | **str** | Default locale used for email and SMS in IETF BCP 47 format. | [optional] 
**send_email** | [**GoogleCloudIdentitytoolkitAdminV2SendEmail**](GoogleCloudIdentitytoolkitAdminV2SendEmail.md) |  | [optional] 
**send_sms** | [**GoogleCloudIdentitytoolkitAdminV2SendSms**](GoogleCloudIdentitytoolkitAdminV2SendSms.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_notification_config import GoogleCloudIdentitytoolkitAdminV2NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2NotificationConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_notification_config_instance = GoogleCloudIdentitytoolkitAdminV2NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2NotificationConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_notification_config_dict = google_cloud_identitytoolkit_admin_v2_notification_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2NotificationConfig from a dict
google_cloud_identitytoolkit_admin_v2_notification_config_from_dict = GoogleCloudIdentitytoolkitAdminV2NotificationConfig.from_dict(google_cloud_identitytoolkit_admin_v2_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


