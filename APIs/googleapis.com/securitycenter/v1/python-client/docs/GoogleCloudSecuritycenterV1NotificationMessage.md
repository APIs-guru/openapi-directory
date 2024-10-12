# GoogleCloudSecuritycenterV1NotificationMessage

Cloud SCC's Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding** | [**Finding**](Finding.md) |  | [optional] 
**notification_config_name** | **str** | Name of the notification config that generated current notification. | [optional] 
**resource** | [**GoogleCloudSecuritycenterV1Resource**](GoogleCloudSecuritycenterV1Resource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_notification_message import GoogleCloudSecuritycenterV1NotificationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1NotificationMessage from a JSON string
google_cloud_securitycenter_v1_notification_message_instance = GoogleCloudSecuritycenterV1NotificationMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1NotificationMessage.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_notification_message_dict = google_cloud_securitycenter_v1_notification_message_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1NotificationMessage from a dict
google_cloud_securitycenter_v1_notification_message_from_dict = GoogleCloudSecuritycenterV1NotificationMessage.from_dict(google_cloud_securitycenter_v1_notification_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


