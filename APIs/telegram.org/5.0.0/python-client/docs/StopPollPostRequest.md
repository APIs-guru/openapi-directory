# StopPollPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**message_id** | **int** | Identifier of the original message with the poll | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 

## Example

```python
from openapi_client.models.stop_poll_post_request import StopPollPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopPollPostRequest from a JSON string
stop_poll_post_request_instance = StopPollPostRequest.from_json(json)
# print the JSON string representation of the object
print(StopPollPostRequest.to_json())

# convert the object into a dict
stop_poll_post_request_dict = stop_poll_post_request_instance.to_dict()
# create an instance of StopPollPostRequest from a dict
stop_poll_post_request_from_dict = StopPollPostRequest.from_dict(stop_poll_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


