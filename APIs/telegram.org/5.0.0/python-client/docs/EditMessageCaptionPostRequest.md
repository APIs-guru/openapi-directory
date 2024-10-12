# EditMessageCaptionPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | New caption of the message, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**chat_id** | [**EditMessageCaptionPostRequestChatId**](EditMessageCaptionPostRequestChatId.md) |  | [optional] 
**inline_message_id** | **str** | Required if *chat\\_id* and *message\\_id* are not specified. Identifier of the inline message | [optional] 
**message_id** | **int** | Required if *inline\\_message\\_id* is not specified. Identifier of the message to edit | [optional] 
**parse_mode** | **str** | Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 

## Example

```python
from openapi_client.models.edit_message_caption_post_request import EditMessageCaptionPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditMessageCaptionPostRequest from a JSON string
edit_message_caption_post_request_instance = EditMessageCaptionPostRequest.from_json(json)
# print the JSON string representation of the object
print(EditMessageCaptionPostRequest.to_json())

# convert the object into a dict
edit_message_caption_post_request_dict = edit_message_caption_post_request_instance.to_dict()
# create an instance of EditMessageCaptionPostRequest from a dict
edit_message_caption_post_request_from_dict = EditMessageCaptionPostRequest.from_dict(edit_message_caption_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


