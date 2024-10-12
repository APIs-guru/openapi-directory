# GoogleCloudDialogflowV2beta1NotificationConfig

Defines notification behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_format** | **str** | Format of message. | [optional] 
**topic** | **str** | Name of the Pub/Sub topic to publish conversation events like CONVERSATION_STARTED as serialized ConversationEvent protos. For telephony integration to receive notification, make sure either this topic is in the same project as the conversation or you grant &#x60;service-@gcp-sa-dialogflow.iam.gserviceaccount.com&#x60; the &#x60;Dialogflow Service Agent&#x60; role in the topic project. For chat integration to receive notification, make sure API caller has been granted the &#x60;Dialogflow Service Agent&#x60; role for the topic. Format: &#x60;projects//locations//topics/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_notification_config import GoogleCloudDialogflowV2beta1NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1NotificationConfig from a JSON string
google_cloud_dialogflow_v2beta1_notification_config_instance = GoogleCloudDialogflowV2beta1NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1NotificationConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_notification_config_dict = google_cloud_dialogflow_v2beta1_notification_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1NotificationConfig from a dict
google_cloud_dialogflow_v2beta1_notification_config_from_dict = GoogleCloudDialogflowV2beta1NotificationConfig.from_dict(google_cloud_dialogflow_v2beta1_notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


