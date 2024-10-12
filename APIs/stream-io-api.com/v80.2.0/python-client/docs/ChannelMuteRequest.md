# ChannelMuteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponseRequest**](ChannelResponseRequest.md) |  | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**expires** | **datetime** | Date/time of mute expiration | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_mute_request import ChannelMuteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMuteRequest from a JSON string
channel_mute_request_instance = ChannelMuteRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelMuteRequest.to_json())

# convert the object into a dict
channel_mute_request_dict = channel_mute_request_instance.to_dict()
# create an instance of ChannelMuteRequest from a dict
channel_mute_request_from_dict = ChannelMuteRequest.from_dict(channel_mute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


