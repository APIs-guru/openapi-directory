# GoogleCloudDialogflowV2IntentSuggestion

Represents an intent suggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. | [optional] 
**display_name** | **str** | The display name of the intent. | [optional] 
**intent_v2** | **str** | The unique identifier of this intent. Format: &#x60;projects//locations//agent/intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_suggestion import GoogleCloudDialogflowV2IntentSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentSuggestion from a JSON string
google_cloud_dialogflow_v2_intent_suggestion_instance = GoogleCloudDialogflowV2IntentSuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentSuggestion.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_suggestion_dict = google_cloud_dialogflow_v2_intent_suggestion_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentSuggestion from a dict
google_cloud_dialogflow_v2_intent_suggestion_from_dict = GoogleCloudDialogflowV2IntentSuggestion.from_dict(google_cloud_dialogflow_v2_intent_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


