# GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject

Response media object for media content card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_url** | **str** | Required. Url where the media is stored. | [optional] 
**description** | **str** | Optional. Description of media card. | [optional] 
**icon** | [**GoogleCloudDialogflowV2IntentMessageImage**](GoogleCloudDialogflowV2IntentMessageImage.md) |  | [optional] 
**large_image** | [**GoogleCloudDialogflowV2IntentMessageImage**](GoogleCloudDialogflowV2IntentMessageImage.md) |  | [optional] 
**name** | **str** | Required. Name of media card. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_media_content_response_media_object import GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject from a JSON string
google_cloud_dialogflow_v2_intent_message_media_content_response_media_object_instance = GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_media_content_response_media_object_dict = google_cloud_dialogflow_v2_intent_message_media_content_response_media_object_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject from a dict
google_cloud_dialogflow_v2_intent_message_media_content_response_media_object_from_dict = GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject.from_dict(google_cloud_dialogflow_v2_intent_message_media_content_response_media_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


