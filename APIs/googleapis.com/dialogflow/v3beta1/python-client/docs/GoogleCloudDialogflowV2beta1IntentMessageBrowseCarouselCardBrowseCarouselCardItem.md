# GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem

Browsing carousel tile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of the carousel item. Maximum of four lines of text. | [optional] 
**footer** | **str** | Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text. | [optional] 
**image** | [**GoogleCloudDialogflowV2beta1IntentMessageImage**](GoogleCloudDialogflowV2beta1IntentMessageImage.md) |  | [optional] 
**open_uri_action** | [**GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction**](GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction.md) |  | [optional] 
**title** | **str** | Required. Title of the carousel item. Maximum of two lines of text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item import GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item_instance = GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item_dict = google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem from a dict
google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item_from_dict = GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem.from_dict(google_cloud_dialogflow_v2beta1_intent_message_browse_carousel_card_browse_carousel_card_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


