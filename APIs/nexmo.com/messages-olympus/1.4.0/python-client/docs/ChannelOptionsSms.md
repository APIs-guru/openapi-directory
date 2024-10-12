# ChannelOptionsSms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel to send to. You must provide &#x60;sms&#x60; in this field | [optional] 
**var_from** | **str** | The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id&#39;s will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details  | [optional] 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | [optional] 

## Example

```python
from openapi_client.models.channel_options_sms import ChannelOptionsSms

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelOptionsSms from a JSON string
channel_options_sms_instance = ChannelOptionsSms.from_json(json)
# print the JSON string representation of the object
print(ChannelOptionsSms.to_json())

# convert the object into a dict
channel_options_sms_dict = channel_options_sms_instance.to_dict()
# create an instance of ChannelOptionsSms from a dict
channel_options_sms_from_dict = ChannelOptionsSms.from_dict(channel_options_sms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


