# GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial

Opens the user's default dialer app with the specified phone number but does not dial automatically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial import GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_suggested_action_rbm_suggested_action_dial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


