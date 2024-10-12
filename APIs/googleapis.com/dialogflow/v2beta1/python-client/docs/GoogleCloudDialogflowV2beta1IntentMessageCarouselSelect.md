# GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect

The card for presenting a carousel of options to select from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem]**](GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem.md) | Required. Carousel items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_carousel_select import GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_carousel_select_instance = GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_carousel_select_dict = google_cloud_dialogflow_v2beta1_intent_message_carousel_select_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect from a dict
google_cloud_dialogflow_v2beta1_intent_message_carousel_select_from_dict = GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect.from_dict(google_cloud_dialogflow_v2beta1_intent_message_carousel_select_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


