# MessagesSendMessageToInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_message_to_inner import MessagesSendMessageToInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendMessageToInner from a JSON string
messages_send_message_to_inner_instance = MessagesSendMessageToInner.from_json(json)
# print the JSON string representation of the object
print(MessagesSendMessageToInner.to_json())

# convert the object into a dict
messages_send_message_to_inner_dict = messages_send_message_to_inner_instance.to_dict()
# create an instance of MessagesSendMessageToInner from a dict
messages_send_message_to_inner_from_dict = MessagesSendMessageToInner.from_dict(messages_send_message_to_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


