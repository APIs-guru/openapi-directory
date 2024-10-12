# GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard

Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_display_options** | **str** | Optional. Settings for displaying the image. Applies to every image in items. | [optional] 
**items** | [**List[GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem]**](GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem.md) | Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card import GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_instance = GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_dict = google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard from a dict
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_from_dict = GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard.from_dict(google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


