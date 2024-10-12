# GoogleCloudDialogflowV2IntentMessageMediaContent

The media content card for Actions on Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_objects** | [**List[GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject]**](GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject.md) | Required. List of media objects. | [optional] 
**media_type** | **str** | Optional. What type of media is the content (ie \&quot;audio\&quot;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_media_content import GoogleCloudDialogflowV2IntentMessageMediaContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageMediaContent from a JSON string
google_cloud_dialogflow_v2_intent_message_media_content_instance = GoogleCloudDialogflowV2IntentMessageMediaContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageMediaContent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_media_content_dict = google_cloud_dialogflow_v2_intent_message_media_content_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageMediaContent from a dict
google_cloud_dialogflow_v2_intent_message_media_content_from_dict = GoogleCloudDialogflowV2IntentMessageMediaContent.from_dict(google_cloud_dialogflow_v2_intent_message_media_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


