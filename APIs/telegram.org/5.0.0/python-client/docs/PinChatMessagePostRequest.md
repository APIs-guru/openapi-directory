# PinChatMessagePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. | [optional] 
**message_id** | **int** | Identifier of a message to pin | 

## Example

```python
from openapi_client.models.pin_chat_message_post_request import PinChatMessagePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PinChatMessagePostRequest from a JSON string
pin_chat_message_post_request_instance = PinChatMessagePostRequest.from_json(json)
# print the JSON string representation of the object
print(PinChatMessagePostRequest.to_json())

# convert the object into a dict
pin_chat_message_post_request_dict = pin_chat_message_post_request_instance.to_dict()
# create an instance of PinChatMessagePostRequest from a dict
pin_chat_message_post_request_from_dict = PinChatMessagePostRequest.from_dict(pin_chat_message_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


