# GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard

Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_contents** | [**List[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent]**](GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent.md) | Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10. | [optional] 
**card_width** | **str** | Required. The width of the cards in the carousel. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card import GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_carousel_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


