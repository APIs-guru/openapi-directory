# GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig

The configuration for Pub/Sub messaging for the AppConnector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_subscription** | **str** | The Pub/Sub subscription the AppConnector uses to receive notifications. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config import GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config_instance = GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config_dict = google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig from a dict
google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1_notification_config_cloud_pub_sub_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


