# InputTextMessageContent

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a text message to be sent as the result of an inline query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_web_page_preview** | **bool** | *Optional*. Disables link previews for links in the sent message | [optional] 
**entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in message text, which can be specified instead of *parse\\_mode* | [optional] 
**message_text** | **str** | Text of the message to be sent, 1-4096 characters | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 

## Example

```python
from openapi_client.models.input_text_message_content import InputTextMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of InputTextMessageContent from a JSON string
input_text_message_content_instance = InputTextMessageContent.from_json(json)
# print the JSON string representation of the object
print(InputTextMessageContent.to_json())

# convert the object into a dict
input_text_message_content_dict = input_text_message_content_instance.to_dict()
# create an instance of InputTextMessageContent from a dict
input_text_message_content_from_dict = InputTextMessageContent.from_dict(input_text_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


