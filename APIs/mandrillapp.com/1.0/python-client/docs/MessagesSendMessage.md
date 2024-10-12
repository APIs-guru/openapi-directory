# MessagesSendMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[MessagesContentResponseAttachmentsInner]**](MessagesContentResponseAttachmentsInner.md) |  | [optional] 
**bcc_address** | **str** |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**global_merge_vars** | [**List[MessagesSendMessageGlobalMergeVarsInner]**](MessagesSendMessageGlobalMergeVarsInner.md) |  | [optional] 
**google_analytics_campaign** | **str** |  | [optional] 
**google_analytics_domains** | **List[str]** |  | [optional] 
**headers** | [**MessagesContentResponseHeaders**](MessagesContentResponseHeaders.md) |  | [optional] 
**html** | **str** |  | [optional] 
**images** | [**List[MessagesContentResponseAttachmentsInner]**](MessagesContentResponseAttachmentsInner.md) |  | [optional] 
**important** | **bool** |  | [optional] 
**merge** | **bool** |  | [optional] 
**merge_vars** | [**List[MessagesSendMessageMergeVarsInner]**](MessagesSendMessageMergeVarsInner.md) |  | [optional] 
**metadata** | [**MessagesSendMessageMetadata**](MessagesSendMessageMetadata.md) |  | [optional] 
**recipient_metadata** | [**List[MessagesSendMessageRecipientMetadataInner]**](MessagesSendMessageRecipientMetadataInner.md) |  | [optional] 
**subaccount** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**text** | **str** |  | [optional] 
**to** | [**List[MessagesSendMessageToInner]**](MessagesSendMessageToInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_message import MessagesSendMessage

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendMessage from a JSON string
messages_send_message_instance = MessagesSendMessage.from_json(json)
# print the JSON string representation of the object
print(MessagesSendMessage.to_json())

# convert the object into a dict
messages_send_message_dict = messages_send_message_instance.to_dict()
# create an instance of MessagesSendMessage from a dict
messages_send_message_from_dict = MessagesSendMessage.from_dict(messages_send_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


