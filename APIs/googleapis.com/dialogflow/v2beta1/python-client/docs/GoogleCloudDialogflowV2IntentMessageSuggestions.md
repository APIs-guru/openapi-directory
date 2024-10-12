# GoogleCloudDialogflowV2IntentMessageSuggestions

The collection of suggestions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggestions** | [**List[GoogleCloudDialogflowV2IntentMessageSuggestion]**](GoogleCloudDialogflowV2IntentMessageSuggestion.md) | Required. The list of suggested replies. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_suggestions import GoogleCloudDialogflowV2IntentMessageSuggestions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageSuggestions from a JSON string
google_cloud_dialogflow_v2_intent_message_suggestions_instance = GoogleCloudDialogflowV2IntentMessageSuggestions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageSuggestions.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_suggestions_dict = google_cloud_dialogflow_v2_intent_message_suggestions_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageSuggestions from a dict
google_cloud_dialogflow_v2_intent_message_suggestions_from_dict = GoogleCloudDialogflowV2IntentMessageSuggestions.from_dict(google_cloud_dialogflow_v2_intent_message_suggestions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


