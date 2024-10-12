# SmsChannelProperties

The parameters to provide for the Sms channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sid** | **str** | The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty. | 
**auth_token** | **str** | The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty. | 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**is_validated** | **bool** | Whether this channel is validated for the bot | [optional] 
**phone** | **str** | The Sms phone | 

## Example

```python
from openapi_client.models.sms_channel_properties import SmsChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SmsChannelProperties from a JSON string
sms_channel_properties_instance = SmsChannelProperties.from_json(json)
# print the JSON string representation of the object
print(SmsChannelProperties.to_json())

# convert the object into a dict
sms_channel_properties_dict = sms_channel_properties_instance.to_dict()
# create an instance of SmsChannelProperties from a dict
sms_channel_properties_from_dict = SmsChannelProperties.from_dict(sms_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


