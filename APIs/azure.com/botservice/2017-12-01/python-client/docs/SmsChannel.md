# SmsChannel

Sms channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SmsChannelProperties**](SmsChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.sms_channel import SmsChannel

# TODO update the JSON string below
json = "{}"
# create an instance of SmsChannel from a JSON string
sms_channel_instance = SmsChannel.from_json(json)
# print the JSON string representation of the object
print(SmsChannel.to_json())

# convert the object into a dict
sms_channel_dict = sms_channel_instance.to_dict()
# create an instance of SmsChannel from a dict
sms_channel_from_dict = SmsChannel.from_dict(sms_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


