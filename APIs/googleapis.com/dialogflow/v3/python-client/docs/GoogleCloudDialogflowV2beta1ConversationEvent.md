# GoogleCloudDialogflowV2beta1ConversationEvent

Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | **str** | Required. The unique identifier of the conversation this notification refers to. Format: &#x60;projects//conversations/&#x60;. | [optional] 
**error_status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**new_message_payload** | [**GoogleCloudDialogflowV2beta1Message**](GoogleCloudDialogflowV2beta1Message.md) |  | [optional] 
**type** | **str** | Required. The type of the event that this notification refers to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_conversation_event import GoogleCloudDialogflowV2beta1ConversationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ConversationEvent from a JSON string
google_cloud_dialogflow_v2beta1_conversation_event_instance = GoogleCloudDialogflowV2beta1ConversationEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ConversationEvent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_conversation_event_dict = google_cloud_dialogflow_v2beta1_conversation_event_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ConversationEvent from a dict
google_cloud_dialogflow_v2beta1_conversation_event_from_dict = GoogleCloudDialogflowV2beta1ConversationEvent.from_dict(google_cloud_dialogflow_v2beta1_conversation_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


