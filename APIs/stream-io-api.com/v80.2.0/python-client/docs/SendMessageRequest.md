# SendMessageRequest

Contains all information needed to send new message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_moderation** | **bool** | Enable moderation on server-side requests | [optional] 
**is_pending_message** | **bool** | Make the message a pending message. This message will not be viewable to others until it is committed. | [optional] 
**keep_channel_hidden** | **bool** | Keeps the channel hidden for the sender | [optional] 
**message** | [**MessageRequest**](MessageRequest.md) |  | 
**pending_message_metadata** | **Dict[str, str]** |  | [optional] 
**skip_enrich_url** | **bool** | Do not try to enrich the links within message | [optional] 
**skip_push** | **bool** | Disables all push notifications for this message | [optional] 

## Example

```python
from openapi_client.models.send_message_request import SendMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageRequest from a JSON string
send_message_request_instance = SendMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessageRequest.to_json())

# convert the object into a dict
send_message_request_dict = send_message_request_instance.to_dict()
# create an instance of SendMessageRequest from a dict
send_message_request_from_dict = SendMessageRequest.from_dict(send_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


