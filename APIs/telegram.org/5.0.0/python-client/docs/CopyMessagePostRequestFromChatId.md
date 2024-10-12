# CopyMessagePostRequestFromChatId

Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.copy_message_post_request_from_chat_id import CopyMessagePostRequestFromChatId

# TODO update the JSON string below
json = "{}"
# create an instance of CopyMessagePostRequestFromChatId from a JSON string
copy_message_post_request_from_chat_id_instance = CopyMessagePostRequestFromChatId.from_json(json)
# print the JSON string representation of the object
print(CopyMessagePostRequestFromChatId.to_json())

# convert the object into a dict
copy_message_post_request_from_chat_id_dict = copy_message_post_request_from_chat_id_instance.to_dict()
# create an instance of CopyMessagePostRequestFromChatId from a dict
copy_message_post_request_from_chat_id_from_dict = CopyMessagePostRequestFromChatId.from_dict(copy_message_post_request_from_chat_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


