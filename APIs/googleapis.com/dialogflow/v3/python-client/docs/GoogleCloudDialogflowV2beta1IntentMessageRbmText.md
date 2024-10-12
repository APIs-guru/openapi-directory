# GoogleCloudDialogflowV2beta1IntentMessageRbmText

Rich Business Messaging (RBM) text response with suggestions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rbm_suggestion** | [**List[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion.md) | Optional. One or more suggestions to show to the user. | [optional] 
**text** | **str** | Required. Text sent and displayed to the user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_text import GoogleCloudDialogflowV2beta1IntentMessageRbmText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmText from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_text_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmText.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmText.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_text_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_text_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmText from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_text_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmText.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


