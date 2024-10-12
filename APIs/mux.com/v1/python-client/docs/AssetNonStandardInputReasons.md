# AssetNonStandardInputReasons

An object containing one or more reasons the input file is non-standard. See [the guide on minimizing processing time](https://docs.mux.com/guides/video/minimize-processing-time) for more information on what a standard input is defined as. This object only exists on on-demand assets that have non-standard inputs, so if missing you can assume the input qualifies as standard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_codec** | **str** | The audio codec used on the input file. Non-AAC audio codecs are non-standard. | [optional] 
**audio_edit_list** | **str** | Audio Edit List reason indicates that the input file&#39;s audio track contains a complex Edit Decision List. | [optional] 
**pixel_aspect_ratio** | **str** | The video pixel aspect ratio of the input file. | [optional] 
**unexpected_media_file_parameters** | **str** | A catch-all reason when the input file in created with non-standard encoding parameters. | [optional] 
**unsupported_pixel_format** | **str** | The video pixel format, as a string, returned by libav. Considered non-standard if not one of yuv420p or yuvj420p. | [optional] 
**video_bitrate** | **str** | The video bitrate of the input file is &#x60;high&#x60;. This parameter is present when the average bitrate of any key frame interval (also known as Group of Pictures or GOP) is higher than what&#39;s considered standard which typically is 16 Mbps. | [optional] 
**video_codec** | **str** | The video codec used on the input file. For example, the input file encoded with &#x60;hevc&#x60; video codec is non-standard and the value of this parameter is &#x60;hevc&#x60;. | [optional] 
**video_edit_list** | **str** | Video Edit List reason indicates that the input file&#39;s video track contains a complex Edit Decision List. | [optional] 
**video_frame_rate** | **str** | The video frame rate of the input file. Video with average frames per second (fps) less than 5 or greater than 120 is non-standard. A &#x60;-1&#x60; frame rate value indicates Mux could not determine the frame rate of the video track. | [optional] 
**video_gop_size** | **str** | The video key frame Interval (also called as Group of Picture or GOP) of the input file is &#x60;high&#x60;. This parameter is present when the gop is greater than 20 seconds. | [optional] 
**video_resolution** | **str** | The video resolution of the input file. Video resolution higher than 2048 pixels on any one dimension (height or width) is considered non-standard, The resolution value is presented as &#x60;width&#x60; x &#x60;height&#x60; in pixels. | [optional] 

## Example

```python
from openapi_client.models.asset_non_standard_input_reasons import AssetNonStandardInputReasons

# TODO update the JSON string below
json = "{}"
# create an instance of AssetNonStandardInputReasons from a JSON string
asset_non_standard_input_reasons_instance = AssetNonStandardInputReasons.from_json(json)
# print the JSON string representation of the object
print(AssetNonStandardInputReasons.to_json())

# convert the object into a dict
asset_non_standard_input_reasons_dict = asset_non_standard_input_reasons_instance.to_dict()
# create an instance of AssetNonStandardInputReasons from a dict
asset_non_standard_input_reasons_from_dict = AssetNonStandardInputReasons.from_dict(asset_non_standard_input_reasons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


