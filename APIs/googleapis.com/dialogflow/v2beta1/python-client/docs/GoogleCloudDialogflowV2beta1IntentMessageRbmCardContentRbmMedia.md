# GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia

Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_uri** | **str** | Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. | [optional] 
**height** | **str** | Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored. | [optional] 
**thumbnail_uri** | **str** | Optional. Publicly reachable URI of the thumbnail.If you don&#39;t provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user&#39;s device downloads the file. Depending on the user&#39;s setting, the file may not download automatically and may require the user to tap a download button. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media import GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_rbm_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


