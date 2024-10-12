# GoogleCloudDialogflowV2IntentMessageCarouselSelectItem

An item in the carousel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The body text of the card. | [optional] 
**image** | [**GoogleCloudDialogflowV2IntentMessageImage**](GoogleCloudDialogflowV2IntentMessageImage.md) |  | [optional] 
**info** | [**GoogleCloudDialogflowV2IntentMessageSelectItemInfo**](GoogleCloudDialogflowV2IntentMessageSelectItemInfo.md) |  | [optional] 
**title** | **str** | Required. Title of the carousel item. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_carousel_select_item import GoogleCloudDialogflowV2IntentMessageCarouselSelectItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageCarouselSelectItem from a JSON string
google_cloud_dialogflow_v2_intent_message_carousel_select_item_instance = GoogleCloudDialogflowV2IntentMessageCarouselSelectItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageCarouselSelectItem.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_carousel_select_item_dict = google_cloud_dialogflow_v2_intent_message_carousel_select_item_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageCarouselSelectItem from a dict
google_cloud_dialogflow_v2_intent_message_carousel_select_item_from_dict = GoogleCloudDialogflowV2IntentMessageCarouselSelectItem.from_dict(google_cloud_dialogflow_v2_intent_message_carousel_select_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


