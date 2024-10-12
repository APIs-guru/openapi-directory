# MessageEntity

This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | *Optional*. For “pre” only, the programming language of the entity text | [optional] 
**length** | **int** | Length of the entity in UTF-16 code units | 
**offset** | **int** | Offset in UTF-16 code units to the start of the entity | 
**type** | **str** | Type of the entity. Can be “mention” (&#x60;@username&#x60;), “hashtag” (&#x60;#hashtag&#x60;), “cashtag” (&#x60;$USD&#x60;), “bot\\_command” (&#x60;/start@jobs_bot&#x60;), “url” (&#x60;https://telegram.org&#x60;), “email” (&#x60;do-not-reply@telegram.org&#x60;), “phone\\_number” (&#x60;+1-212-555-0123&#x60;), “bold” (**bold text**), “italic” (*italic text*), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text\\_link” (for clickable text URLs), “text\\_mention” (for users [without usernames](https://telegram.org/blog/edit#new-mentions)) | 
**url** | **str** | *Optional*. For “text\\_link” only, url that will be opened after user taps on the text | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_entity import MessageEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEntity from a JSON string
message_entity_instance = MessageEntity.from_json(json)
# print the JSON string representation of the object
print(MessageEntity.to_json())

# convert the object into a dict
message_entity_dict = message_entity_instance.to_dict()
# create an instance of MessageEntity from a dict
message_entity_from_dict = MessageEntity.from_dict(message_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


