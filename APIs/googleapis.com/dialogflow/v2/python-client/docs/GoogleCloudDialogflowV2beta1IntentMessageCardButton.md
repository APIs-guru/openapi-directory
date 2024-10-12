# GoogleCloudDialogflowV2beta1IntentMessageCardButton

Optional. Contains information about a button.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postback** | **str** | Optional. The text to send back to the Dialogflow API or a URI to open. | [optional] 
**text** | **str** | Optional. The text to show on the button. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_card_button import GoogleCloudDialogflowV2beta1IntentMessageCardButton

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCardButton from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_card_button_instance = GoogleCloudDialogflowV2beta1IntentMessageCardButton.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageCardButton.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_card_button_dict = google_cloud_dialogflow_v2beta1_intent_message_card_button_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCardButton from a dict
google_cloud_dialogflow_v2beta1_intent_message_card_button_from_dict = GoogleCloudDialogflowV2beta1IntentMessageCardButton.from_dict(google_cloud_dialogflow_v2beta1_intent_message_card_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


