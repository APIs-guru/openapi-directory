# VideoAnalyzerPreset

A video analyzer preset that extracts insights (rich metadata) from both audio and video, and outputs a JSON format file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_insights_only** | **bool** | Whether to only extract audio insights when processing a video file. | [optional] 

## Example

```python
from openapi_client.models.video_analyzer_preset import VideoAnalyzerPreset

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAnalyzerPreset from a JSON string
video_analyzer_preset_instance = VideoAnalyzerPreset.from_json(json)
# print the JSON string representation of the object
print(VideoAnalyzerPreset.to_json())

# convert the object into a dict
video_analyzer_preset_dict = video_analyzer_preset_instance.to_dict()
# create an instance of VideoAnalyzerPreset from a dict
video_analyzer_preset_from_dict = VideoAnalyzerPreset.from_dict(video_analyzer_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


