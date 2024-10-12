# GoogleCloudDialogflowV2beta1IntentMessageBasicCard

The basic card message. Useful for displaying information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buttons** | [**List[GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton]**](GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton.md) | Optional. The collection of card buttons. | [optional] 
**formatted_text** | **str** | Required, unless image is present. The body text of the card. | [optional] 
**image** | [**GoogleCloudDialogflowV2beta1IntentMessageImage**](GoogleCloudDialogflowV2beta1IntentMessageImage.md) |  | [optional] 
**subtitle** | **str** | Optional. The subtitle of the card. | [optional] 
**title** | **str** | Optional. The title of the card. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_basic_card import GoogleCloudDialogflowV2beta1IntentMessageBasicCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBasicCard from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_basic_card_instance = GoogleCloudDialogflowV2beta1IntentMessageBasicCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageBasicCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_basic_card_dict = google_cloud_dialogflow_v2beta1_intent_message_basic_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBasicCard from a dict
google_cloud_dialogflow_v2beta1_intent_message_basic_card_from_dict = GoogleCloudDialogflowV2beta1IntentMessageBasicCard.from_dict(google_cloud_dialogflow_v2beta1_intent_message_basic_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


