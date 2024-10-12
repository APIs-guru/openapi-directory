# GoogleCloudDialogflowCxV3ConversationTurnUserInput

The input from the human user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_sentiment_analysis** | **bool** | Whether sentiment analysis is enabled. | [optional] 
**injected_parameters** | **Dict[str, object]** | Parameters that need to be injected into the conversation during intent detection. | [optional] 
**input** | [**GoogleCloudDialogflowCxV3QueryInput**](GoogleCloudDialogflowCxV3QueryInput.md) |  | [optional] 
**is_webhook_enabled** | **bool** | If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_conversation_turn_user_input import GoogleCloudDialogflowCxV3ConversationTurnUserInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ConversationTurnUserInput from a JSON string
google_cloud_dialogflow_cx_v3_conversation_turn_user_input_instance = GoogleCloudDialogflowCxV3ConversationTurnUserInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ConversationTurnUserInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_conversation_turn_user_input_dict = google_cloud_dialogflow_cx_v3_conversation_turn_user_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ConversationTurnUserInput from a dict
google_cloud_dialogflow_cx_v3_conversation_turn_user_input_from_dict = GoogleCloudDialogflowCxV3ConversationTurnUserInput.from_dict(google_cloud_dialogflow_cx_v3_conversation_turn_user_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


