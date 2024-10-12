# InlineKeyboardButton

This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_data** | **str** | *Optional*. Data to be sent in a [callback query](https://core.telegram.org/bots/api/#callbackquery) to the bot when button is pressed, 1-64 bytes | [optional] 
**callback_game** | **object** | A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game. | [optional] 
**login_url** | [**LoginUrl**](LoginUrl.md) |  | [optional] 
**pay** | **bool** | *Optional*. Specify True, to send a [Pay button](https://core.telegram.org/bots/api/#payments).    **NOTE:** This type of button **must** always be the first button in the first row. | [optional] 
**switch_inline_query** | **str** | *Optional*. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot&#39;s username and the specified inline query in the input field. Can be empty, in which case just the bot&#39;s username will be inserted.    **Note:** This offers an easy way for users to start using your bot in [inline mode](/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [*switch\\_pm…*](https://core.telegram.org/bots/api/#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. | [optional] 
**switch_inline_query_current_chat** | **str** | *Optional*. If set, pressing the button will insert the bot&#39;s username and the specified inline query in the current chat&#39;s input field. Can be empty, in which case only the bot&#39;s username will be inserted.    This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options. | [optional] 
**text** | **str** | Label text on the button | 
**url** | **str** | *Optional*. HTTP or tg:// url to be opened when button is pressed | [optional] 

## Example

```python
from openapi_client.models.inline_keyboard_button import InlineKeyboardButton

# TODO update the JSON string below
json = "{}"
# create an instance of InlineKeyboardButton from a JSON string
inline_keyboard_button_instance = InlineKeyboardButton.from_json(json)
# print the JSON string representation of the object
print(InlineKeyboardButton.to_json())

# convert the object into a dict
inline_keyboard_button_dict = inline_keyboard_button_instance.to_dict()
# create an instance of InlineKeyboardButton from a dict
inline_keyboard_button_from_dict = InlineKeyboardButton.from_dict(inline_keyboard_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


