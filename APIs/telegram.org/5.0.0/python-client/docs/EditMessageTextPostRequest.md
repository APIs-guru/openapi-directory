# EditMessageTextPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**EditMessageCaptionPostRequestChatId**](EditMessageCaptionPostRequestChatId.md) |  | [optional] 
**disable_web_page_preview** | **bool** | Disables link previews for links in this message | [optional] 
**entities** | [**List[MessageEntity]**](MessageEntity.md) | List of special entities that appear in message text, which can be specified instead of *parse\\_mode* | [optional] 
**inline_message_id** | **str** | Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message | [optional] 
**message_id** | **int** | Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit | [optional] 
**parse_mode** | **str** | Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**text** | **str** | New text of the message, 1-4096 characters after entities parsing | 

## Example

```python
from openapi_client.models.edit_message_text_post_request import EditMessageTextPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditMessageTextPostRequest from a JSON string
edit_message_text_post_request_instance = EditMessageTextPostRequest.from_json(json)
# print the JSON string representation of the object
print(EditMessageTextPostRequest.to_json())

# convert the object into a dict
edit_message_text_post_request_dict = edit_message_text_post_request_instance.to_dict()
# create an instance of EditMessageTextPostRequest from a dict
edit_message_text_post_request_from_dict = EditMessageTextPostRequest.from_dict(edit_message_text_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


