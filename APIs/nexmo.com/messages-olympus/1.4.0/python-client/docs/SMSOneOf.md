# SMSOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;text&#x60; in this field | 
**text** | **object** | The text of message to send; limited to 1000 characters. The Messages API automatically detects unicode characters when sending SMS and sends the message as a unicode SMS. For more information on how concatenation and encoding please visit: [developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding](https://developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding).  | 
**channel** | **str** | The channel to send to. You must provide &#x60;sms&#x60; in this field | 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 

## Example

```python
from openapi_client.models.sms_one_of import SMSOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of SMSOneOf from a JSON string
sms_one_of_instance = SMSOneOf.from_json(json)
# print the JSON string representation of the object
print(SMSOneOf.to_json())

# convert the object into a dict
sms_one_of_dict = sms_one_of_instance.to_dict()
# create an instance of SMSOneOf from a dict
sms_one_of_from_dict = SMSOneOf.from_dict(sms_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


