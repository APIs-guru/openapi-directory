# Emoji

An emoji that is used as a reaction to a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_emoji** | [**CustomEmoji**](CustomEmoji.md) |  | [optional] 
**unicode** | **str** | A basic emoji represented by a unicode string. | [optional] 

## Example

```python
from openapi_client.models.emoji import Emoji

# TODO update the JSON string below
json = "{}"
# create an instance of Emoji from a JSON string
emoji_instance = Emoji.from_json(json)
# print the JSON string representation of the object
print(Emoji.to_json())

# convert the object into a dict
emoji_dict = emoji_instance.to_dict()
# create an instance of Emoji from a dict
emoji_from_dict = Emoji.from_dict(emoji_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


