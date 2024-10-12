# GoogleCloudSecuritycenterV2NotificationMessage

Cloud SCC's Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding** | [**GoogleCloudSecuritycenterV2Finding**](GoogleCloudSecuritycenterV2Finding.md) |  | [optional] 
**notification_config_name** | **str** | Name of the notification config that generated current notification. | [optional] 
**resource** | [**GoogleCloudSecuritycenterV2Resource**](GoogleCloudSecuritycenterV2Resource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_notification_message import GoogleCloudSecuritycenterV2NotificationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2NotificationMessage from a JSON string
google_cloud_securitycenter_v2_notification_message_instance = GoogleCloudSecuritycenterV2NotificationMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2NotificationMessage.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_notification_message_dict = google_cloud_securitycenter_v2_notification_message_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2NotificationMessage from a dict
google_cloud_securitycenter_v2_notification_message_from_dict = GoogleCloudSecuritycenterV2NotificationMessage.from_dict(google_cloud_securitycenter_v2_notification_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


