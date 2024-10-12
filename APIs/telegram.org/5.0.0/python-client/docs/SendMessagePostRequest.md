# SendMessagePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**disable_web_page_preview** | **bool** | Disables link previews for links in this message | [optional] 
**entities** | [**List[MessageEntity]**](MessageEntity.md) | List of special entities that appear in message text, which can be specified instead of *parse\\_mode* | [optional] 
**parse_mode** | **str** | Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 
**text** | **str** | Text of the message to be sent, 1-4096 characters after entities parsing | 

## Example

```python
from openapi_client.models.send_message_post_request import SendMessagePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagePostRequest from a JSON string
send_message_post_request_instance = SendMessagePostRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessagePostRequest.to_json())

# convert the object into a dict
send_message_post_request_dict = send_message_post_request_instance.to_dict()
# create an instance of SendMessagePostRequest from a dict
send_message_post_request_from_dict = SendMessagePostRequest.from_dict(send_message_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


