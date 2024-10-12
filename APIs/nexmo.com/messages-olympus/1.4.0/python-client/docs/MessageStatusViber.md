# MessageStatusViber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**error** | [**MessageStatusBaseError**](MessageStatusBaseError.md) |  | [optional] 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**message_uuid** | **str** | The UUID of the message | 
**status** | **str** |  | 
**timestamp** | **str** | The datetime of when the event occurred, in &#x60;ISO 8601&#x60; format. | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 
**usage** | [**MessageStatusBaseUsage**](MessageStatusBaseUsage.md) |  | [optional] 
**channel** | **str** | The channel sending to. | 

## Example

```python
from openapi_client.models.message_status_viber import MessageStatusViber

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusViber from a JSON string
message_status_viber_instance = MessageStatusViber.from_json(json)
# print the JSON string representation of the object
print(MessageStatusViber.to_json())

# convert the object into a dict
message_status_viber_dict = message_status_viber_instance.to_dict()
# create an instance of MessageStatusViber from a dict
message_status_viber_from_dict = MessageStatusViber.from_dict(message_status_viber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


