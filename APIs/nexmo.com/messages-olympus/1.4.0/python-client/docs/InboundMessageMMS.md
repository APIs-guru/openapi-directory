# InboundMessageMMS


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel the message came in on | 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**message_uuid** | **str** | The UUID of the message | 
**timestamp** | **str** | The datetime of when the event occurred, in &#x60;ISO 8601&#x60; format. | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 

## Example

```python
from openapi_client.models.inbound_message_mms import InboundMessageMMS

# TODO update the JSON string below
json = "{}"
# create an instance of InboundMessageMMS from a JSON string
inbound_message_mms_instance = InboundMessageMMS.from_json(json)
# print the JSON string representation of the object
print(InboundMessageMMS.to_json())

# convert the object into a dict
inbound_message_mms_dict = inbound_message_mms_instance.to_dict()
# create an instance of InboundMessageMMS from a dict
inbound_message_mms_from_dict = InboundMessageMMS.from_dict(inbound_message_mms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


