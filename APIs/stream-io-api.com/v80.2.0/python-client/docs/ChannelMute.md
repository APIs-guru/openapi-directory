# ChannelMute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**created_at** | **datetime** | Date/time of creation | 
**expires** | **datetime** | Date/time of mute expiration | [optional] 
**updated_at** | **datetime** | Date/time of the last update | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_mute import ChannelMute

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMute from a JSON string
channel_mute_instance = ChannelMute.from_json(json)
# print the JSON string representation of the object
print(ChannelMute.to_json())

# convert the object into a dict
channel_mute_dict = channel_mute_instance.to_dict()
# create an instance of ChannelMute from a dict
channel_mute_from_dict = ChannelMute.from_dict(channel_mute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


