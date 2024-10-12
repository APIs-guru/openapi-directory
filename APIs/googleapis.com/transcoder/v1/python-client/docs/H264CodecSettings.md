# H264CodecSettings

H264 codec settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_open_gop** | **bool** | Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is &#x60;false&#x60;. | [optional] 
**aq_strength** | **float** | Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0. | [optional] 
**b_frame_count** | **int** | The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than H264CodecSettings.gop_frame_count if set. The default is 0. | [optional] 
**b_pyramid** | **bool** | Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is &#x60;false&#x60;. | [optional] 
**bitrate_bps** | **int** | Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000. | [optional] 
**crf_level** | **int** | Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. | [optional] 
**enable_two_pass** | **bool** | Use two-pass encoding strategy to achieve better video quality. H264CodecSettings.rate_control_mode must be &#x60;vbr&#x60;. The default is &#x60;false&#x60;. | [optional] 
**entropy_coder** | **str** | The entropy coder to use. The default is &#x60;cabac&#x60;. Supported entropy coders: - &#x60;cavlc&#x60; - &#x60;cabac&#x60; | [optional] 
**frame_rate** | **float** | Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. | [optional] 
**frame_rate_conversion_strategy** | **str** | Optional. Frame rate conversion strategy for desired frame rate. The default is &#x60;DOWNSAMPLE&#x60;. | [optional] 
**gop_duration** | **str** | Select the GOP size based on the specified duration. The default is &#x60;3s&#x60;. Note that &#x60;gopDuration&#x60; must be less than or equal to [&#x60;segmentDuration&#x60;](#SegmentSettings), and [&#x60;segmentDuration&#x60;](#SegmentSettings) must be divisible by &#x60;gopDuration&#x60;. | [optional] 
**gop_frame_count** | **int** | Select the GOP size based on the specified frame count. Must be greater than zero. | [optional] 
**height_pixels** | **int** | The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. | [optional] 
**hlg** | **object** | Convert the input video to a Hybrid Log Gamma (HLG) video. | [optional] 
**pixel_format** | **str** | Pixel format to use. The default is &#x60;yuv420p&#x60;. Supported pixel formats: - &#x60;yuv420p&#x60; pixel format - &#x60;yuv422p&#x60; pixel format - &#x60;yuv444p&#x60; pixel format - &#x60;yuv420p10&#x60; 10-bit HDR pixel format - &#x60;yuv422p10&#x60; 10-bit HDR pixel format - &#x60;yuv444p10&#x60; 10-bit HDR pixel format - &#x60;yuv420p12&#x60; 12-bit HDR pixel format - &#x60;yuv422p12&#x60; 12-bit HDR pixel format - &#x60;yuv444p12&#x60; 12-bit HDR pixel format | [optional] 
**preset** | **str** | Enforces the specified codec preset. The default is &#x60;veryfast&#x60;. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Preset). Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;H264CodecSettings&#x60; message. | [optional] 
**profile** | **str** | Enforces the specified codec profile. The following profiles are supported: * &#x60;baseline&#x60; * &#x60;main&#x60; * &#x60;high&#x60; (default) The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;H264CodecSettings&#x60; message. | [optional] 
**rate_control_mode** | **str** | Specify the mode. The default is &#x60;vbr&#x60;. Supported rate control modes: - &#x60;vbr&#x60; - variable bitrate - &#x60;crf&#x60; - constant rate factor | [optional] 
**sdr** | **object** | Convert the input video to a Standard Dynamic Range (SDR) video. | [optional] 
**tune** | **str** | Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;H264CodecSettings&#x60; message. | [optional] 
**vbv_fullness_bits** | **int** | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of H264CodecSettings.vbv_size_bits. | [optional] 
**vbv_size_bits** | **int** | Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to H264CodecSettings.bitrate_bps. | [optional] 
**width_pixels** | **int** | The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output. | [optional] 

## Example

```python
from openapi_client.models.h264_codec_settings import H264CodecSettings

# TODO update the JSON string below
json = "{}"
# create an instance of H264CodecSettings from a JSON string
h264_codec_settings_instance = H264CodecSettings.from_json(json)
# print the JSON string representation of the object
print(H264CodecSettings.to_json())

# convert the object into a dict
h264_codec_settings_dict = h264_codec_settings_instance.to_dict()
# create an instance of H264CodecSettings from a dict
h264_codec_settings_from_dict = H264CodecSettings.from_dict(h264_codec_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


