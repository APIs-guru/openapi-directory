# GoogleCloudDialogflowV2IntentMessageSuggestion

The suggestion chip message that the user can tap to quickly post a reply to the conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Required. The text shown the in the suggestion chip. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_suggestion import GoogleCloudDialogflowV2IntentMessageSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageSuggestion from a JSON string
google_cloud_dialogflow_v2_intent_message_suggestion_instance = GoogleCloudDialogflowV2IntentMessageSuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageSuggestion.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_suggestion_dict = google_cloud_dialogflow_v2_intent_message_suggestion_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageSuggestion from a dict
google_cloud_dialogflow_v2_intent_message_suggestion_from_dict = GoogleCloudDialogflowV2IntentMessageSuggestion.from_dict(google_cloud_dialogflow_v2_intent_message_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


