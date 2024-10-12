# GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri

Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The uri to open on the user device | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri import GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_open_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


