# InboundViberMessageCommon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel that the message came in on | 
**context** | [**InboundViberMessageCommonContext**](InboundViberMessageCommonContext.md) |  | [optional] 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**message_uuid** | **str** | The UUID of the message | 
**timestamp** | **str** | The datetime of when the event occurred, in &#x60;ISO 8601&#x60; format. | 
**to** | **str** | The ID of the message recipient  | 

## Example

```python
from openapi_client.models.inbound_viber_message_common import InboundViberMessageCommon

# TODO update the JSON string below
json = "{}"
# create an instance of InboundViberMessageCommon from a JSON string
inbound_viber_message_common_instance = InboundViberMessageCommon.from_json(json)
# print the JSON string representation of the object
print(InboundViberMessageCommon.to_json())

# convert the object into a dict
inbound_viber_message_common_dict = inbound_viber_message_common_instance.to_dict()
# create an instance of InboundViberMessageCommon from a dict
inbound_viber_message_common_from_dict = InboundViberMessageCommon.from_dict(inbound_viber_message_common_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


