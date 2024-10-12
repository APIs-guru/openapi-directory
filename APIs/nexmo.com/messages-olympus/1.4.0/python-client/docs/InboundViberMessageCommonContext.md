# InboundViberMessageCommonContext

Object containing contextual details for the inbound message when it is a response to another message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_uuid** | **str** | The ID of the message being replied to. | [optional] 

## Example

```python
from openapi_client.models.inbound_viber_message_common_context import InboundViberMessageCommonContext

# TODO update the JSON string below
json = "{}"
# create an instance of InboundViberMessageCommonContext from a JSON string
inbound_viber_message_common_context_instance = InboundViberMessageCommonContext.from_json(json)
# print the JSON string representation of the object
print(InboundViberMessageCommonContext.to_json())

# convert the object into a dict
inbound_viber_message_common_context_dict = inbound_viber_message_common_context_instance.to_dict()
# create an instance of InboundViberMessageCommonContext from a dict
inbound_viber_message_common_context_from_dict = InboundViberMessageCommonContext.from_dict(inbound_viber_message_common_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


