# UpdateLiveStreamEmbeddedSubtitlesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded_subtitles** | [**List[LiveStreamEmbeddedSubtitleSettings]**](LiveStreamEmbeddedSubtitleSettings.md) | Describe the embedded closed caption contents of the incoming live stream. | [optional] 

## Example

```python
from openapi_client.models.update_live_stream_embedded_subtitles_request import UpdateLiveStreamEmbeddedSubtitlesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLiveStreamEmbeddedSubtitlesRequest from a JSON string
update_live_stream_embedded_subtitles_request_instance = UpdateLiveStreamEmbeddedSubtitlesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLiveStreamEmbeddedSubtitlesRequest.to_json())

# convert the object into a dict
update_live_stream_embedded_subtitles_request_dict = update_live_stream_embedded_subtitles_request_instance.to_dict()
# create an instance of UpdateLiveStreamEmbeddedSubtitlesRequest from a dict
update_live_stream_embedded_subtitles_request_from_dict = UpdateLiveStreamEmbeddedSubtitlesRequest.from_dict(update_live_stream_embedded_subtitles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


