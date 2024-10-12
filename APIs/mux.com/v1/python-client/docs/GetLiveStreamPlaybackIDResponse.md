# GetLiveStreamPlaybackIDResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PlaybackID**](PlaybackID.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_live_stream_playback_id_response import GetLiveStreamPlaybackIDResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetLiveStreamPlaybackIDResponse from a JSON string
get_live_stream_playback_id_response_instance = GetLiveStreamPlaybackIDResponse.from_json(json)
# print the JSON string representation of the object
print(GetLiveStreamPlaybackIDResponse.to_json())

# convert the object into a dict
get_live_stream_playback_id_response_dict = get_live_stream_playback_id_response_instance.to_dict()
# create an instance of GetLiveStreamPlaybackIDResponse from a dict
get_live_stream_playback_id_response_from_dict = GetLiveStreamPlaybackIDResponse.from_dict(get_live_stream_playback_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


