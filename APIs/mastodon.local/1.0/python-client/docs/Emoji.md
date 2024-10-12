# Emoji

Represents a custom emoji.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Used for sorting custom emoji in the picker. | [optional] 
**shortcode** | **str** | The name of the custom emoji. | 
**static_url** | **str** | A link to a static copy of the custom emoji. The format is URL. | 
**url** | **str** | A link to the custom emoji. The format is URL. | 
**visible_in_picker** | **bool** | Whether this Emoji should be visible in the picker or unlisted. | 

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


