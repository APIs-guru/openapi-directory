# GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig

NotificationConfig defines the mechanisms to notify instance agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_notification** | [**GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig**](GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1alpha_notification_config import GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1alpha_notification_config_instance = GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1alpha_notification_config_dict = google_cloud_beyondcorp_appconnectors_v1alpha_notification_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig from a dict
google_cloud_beyondcorp_appconnectors_v1alpha_notification_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1alpha_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


