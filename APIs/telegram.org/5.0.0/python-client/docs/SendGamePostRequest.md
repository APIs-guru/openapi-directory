# SendGamePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | **int** | Unique identifier for the target chat | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**game_short_name** | **str** | Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather). | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 

## Example

```python
from openapi_client.models.send_game_post_request import SendGamePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendGamePostRequest from a JSON string
send_game_post_request_instance = SendGamePostRequest.from_json(json)
# print the JSON string representation of the object
print(SendGamePostRequest.to_json())

# convert the object into a dict
send_game_post_request_dict = send_game_post_request_instance.to_dict()
# create an instance of SendGamePostRequest from a dict
send_game_post_request_from_dict = SendGamePostRequest.from_dict(send_game_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


