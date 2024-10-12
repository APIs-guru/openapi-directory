# GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig

NotificationConfig defines the mechanisms to notify instance agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_notification** | [**GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig**](GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_notification_config import GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1_notification_config_instance = GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_notification_config_dict = google_cloud_beyondcorp_appconnectors_v1_notification_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig from a dict
google_cloud_beyondcorp_appconnectors_v1_notification_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


