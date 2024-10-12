# GoogleCloudContactcenterinsightsV1UploadConversationRequest

Request to upload a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**GoogleCloudContactcenterinsightsV1Conversation**](GoogleCloudContactcenterinsightsV1Conversation.md) |  | [optional] 
**conversation_id** | **str** | Optional. A unique ID for the new conversation. This ID will become the final component of the conversation&#39;s resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression &#x60;^[a-z0-9-]{4,64}$&#x60;. Valid characters are &#x60;a-z-&#x60; | [optional] 
**parent** | **str** | Required. The parent resource of the conversation. | [optional] 
**redaction_config** | [**GoogleCloudContactcenterinsightsV1RedactionConfig**](GoogleCloudContactcenterinsightsV1RedactionConfig.md) |  | [optional] 
**speech_config** | [**GoogleCloudContactcenterinsightsV1SpeechConfig**](GoogleCloudContactcenterinsightsV1SpeechConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_upload_conversation_request import GoogleCloudContactcenterinsightsV1UploadConversationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1UploadConversationRequest from a JSON string
google_cloud_contactcenterinsights_v1_upload_conversation_request_instance = GoogleCloudContactcenterinsightsV1UploadConversationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1UploadConversationRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_upload_conversation_request_dict = google_cloud_contactcenterinsights_v1_upload_conversation_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1UploadConversationRequest from a dict
google_cloud_contactcenterinsights_v1_upload_conversation_request_from_dict = GoogleCloudContactcenterinsightsV1UploadConversationRequest.from_dict(google_cloud_contactcenterinsights_v1_upload_conversation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


