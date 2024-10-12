# UpdateLiveStreamGeneratedSubtitlesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_subtitles** | [**List[LiveStreamGeneratedSubtitleSettings]**](LiveStreamGeneratedSubtitleSettings.md) | Update automated speech recognition subtitle configuration for a live stream. At most one subtitle track is allowed. | [optional] 

## Example

```python
from openapi_client.models.update_live_stream_generated_subtitles_request import UpdateLiveStreamGeneratedSubtitlesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLiveStreamGeneratedSubtitlesRequest from a JSON string
update_live_stream_generated_subtitles_request_instance = UpdateLiveStreamGeneratedSubtitlesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLiveStreamGeneratedSubtitlesRequest.to_json())

# convert the object into a dict
update_live_stream_generated_subtitles_request_dict = update_live_stream_generated_subtitles_request_instance.to_dict()
# create an instance of UpdateLiveStreamGeneratedSubtitlesRequest from a dict
update_live_stream_generated_subtitles_request_from_dict = UpdateLiveStreamGeneratedSubtitlesRequest.from_dict(update_live_stream_generated_subtitles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


