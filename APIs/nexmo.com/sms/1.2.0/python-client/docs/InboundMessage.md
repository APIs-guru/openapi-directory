# InboundMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The Vonage API Key of the receiving account. | 
**concat** | **str** | True - if this is a concatenated message. This field does not exist if it is a single message | [optional] 
**concat_part** | **str** | The number of this part in the message. Counting starts at 1. | [optional] 
**concat_ref** | **str** | The transaction reference. All parts of this message share this value. | [optional] 
**concat_total** | **str** | The number of parts in this concatenated message. | [optional] 
**data** | **bytearray** | The content of this message, if type is binary. | [optional] 
**keyword** | **str** | The first word in the message body. Converted to upper case. | 
**message_timestamp** | **str** | The time when Vonage started to push this Delivery Receipt to your webhook endpoint. | 
**message_id** | **str** | The ID of the message | 
**msisdn** | **str** | The phone number that this inbound message was sent from. Numbers are specified in E.164 format. | 
**nonce** | **str** | A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages. | [optional] 
**text** | **str** | The message body for this inbound message. | 
**timestamp** | **str** | A unix timestamp representation of message-timestamp. | [optional] 
**to** | **str** | The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format. | 
**type** | **str** | Possible values are:    - &#x60;text&#x60; - standard text.   - &#x60;unicode&#x60; - URLencoded   unicode  . This is valid for standard GSM, Arabic, Chinese, double-encoded characters and so on.   - &#x60;binary&#x60; - a binary message.  | 
**udh** | **str** | The hex encoded User Data Header, if type is binary | [optional] 

## Example

```python
from openapi_client.models.inbound_message import InboundMessage

# TODO update the JSON string below
json = "{}"
# create an instance of InboundMessage from a JSON string
inbound_message_instance = InboundMessage.from_json(json)
# print the JSON string representation of the object
print(InboundMessage.to_json())

# convert the object into a dict
inbound_message_dict = inbound_message_instance.to_dict()
# create an instance of InboundMessage from a dict
inbound_message_from_dict = InboundMessage.from_dict(inbound_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


