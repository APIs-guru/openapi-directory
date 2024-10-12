# NotificationConfig

Specifies where to send notifications upon changes to a data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_topic** | **str** | The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can&#39;t be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren&#39;t submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details. | [optional] 
**send_for_bulk_import** | **bool** | Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. | [optional] 

## Example

```python
from openapi_client.models.notification_config import NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationConfig from a JSON string
notification_config_instance = NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(NotificationConfig.to_json())

# convert the object into a dict
notification_config_dict = notification_config_instance.to_dict()
# create an instance of NotificationConfig from a dict
notification_config_from_dict = NotificationConfig.from_dict(notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


