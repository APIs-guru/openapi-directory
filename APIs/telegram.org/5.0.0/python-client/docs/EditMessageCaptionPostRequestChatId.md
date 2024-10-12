# EditMessageCaptionPostRequestChatId

Required if *inline\\_message\\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.edit_message_caption_post_request_chat_id import EditMessageCaptionPostRequestChatId

# TODO update the JSON string below
json = "{}"
# create an instance of EditMessageCaptionPostRequestChatId from a JSON string
edit_message_caption_post_request_chat_id_instance = EditMessageCaptionPostRequestChatId.from_json(json)
# print the JSON string representation of the object
print(EditMessageCaptionPostRequestChatId.to_json())

# convert the object into a dict
edit_message_caption_post_request_chat_id_dict = edit_message_caption_post_request_chat_id_instance.to_dict()
# create an instance of EditMessageCaptionPostRequestChatId from a dict
edit_message_caption_post_request_chat_id_from_dict = EditMessageCaptionPostRequestChatId.from_dict(edit_message_caption_post_request_chat_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


