# WhatsAppOneOf5


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**file** | [**WhatsAppOneOf5AllOfFile**](WhatsAppOneOf5AllOfFile.md) |  | 
**message_type** | **str** | The type of message to send. You must provide &#x60;file&#x60; in this field | 
**channel** | **str** | The channel to send to. You must provide &#x60;whatsapp&#x60; in this field | 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 

## Example

```python
from openapi_client.models.whats_app_one_of5 import WhatsAppOneOf5

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsAppOneOf5 from a JSON string
whats_app_one_of5_instance = WhatsAppOneOf5.from_json(json)
# print the JSON string representation of the object
print(WhatsAppOneOf5.to_json())

# convert the object into a dict
whats_app_one_of5_dict = whats_app_one_of5_instance.to_dict()
# create an instance of WhatsAppOneOf5 from a dict
whats_app_one_of5_from_dict = WhatsAppOneOf5.from_dict(whats_app_one_of5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


