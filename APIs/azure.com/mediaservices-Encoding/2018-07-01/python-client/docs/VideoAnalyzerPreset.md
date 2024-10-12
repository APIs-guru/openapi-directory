# VideoAnalyzerPreset

A video analyzer preset that extracts insights (rich metadata) from both audio and video, and outputs a JSON format file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insights_to_extract** | **str** | Defines the type of insights that you want the service to generate. The allowed values are &#39;AudioInsightsOnly&#39;, &#39;VideoInsightsOnly&#39;, and &#39;AllInsights&#39;. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out. | [optional] 

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


