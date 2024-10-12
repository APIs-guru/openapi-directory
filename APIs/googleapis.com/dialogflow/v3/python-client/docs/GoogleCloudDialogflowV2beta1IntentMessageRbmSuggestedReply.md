# GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply

Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postback_data** | **str** | Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic. | [optional] 
**text** | **str** | Suggested reply text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply import GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


