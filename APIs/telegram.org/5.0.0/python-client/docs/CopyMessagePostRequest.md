# CopyMessagePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**caption** | **str** | New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | List of special entities that appear in the new caption, which can be specified instead of *parse\\_mode* | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**from_chat_id** | [**CopyMessagePostRequestFromChatId**](CopyMessagePostRequestFromChatId.md) |  | 
**message_id** | **int** | Message identifier in the chat specified in *from\\_chat\\_id* | 
**parse_mode** | **str** | Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 

## Example

```python
from openapi_client.models.copy_message_post_request import CopyMessagePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyMessagePostRequest from a JSON string
copy_message_post_request_instance = CopyMessagePostRequest.from_json(json)
# print the JSON string representation of the object
print(CopyMessagePostRequest.to_json())

# convert the object into a dict
copy_message_post_request_dict = copy_message_post_request_instance.to_dict()
# create an instance of CopyMessagePostRequest from a dict
copy_message_post_request_from_dict = CopyMessagePostRequest.from_dict(copy_message_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


