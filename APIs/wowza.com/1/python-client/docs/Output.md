# Output


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio_height** | **int** | The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is &lt;strong&gt;1080&lt;/strong&gt;. | [optional] 
**aspect_ratio_width** | **int** | The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is &lt;strong&gt;1980&lt;/strong&gt;. | [optional] 
**bitrate_audio** | **int** | The audio bitrate, in kilobits per second (Kbps). Must be between &lt;strong&gt;0&lt;/strong&gt; (for passthrough audio) and &lt;strong&gt;1000&lt;/strong&gt;. The default is &lt;strong&gt;128&lt;/strong&gt;. | [optional] 
**bitrate_video** | **int** | The video bitrate, in kilobits per second (Kbps). Must be between &lt;strong&gt;0&lt;/strong&gt; (for passthrough video) and &lt;strong&gt;10240&lt;/strong&gt;. The default is &lt;strong&gt;4000&lt;/strong&gt;. | [optional] 
**created_at** | **datetime** | The date and time that the output rendition was created. | [optional] 
**framerate_reduction** | **str** | Reduce the frame rate of the transcoded output rendition. The default, &lt;strong&gt;0&lt;/strong&gt;, uses the encoded stream&#39;s frame rate without reduction. | [optional] 
**h264_profile** | **str** | The encoding method. Specify &lt;strong&gt;main&lt;/strong&gt; for desktop streaming, &lt;strong&gt;baseline&lt;/strong&gt; for playback on mobile devices, or &lt;strong&gt;high&lt;/strong&gt; for HD playback. The default is &lt;strong&gt;high&lt;/strong&gt;. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the output rendition. | [optional] 
**keyframes** | **str** | The interval used to define the compression applied to a group of frames. The default, &lt;strong&gt;follow_source&lt;/strong&gt;, uses the keyframe interval of the source video. | [optional] 
**name** | **str** | A descriptive name for the output (generated, not writable). | [optional] 
**output_stream_targets** | [**List[OutputStreamTarget]**](OutputStreamTarget.md) |  | [optional] 
**passthrough_audio** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, sends the audio track to the target without transcoding. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**passthrough_video** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, sends the video track to the target without transcoding. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**stream_format** | **str** | The contents of the stream. The default is both audio and video (&lt;strong&gt;audiovideo&lt;/strong&gt;). | [optional] 
**transcoder_id** | **str** | The unique alphanumeric string that identifies the transcoder. | [optional] 
**updated_at** | **datetime** | The date and time that the output rendition was updated. | [optional] 

## Example

```python
from openapi_client.models.output import Output

# TODO update the JSON string below
json = "{}"
# create an instance of Output from a JSON string
output_instance = Output.from_json(json)
# print the JSON string representation of the object
print(Output.to_json())

# convert the object into a dict
output_dict = output_instance.to_dict()
# create an instance of Output from a dict
output_from_dict = Output.from_dict(output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


