# MuteChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_mute** | [**ChannelMute**](ChannelMute.md) |  | [optional] 
**channel_mutes** | [**List[ChannelMute]**](ChannelMute.md) | Object with mutes (if multiple channels were muted) | [optional] 
**duration** | **str** |  | 
**own_user** | [**OwnUser**](OwnUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.mute_channel_response import MuteChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MuteChannelResponse from a JSON string
mute_channel_response_instance = MuteChannelResponse.from_json(json)
# print the JSON string representation of the object
print(MuteChannelResponse.to_json())

# convert the object into a dict
mute_channel_response_dict = mute_channel_response_instance.to_dict()
# create an instance of MuteChannelResponse from a dict
mute_channel_response_from_dict = MuteChannelResponse.from_dict(mute_channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


