# ChannelOptionsViberVideo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel to send to. You must provide &#x60;viber_service&#x60; in this field | [optional] 
**var_from** | **str** | The ID of the message sender  | [optional] 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | [optional] 
**viber_service** | [**ChannelOptionsViberVideoViberService**](ChannelOptionsViberVideoViberService.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_options_viber_video import ChannelOptionsViberVideo

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelOptionsViberVideo from a JSON string
channel_options_viber_video_instance = ChannelOptionsViberVideo.from_json(json)
# print the JSON string representation of the object
print(ChannelOptionsViberVideo.to_json())

# convert the object into a dict
channel_options_viber_video_dict = channel_options_viber_video_instance.to_dict()
# create an instance of ChannelOptionsViberVideo from a dict
channel_options_viber_video_from_dict = ChannelOptionsViberVideo.from_dict(channel_options_viber_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


