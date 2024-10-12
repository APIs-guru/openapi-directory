# SendDicePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**emoji** | **str** | Emoji on which the dice throw animation is based. Currently, must be one of “&lt;img alt&#x3D;\&quot;🎲\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB2.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, “&lt;img alt&#x3D;\&quot;🎯\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EAF.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, “&lt;img alt&#x3D;\&quot;🏀\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8F80.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, “&lt;img alt&#x3D;\&quot;⚽\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/E29ABD.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, or “&lt;img alt&#x3D;\&quot;🎰\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB0.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”. Dice can have values 1-6 for “&lt;img alt&#x3D;\&quot;🎲\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB2.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” and “&lt;img alt&#x3D;\&quot;🎯\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EAF.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, values 1-5 for “&lt;img alt&#x3D;\&quot;🏀\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8F80.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” and “&lt;img alt&#x3D;\&quot;⚽\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/E29ABD.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”, and values 1-64 for “&lt;img alt&#x3D;\&quot;🎰\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB0.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;”. Defaults to “&lt;img alt&#x3D;\&quot;🎲\&quot; src&#x3D;\&quot;//telegram.org/img/emoji/40/F09F8EB2.png\&quot; height&#x3D;\&quot;20\&quot; width&#x3D;\&quot;20\&quot; /&gt;” | [optional] [default to '🎲']
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 

## Example

```python
from openapi_client.models.send_dice_post_request import SendDicePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendDicePostRequest from a JSON string
send_dice_post_request_instance = SendDicePostRequest.from_json(json)
# print the JSON string representation of the object
print(SendDicePostRequest.to_json())

# convert the object into a dict
send_dice_post_request_dict = send_dice_post_request_instance.to_dict()
# create an instance of SendDicePostRequest from a dict
send_dice_post_request_from_dict = SendDicePostRequest.from_dict(send_dice_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


