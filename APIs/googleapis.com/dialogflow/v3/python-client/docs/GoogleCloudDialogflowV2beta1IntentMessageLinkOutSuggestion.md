# GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion

The suggestion chip message that allows the user to jump out to the app or website associated with this agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_name** | **str** | Required. The name of the app or site this chip is linking to. | [optional] 
**uri** | **str** | Required. The URI of the app or site to open when the user taps the suggestion chip. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion import GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion_instance = GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion_dict = google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion from a dict
google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion_from_dict = GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion.from_dict(google_cloud_dialogflow_v2beta1_intent_message_link_out_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


