# GoogleCloudDialogflowV2beta1IntentMessageCard

The card response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buttons** | [**List[GoogleCloudDialogflowV2beta1IntentMessageCardButton]**](GoogleCloudDialogflowV2beta1IntentMessageCardButton.md) | Optional. The collection of card buttons. | [optional] 
**image_uri** | **str** | Optional. The public URI to an image file for the card. | [optional] 
**subtitle** | **str** | Optional. The subtitle of the card. | [optional] 
**title** | **str** | Optional. The title of the card. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_card import GoogleCloudDialogflowV2beta1IntentMessageCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCard from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_card_instance = GoogleCloudDialogflowV2beta1IntentMessageCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_card_dict = google_cloud_dialogflow_v2beta1_intent_message_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCard from a dict
google_cloud_dialogflow_v2beta1_intent_message_card_from_dict = GoogleCloudDialogflowV2beta1IntentMessageCard.from_dict(google_cloud_dialogflow_v2beta1_intent_message_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


