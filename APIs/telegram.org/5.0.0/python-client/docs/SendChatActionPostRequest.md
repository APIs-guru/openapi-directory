# SendChatActionPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\\_video* or *upload\\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\\_voice* or *upload\\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\\_video\\_note* or *upload\\_video\\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote). | 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 

## Example

```python
from openapi_client.models.send_chat_action_post_request import SendChatActionPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendChatActionPostRequest from a JSON string
send_chat_action_post_request_instance = SendChatActionPostRequest.from_json(json)
# print the JSON string representation of the object
print(SendChatActionPostRequest.to_json())

# convert the object into a dict
send_chat_action_post_request_dict = send_chat_action_post_request_instance.to_dict()
# create an instance of SendChatActionPostRequest from a dict
send_chat_action_post_request_from_dict = SendChatActionPostRequest.from_dict(send_chat_action_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


