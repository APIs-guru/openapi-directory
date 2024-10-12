# GoogleCloudSecuritycenterV1p1beta1NotificationMessage

Security Command Center's Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding** | [**GoogleCloudSecuritycenterV1p1beta1Finding**](GoogleCloudSecuritycenterV1p1beta1Finding.md) |  | [optional] 
**notification_config_name** | **str** | Name of the notification config that generated current notification. | [optional] 
**resource** | [**GoogleCloudSecuritycenterV1p1beta1Resource**](GoogleCloudSecuritycenterV1p1beta1Resource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1p1beta1_notification_message import GoogleCloudSecuritycenterV1p1beta1NotificationMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1p1beta1NotificationMessage from a JSON string
google_cloud_securitycenter_v1p1beta1_notification_message_instance = GoogleCloudSecuritycenterV1p1beta1NotificationMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1p1beta1NotificationMessage.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1p1beta1_notification_message_dict = google_cloud_securitycenter_v1p1beta1_notification_message_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1p1beta1NotificationMessage from a dict
google_cloud_securitycenter_v1p1beta1_notification_message_from_dict = GoogleCloudSecuritycenterV1p1beta1NotificationMessage.from_dict(google_cloud_securitycenter_v1p1beta1_notification_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


