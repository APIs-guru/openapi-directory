# MuteChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_cids** | **List[str]** | Channel CIDs to mute (if multiple channels) | 
**expiration** | **int** | Duration of mute in milliseconds | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mute_channel_request import MuteChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MuteChannelRequest from a JSON string
mute_channel_request_instance = MuteChannelRequest.from_json(json)
# print the JSON string representation of the object
print(MuteChannelRequest.to_json())

# convert the object into a dict
mute_channel_request_dict = mute_channel_request_instance.to_dict()
# create an instance of MuteChannelRequest from a dict
mute_channel_request_from_dict = MuteChannelRequest.from_dict(mute_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


