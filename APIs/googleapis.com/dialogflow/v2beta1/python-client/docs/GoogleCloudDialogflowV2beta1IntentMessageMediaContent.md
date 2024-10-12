# GoogleCloudDialogflowV2beta1IntentMessageMediaContent

The media content card for Actions on Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_objects** | [**List[GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject]**](GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject.md) | Required. List of media objects. | [optional] 
**media_type** | **str** | Optional. What type of media is the content (ie \&quot;audio\&quot;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_media_content import GoogleCloudDialogflowV2beta1IntentMessageMediaContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageMediaContent from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_media_content_instance = GoogleCloudDialogflowV2beta1IntentMessageMediaContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageMediaContent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_media_content_dict = google_cloud_dialogflow_v2beta1_intent_message_media_content_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageMediaContent from a dict
google_cloud_dialogflow_v2beta1_intent_message_media_content_from_dict = GoogleCloudDialogflowV2beta1IntentMessageMediaContent.from_dict(google_cloud_dialogflow_v2beta1_intent_message_media_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


