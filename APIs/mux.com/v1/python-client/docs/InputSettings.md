# InputSettings

An array of objects that each describe an input file to be used to create the asset. As a shortcut, `input` can also be a string URL for a file when only one input file is used. See `input[].url` for requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_captions** | **bool** | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). This optional parameter should be used for tracks with &#x60;type&#x60; of &#x60;text&#x60; and &#x60;text_type&#x60; set to &#x60;subtitles&#x60;. | [optional] 
**end_time** | **float** | The time offset in seconds from the beginning of the video, indicating the clip&#39;s ending marker. The default value is the duration of the video when not included. This parameter is only applicable for creating clips when &#x60;input.url&#x60; has &#x60;mux://assets/{asset_id}&#x60; format. | [optional] 
**generated_subtitles** | [**List[AssetGeneratedSubtitleSettings]**](AssetGeneratedSubtitleSettings.md) | Generate subtitle tracks using automatic speech recognition using this configuration. This may only be provided for the first input object (the main input file). For direct uploads, this first input should omit the url parameter, as the main input file is provided via the direct upload. This will create subtitles based on the audio track ingested from that main input file. Note that subtitle generation happens after initial ingest, so the generated tracks will be in the &#x60;preparing&#x60; state when the asset transitions to &#x60;ready&#x60;. | [optional] 
**language_code** | **str** | The language code value must be a valid [BCP 47](https://tools.ietf.org/html/bcp47) specification compliant value. For example, &#x60;en&#x60; for English or &#x60;en-US&#x60; for the US version of English. This parameter is required for &#x60;text&#x60; and &#x60;audio&#x60; track types. | [optional] 
**name** | **str** | The name of the track containing a human-readable description. This value must be unique within each group of &#x60;text&#x60; or &#x60;audio&#x60; track types. The HLS manifest will associate a subtitle text track with this value. For example, the value should be \&quot;English\&quot; for a subtitle text track with &#x60;language_code&#x60; set to &#x60;en&#x60;. This optional parameter should be used only for &#x60;text&#x60; and &#x60;audio&#x60; type tracks. This parameter can be optionally provided for the first video input to denote the name of the muxed audio track if present. If this parameter is not included, Mux will auto-populate based on the &#x60;input[].language_code&#x60; value. | [optional] 
**overlay_settings** | [**InputSettingsOverlaySettings**](InputSettingsOverlaySettings.md) |  | [optional] 
**passthrough** | **str** | This optional parameter should be used tracks with &#x60;type&#x60; of &#x60;text&#x60; and &#x60;text_type&#x60; set to &#x60;subtitles&#x60;. | [optional] 
**start_time** | **float** | The time offset in seconds from the beginning of the video indicating the clip&#39;s starting marker. The default value is 0 when not included. This parameter is only applicable for creating clips when &#x60;input.url&#x60; has &#x60;mux://assets/{asset_id}&#x60; format. | [optional] 
**text_type** | **str** | Type of text track. This parameter only supports subtitles value. For more information on Subtitles / Closed Captions, [see this blog post](https://mux.com/blog/subtitles-captions-webvtt-hls-and-those-magic-flags/). This parameter is required for &#x60;text&#x60; type tracks. | [optional] 
**type** | **str** | This parameter is required for &#x60;text&#x60; type tracks. | [optional] 
**url** | **str** | The URL of the file that Mux should download and use. * For the main input file, this should be the URL to the muxed file for Mux to download, for example an MP4, MOV, MKV, or TS file. Mux supports most audio/video file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/video/minimize-processing-time). * For &#x60;audio&#x60; tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/video/minimize-processing-time). * For &#x60;text&#x60; tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions. * For Watermarking or Overlay, the URL is the location of the watermark image. * When creating clips from existing Mux assets, the URL is defined with &#x60;mux://assets/{asset_id}&#x60; template where &#x60;asset_id&#x60; is the Asset Identifier for creating the clip from. The url property may be omitted on the first input object when providing asset settings for LiveStream and Upload objects, in order to configure settings related to the primary (live stream or direct upload) input.  | [optional] 

## Example

```python
from openapi_client.models.input_settings import InputSettings

# TODO update the JSON string below
json = "{}"
# create an instance of InputSettings from a JSON string
input_settings_instance = InputSettings.from_json(json)
# print the JSON string representation of the object
print(InputSettings.to_json())

# convert the object into a dict
input_settings_dict = input_settings_instance.to_dict()
# create an instance of InputSettings from a dict
input_settings_from_dict = InputSettings.from_dict(input_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


