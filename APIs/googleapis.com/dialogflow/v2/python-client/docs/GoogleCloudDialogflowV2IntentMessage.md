# GoogleCloudDialogflowV2IntentMessage

A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_card** | [**GoogleCloudDialogflowV2IntentMessageBasicCard**](GoogleCloudDialogflowV2IntentMessageBasicCard.md) |  | [optional] 
**browse_carousel_card** | [**GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard**](GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard.md) |  | [optional] 
**card** | [**GoogleCloudDialogflowV2IntentMessageCard**](GoogleCloudDialogflowV2IntentMessageCard.md) |  | [optional] 
**carousel_select** | [**GoogleCloudDialogflowV2IntentMessageCarouselSelect**](GoogleCloudDialogflowV2IntentMessageCarouselSelect.md) |  | [optional] 
**image** | [**GoogleCloudDialogflowV2IntentMessageImage**](GoogleCloudDialogflowV2IntentMessageImage.md) |  | [optional] 
**link_out_suggestion** | [**GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion**](GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion.md) |  | [optional] 
**list_select** | [**GoogleCloudDialogflowV2IntentMessageListSelect**](GoogleCloudDialogflowV2IntentMessageListSelect.md) |  | [optional] 
**media_content** | [**GoogleCloudDialogflowV2IntentMessageMediaContent**](GoogleCloudDialogflowV2IntentMessageMediaContent.md) |  | [optional] 
**payload** | **Dict[str, object]** | A custom platform-specific response. | [optional] 
**platform** | **str** | Optional. The platform that this message is intended for. | [optional] 
**quick_replies** | [**GoogleCloudDialogflowV2IntentMessageQuickReplies**](GoogleCloudDialogflowV2IntentMessageQuickReplies.md) |  | [optional] 
**simple_responses** | [**GoogleCloudDialogflowV2IntentMessageSimpleResponses**](GoogleCloudDialogflowV2IntentMessageSimpleResponses.md) |  | [optional] 
**suggestions** | [**GoogleCloudDialogflowV2IntentMessageSuggestions**](GoogleCloudDialogflowV2IntentMessageSuggestions.md) |  | [optional] 
**table_card** | [**GoogleCloudDialogflowV2IntentMessageTableCard**](GoogleCloudDialogflowV2IntentMessageTableCard.md) |  | [optional] 
**text** | [**GoogleCloudDialogflowV2IntentMessageText**](GoogleCloudDialogflowV2IntentMessageText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message import GoogleCloudDialogflowV2IntentMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessage from a JSON string
google_cloud_dialogflow_v2_intent_message_instance = GoogleCloudDialogflowV2IntentMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessage.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_dict = google_cloud_dialogflow_v2_intent_message_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessage from a dict
google_cloud_dialogflow_v2_intent_message_from_dict = GoogleCloudDialogflowV2IntentMessage.from_dict(google_cloud_dialogflow_v2_intent_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


