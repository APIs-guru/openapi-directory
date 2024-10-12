# GoogleCloudDialogflowV2beta1IntentMessage

Corresponds to the `Response` field in the Dialogflow console.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_card** | [**GoogleCloudDialogflowV2beta1IntentMessageBasicCard**](GoogleCloudDialogflowV2beta1IntentMessageBasicCard.md) |  | [optional] 
**browse_carousel_card** | [**GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard**](GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard.md) |  | [optional] 
**card** | [**GoogleCloudDialogflowV2beta1IntentMessageCard**](GoogleCloudDialogflowV2beta1IntentMessageCard.md) |  | [optional] 
**carousel_select** | [**GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect**](GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect.md) |  | [optional] 
**image** | [**GoogleCloudDialogflowV2beta1IntentMessageImage**](GoogleCloudDialogflowV2beta1IntentMessageImage.md) |  | [optional] 
**link_out_suggestion** | [**GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion**](GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion.md) |  | [optional] 
**list_select** | [**GoogleCloudDialogflowV2beta1IntentMessageListSelect**](GoogleCloudDialogflowV2beta1IntentMessageListSelect.md) |  | [optional] 
**media_content** | [**GoogleCloudDialogflowV2beta1IntentMessageMediaContent**](GoogleCloudDialogflowV2beta1IntentMessageMediaContent.md) |  | [optional] 
**payload** | **Dict[str, object]** | A custom platform-specific response. | [optional] 
**platform** | **str** | Optional. The platform that this message is intended for. | [optional] 
**quick_replies** | [**GoogleCloudDialogflowV2beta1IntentMessageQuickReplies**](GoogleCloudDialogflowV2beta1IntentMessageQuickReplies.md) |  | [optional] 
**rbm_carousel_rich_card** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard**](GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.md) |  | [optional] 
**rbm_standalone_rich_card** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard**](GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.md) |  | [optional] 
**rbm_text** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmText**](GoogleCloudDialogflowV2beta1IntentMessageRbmText.md) |  | [optional] 
**simple_responses** | [**GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses**](GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses.md) |  | [optional] 
**suggestions** | [**GoogleCloudDialogflowV2beta1IntentMessageSuggestions**](GoogleCloudDialogflowV2beta1IntentMessageSuggestions.md) |  | [optional] 
**table_card** | [**GoogleCloudDialogflowV2beta1IntentMessageTableCard**](GoogleCloudDialogflowV2beta1IntentMessageTableCard.md) |  | [optional] 
**telephony_play_audio** | [**GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio**](GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio.md) |  | [optional] 
**telephony_synthesize_speech** | [**GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech**](GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech.md) |  | [optional] 
**telephony_transfer_call** | [**GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall**](GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall.md) |  | [optional] 
**text** | [**GoogleCloudDialogflowV2beta1IntentMessageText**](GoogleCloudDialogflowV2beta1IntentMessageText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message import GoogleCloudDialogflowV2beta1IntentMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessage from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_instance = GoogleCloudDialogflowV2beta1IntentMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessage.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_dict = google_cloud_dialogflow_v2beta1_intent_message_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessage from a dict
google_cloud_dialogflow_v2beta1_intent_message_from_dict = GoogleCloudDialogflowV2beta1IntentMessage.from_dict(google_cloud_dialogflow_v2beta1_intent_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


