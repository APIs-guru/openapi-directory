# InboundMessageSMSSms

Channel specific metadata for SMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **str** | The first word of the message sent to uppercase. | [optional] 
**num_messages** | **str** | The number of inbound SMS messages concatenated together to comprise this message. SMS messages are 160 characters, if an inbound message exceeds that size they are concatenated together to forma single message. This number indicates how many messages formed this webhook. | [optional] 

## Example

```python
from openapi_client.models.inbound_message_sms_sms import InboundMessageSMSSms

# TODO update the JSON string below
json = "{}"
# create an instance of InboundMessageSMSSms from a JSON string
inbound_message_sms_sms_instance = InboundMessageSMSSms.from_json(json)
# print the JSON string representation of the object
print(InboundMessageSMSSms.to_json())

# convert the object into a dict
inbound_message_sms_sms_dict = inbound_message_sms_sms_instance.to_dict()
# create an instance of InboundMessageSMSSms from a dict
inbound_message_sms_sms_from_dict = InboundMessageSMSSms.from_dict(inbound_message_sms_sms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


