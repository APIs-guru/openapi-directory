# GoogleCloudDialogflowV2beta1IntentMessageImage

The image response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility_text** | **str** | A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect. | [optional] 
**image_uri** | **str** | Optional. The public URI to an image file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_image import GoogleCloudDialogflowV2beta1IntentMessageImage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageImage from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_image_instance = GoogleCloudDialogflowV2beta1IntentMessageImage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageImage.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_image_dict = google_cloud_dialogflow_v2beta1_intent_message_image_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageImage from a dict
google_cloud_dialogflow_v2beta1_intent_message_image_from_dict = GoogleCloudDialogflowV2beta1IntentMessageImage.from_dict(google_cloud_dialogflow_v2beta1_intent_message_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


