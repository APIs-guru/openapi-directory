# GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard

Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_content** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent**](GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent.md) |  | [optional] 
**card_orientation** | **str** | Required. Orientation of the card. | [optional] 
**thumbnail_image_alignment** | **str** | Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card import GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_standalone_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


