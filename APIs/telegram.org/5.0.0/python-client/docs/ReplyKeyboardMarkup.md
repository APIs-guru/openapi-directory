# ReplyKeyboardMarkup

This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyboard** | **List[List[KeyboardButton]]** | Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api/#keyboardbutton) objects | 
**one_time_keyboard** | **bool** | *Optional*. Requests clients to hide the keyboard as soon as it&#39;s been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to *false*. | [optional] [default to False]
**resize_keyboard** | **bool** | *Optional*. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to *false*, in which case the custom keyboard is always of the same height as the app&#39;s standard keyboard. | [optional] [default to False]
**selective** | **bool** | *Optional*. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot&#39;s message is a reply (has *reply\\_to\\_message\\_id*), sender of the original message.    *Example:* A user requests to change the bot&#39;s language, bot replies to the request with a keyboard to select the new language. Other users in the group don&#39;t see the keyboard. | [optional] 

## Example

```python
from openapi_client.models.reply_keyboard_markup import ReplyKeyboardMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of ReplyKeyboardMarkup from a JSON string
reply_keyboard_markup_instance = ReplyKeyboardMarkup.from_json(json)
# print the JSON string representation of the object
print(ReplyKeyboardMarkup.to_json())

# convert the object into a dict
reply_keyboard_markup_dict = reply_keyboard_markup_instance.to_dict()
# create an instance of ReplyKeyboardMarkup from a dict
reply_keyboard_markup_from_dict = ReplyKeyboardMarkup.from_dict(reply_keyboard_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


