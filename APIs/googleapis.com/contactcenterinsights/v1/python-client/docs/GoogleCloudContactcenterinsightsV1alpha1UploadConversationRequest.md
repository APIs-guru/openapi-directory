# GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest

Request to upload a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**GoogleCloudContactcenterinsightsV1alpha1Conversation**](GoogleCloudContactcenterinsightsV1alpha1Conversation.md) |  | [optional] 
**conversation_id** | **str** | Optional. A unique ID for the new conversation. This ID will become the final component of the conversation&#39;s resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression &#x60;^[a-z0-9-]{4,64}$&#x60;. Valid characters are &#x60;a-z-&#x60; | [optional] 
**parent** | **str** | Required. The parent resource of the conversation. | [optional] 
**redaction_config** | [**GoogleCloudContactcenterinsightsV1alpha1RedactionConfig**](GoogleCloudContactcenterinsightsV1alpha1RedactionConfig.md) |  | [optional] 
**speech_config** | [**GoogleCloudContactcenterinsightsV1alpha1SpeechConfig**](GoogleCloudContactcenterinsightsV1alpha1SpeechConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request import GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request_instance = GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request_dict = google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_upload_conversation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


