# MessagesSendMessageRecipientMetadataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rcpt** | **str** |  | [optional] 
**values** | [**MessagesSendMessageRecipientMetadataInnerValues**](MessagesSendMessageRecipientMetadataInnerValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_message_recipient_metadata_inner import MessagesSendMessageRecipientMetadataInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendMessageRecipientMetadataInner from a JSON string
messages_send_message_recipient_metadata_inner_instance = MessagesSendMessageRecipientMetadataInner.from_json(json)
# print the JSON string representation of the object
print(MessagesSendMessageRecipientMetadataInner.to_json())

# convert the object into a dict
messages_send_message_recipient_metadata_inner_dict = messages_send_message_recipient_metadata_inner_instance.to_dict()
# create an instance of MessagesSendMessageRecipientMetadataInner from a dict
messages_send_message_recipient_metadata_inner_from_dict = MessagesSendMessageRecipientMetadataInner.from_dict(messages_send_message_recipient_metadata_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


