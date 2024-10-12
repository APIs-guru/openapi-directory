# ReplyKeyboardRemove

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_keyboard** | **bool** | Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use *one\\_time\\_keyboard* in [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)) | 
**selective** | **bool** | *Optional*. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot&#39;s message is a reply (has *reply\\_to\\_message\\_id*), sender of the original message.    *Example:* A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven&#39;t voted yet. | [optional] 

## Example

```python
from openapi_client.models.reply_keyboard_remove import ReplyKeyboardRemove

# TODO update the JSON string below
json = "{}"
# create an instance of ReplyKeyboardRemove from a JSON string
reply_keyboard_remove_instance = ReplyKeyboardRemove.from_json(json)
# print the JSON string representation of the object
print(ReplyKeyboardRemove.to_json())

# convert the object into a dict
reply_keyboard_remove_dict = reply_keyboard_remove_instance.to_dict()
# create an instance of ReplyKeyboardRemove from a dict
reply_keyboard_remove_from_dict = ReplyKeyboardRemove.from_dict(reply_keyboard_remove_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


