# MMSOneOf2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**audio** | [**MMSOneOf2AllOfAudio**](MMSOneOf2AllOfAudio.md) |  | 
**message_type** | **str** | The type of message to send. You must provide &#x60;audio&#x60; in this field.  For best device and network support .mp3 is recommended. Not supported for US short codes.  | 
**channel** | **str** | The channel to send to. You must provide &#x60;mms&#x60; in this field | 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 

## Example

```python
from openapi_client.models.mms_one_of2 import MMSOneOf2

# TODO update the JSON string below
json = "{}"
# create an instance of MMSOneOf2 from a JSON string
mms_one_of2_instance = MMSOneOf2.from_json(json)
# print the JSON string representation of the object
print(MMSOneOf2.to_json())

# convert the object into a dict
mms_one_of2_dict = mms_one_of2_instance.to_dict()
# create an instance of MMSOneOf2 from a dict
mms_one_of2_from_dict = MMSOneOf2.from_dict(mms_one_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


