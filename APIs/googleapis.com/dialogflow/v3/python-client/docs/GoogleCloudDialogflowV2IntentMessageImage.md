# GoogleCloudDialogflowV2IntentMessageImage

The image response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility_text** | **str** | Optional. A text description of the image to be used for accessibility, e.g., screen readers. | [optional] 
**image_uri** | **str** | Optional. The public URI to an image file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_image import GoogleCloudDialogflowV2IntentMessageImage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageImage from a JSON string
google_cloud_dialogflow_v2_intent_message_image_instance = GoogleCloudDialogflowV2IntentMessageImage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageImage.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_image_dict = google_cloud_dialogflow_v2_intent_message_image_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageImage from a dict
google_cloud_dialogflow_v2_intent_message_image_from_dict = GoogleCloudDialogflowV2IntentMessageImage.from_dict(google_cloud_dialogflow_v2_intent_message_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


