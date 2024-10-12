# GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion

Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction.md) |  | [optional] 
**reply** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion import GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


