# LiveStreamEmbeddedSubtitleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_channel** | **str** | CEA-608 caption channel to read data from. | [optional] [default to 'cc1']
**language_code** | **str** | The language of the closed caption stream. Value must be BCP 47 compliant. | [optional] [default to 'en']
**name** | **str** | A name for this live stream closed caption track. | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set for the live stream closed caption track. Max 255 characters. | [optional] 

## Example

```python
from openapi_client.models.live_stream_embedded_subtitle_settings import LiveStreamEmbeddedSubtitleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamEmbeddedSubtitleSettings from a JSON string
live_stream_embedded_subtitle_settings_instance = LiveStreamEmbeddedSubtitleSettings.from_json(json)
# print the JSON string representation of the object
print(LiveStreamEmbeddedSubtitleSettings.to_json())

# convert the object into a dict
live_stream_embedded_subtitle_settings_dict = live_stream_embedded_subtitle_settings_instance.to_dict()
# create an instance of LiveStreamEmbeddedSubtitleSettings from a dict
live_stream_embedded_subtitle_settings_from_dict = LiveStreamEmbeddedSubtitleSettings.from_dict(live_stream_embedded_subtitle_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


