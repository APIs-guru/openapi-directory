# GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton

The button object that appears at the bottom of a card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open_uri_action** | [**GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction**](GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction.md) |  | [optional] 
**title** | **str** | Required. The title of the button. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_basic_card_button import GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_basic_card_button_instance = GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_basic_card_button_dict = google_cloud_dialogflow_v2beta1_intent_message_basic_card_button_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton from a dict
google_cloud_dialogflow_v2beta1_intent_message_basic_card_button_from_dict = GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton.from_dict(google_cloud_dialogflow_v2beta1_intent_message_basic_card_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


