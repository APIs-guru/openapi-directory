# VideoStream

Video stream resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_open_gop** | **bool** | Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is &#x60;false&#x60;. | [optional] 
**aq_strength** | **float** | Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0. | [optional] 
**b_frame_count** | **int** | The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than &#x60;VideoStream.gop_frame_count&#x60; if set. The default is 0. | [optional] 
**b_pyramid** | **bool** | Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is &#x60;false&#x60;. | [optional] 
**bitrate_bps** | **int** | Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value for H264/H265 is 800,000,000. The maximum value for VP9 is 480,000,000. | [optional] 
**codec** | **str** | Codec type. The following codecs are supported: * &#x60;h264&#x60; (default) * &#x60;h265&#x60; * &#x60;vp9&#x60; | [optional] 
**crf_level** | **int** | Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. | [optional] 
**enable_two_pass** | **bool** | Use two-pass encoding strategy to achieve better video quality. &#x60;VideoStream.rate_control_mode&#x60; must be &#x60;\&quot;vbr\&quot;&#x60;. The default is &#x60;false&#x60;. | [optional] 
**entropy_coder** | **str** | The entropy coder to use. The default is &#x60;\&quot;cabac\&quot;&#x60;. Supported entropy coders: - &#39;cavlc&#39; - &#39;cabac&#39; | [optional] 
**frame_rate** | **float** | Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculate frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information. | [optional] 
**gop_duration** | **str** | Select the GOP size based on the specified duration. The default is &#x60;\&quot;3s\&quot;&#x60;. Note that &#x60;gopDuration&#x60; must be less than or equal to [&#x60;segmentDuration&#x60;](#SegmentSettings), and [&#x60;segmentDuration&#x60;](#SegmentSettings) must be divisible by &#x60;gopDuration&#x60;. | [optional] 
**gop_frame_count** | **int** | Select the GOP size based on the specified frame count. Must be greater than zero. | [optional] 
**height_pixels** | **int** | The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. | [optional] 
**pixel_format** | **str** | Pixel format to use. The default is &#x60;\&quot;yuv420p\&quot;&#x60;. Supported pixel formats: - &#39;yuv420p&#39; pixel format. - &#39;yuv422p&#39; pixel format. - &#39;yuv444p&#39; pixel format. - &#39;yuv420p10&#39; 10-bit HDR pixel format. - &#39;yuv422p10&#39; 10-bit HDR pixel format. - &#39;yuv444p10&#39; 10-bit HDR pixel format. - &#39;yuv420p12&#39; 12-bit HDR pixel format. - &#39;yuv422p12&#39; 12-bit HDR pixel format. - &#39;yuv444p12&#39; 12-bit HDR pixel format. | [optional] 
**preset** | **str** | Enforces the specified codec preset. The default is &#x60;veryfast&#x60;. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;VideoStream&#x60; message. | [optional] 
**profile** | **str** | Enforces the specified codec profile. The following profiles are supported: * &#x60;baseline&#x60; * &#x60;main&#x60; * &#x60;high&#x60; (default) The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;VideoStream&#x60; message. | [optional] 
**rate_control_mode** | **str** | Specify the &#x60;rate_control_mode&#x60;. The default is &#x60;\&quot;vbr\&quot;&#x60;. Supported rate control modes: - &#39;vbr&#39; - variable bitrate - &#39;crf&#39; - constant rate factor | [optional] 
**tune** | **str** | Enforces the specified codec tune. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the &#x60;VideoStream&#x60; message. | [optional] 
**vbv_fullness_bits** | **int** | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of &#x60;VideoStream.vbv_size_bits&#x60;. | [optional] 
**vbv_size_bits** | **int** | Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to &#x60;VideoStream.bitrate_bps&#x60;. | [optional] 
**width_pixels** | **int** | The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. | [optional] 

## Example

```python
from openapi_client.models.video_stream import VideoStream

# TODO update the JSON string below
json = "{}"
# create an instance of VideoStream from a JSON string
video_stream_instance = VideoStream.from_json(json)
# print the JSON string representation of the object
print(VideoStream.to_json())

# convert the object into a dict
video_stream_dict = video_stream_instance.to_dict()
# create an instance of VideoStream from a dict
video_stream_from_dict = VideoStream.from_dict(video_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


