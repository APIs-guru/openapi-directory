# InlineKeyboardMarkup

This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline_keyboard** | **List[List[InlineKeyboardButton]]** | Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api/#inlinekeyboardbutton) objects | 

## Example

```python
from openapi_client.models.inline_keyboard_markup import InlineKeyboardMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of InlineKeyboardMarkup from a JSON string
inline_keyboard_markup_instance = InlineKeyboardMarkup.from_json(json)
# print the JSON string representation of the object
print(InlineKeyboardMarkup.to_json())

# convert the object into a dict
inline_keyboard_markup_dict = inline_keyboard_markup_instance.to_dict()
# create an instance of InlineKeyboardMarkup from a dict
inline_keyboard_markup_from_dict = InlineKeyboardMarkup.from_dict(inline_keyboard_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


