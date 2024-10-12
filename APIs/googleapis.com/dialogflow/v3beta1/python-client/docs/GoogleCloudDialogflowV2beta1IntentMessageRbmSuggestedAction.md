# GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction

Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dial** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial.md) |  | [optional] 
**open_url** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri.md) |  | [optional] 
**postback_data** | **str** | Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic. | [optional] 
**share_location** | **object** | Opens the device&#39;s location chooser so the user can pick a location to send back to the agent. | [optional] 
**text** | **str** | Text to display alongside the action. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action import GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


