# Transcoder8


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_mode** | **str** | The billing mode for the transcoder. The default is &lt;strong&gt;pay_as_you_go&lt;/strong&gt;. | 
**broadcast_location** | **str** | The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source. | 
**buffer_size** | **int** | The size, in milliseconds, of the incoming buffer. &lt;strong&gt;0&lt;/strong&gt; means no buffer. The default is &lt;strong&gt;4000&lt;/strong&gt; (4 seconds). | [optional] 
**closed_caption_type** | **str** | The type of closed caption data being passed from the source. The default, &lt;strong&gt;none&lt;/strong&gt;, indicates that no data is being provided. &lt;strong&gt;cea&lt;/strong&gt; indicates that a CEA closed captioning data stream is being provided. &lt;strong&gt;on_text&lt;/strong&gt; indicates that an onTextData closed captioning data stream is being provided. &lt;strong&gt;both&lt;/strong&gt; indicates that both CEA and onTextData closed captioing data streams are being provided. | [optional] 
**delivery_method** | **str** | The type of connection between the source encoder and the transcoder. The default, &lt;strong&gt;pull&lt;/strong&gt;, instructs the transcoder to pull the video from the source. &lt;strong&gt;push&lt;/strong&gt; instructs the source to push the stream to the transcoder. &lt;strong&gt;cdn&lt;/strong&gt; uses a stream source to deliver the stream to the transcoder. | 
**delivery_protocols** | **List[str]** | An array of playback protocols enabled for this transcoder. By default, &lt;strong&gt;rtmp&lt;/strong&gt;, &lt;strong&gt;rtsp&lt;/strong&gt;, and &lt;strong&gt;wowz&lt;/strong&gt; are returned. | [optional] 
**description** | **str** | An optional description of the transcoder. | [optional] 
**disable_authentication** | **bool** | Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify &lt;strong&gt;true&lt;/strong&gt; to disable authentication with the video source. | [optional] 
**idle_timeout** | **int** | The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers &lt;strong&gt;0&lt;/strong&gt; (never shuts down) to &lt;strong&gt;172800&lt;/strong&gt; (48 hours). The default is &lt;strong&gt;1200&lt;/strong&gt; (20 minutes). | [optional] 
**low_latency** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**name** | **str** | A descriptive name for the transcoder. Maximum 200 characters. | 
**password** | **str** | A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. | [optional] 
**play_maximum_connections** | **int** | The number of users who are allowed to connect directly to the transcoder. | [optional] 
**protocol** | **str** | The transport protocol for the source video. The default is &lt;strong&gt;rtmp&lt;/strong&gt;. | 
**recording** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, creates a recording of the transcoded output. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**source_url** | **str** | For the &lt;em&gt;delivery_method&lt;/em&gt; &lt;strong&gt;pull&lt;/strong&gt;. Enter the source&#39;s web address without the preceding protocol or the trailing slash (/). | [optional] 
**stream_extension** | **str** | For the &lt;em&gt;delivery_method&lt;/em&gt; &lt;strong&gt;push&lt;/strong&gt;. Some encoders append an extension to their stream names. If the device you&#39;re using does this, enter the extension. | [optional] 
**stream_smoother** | **bool** | A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify &lt;strong&gt;true&lt;/strong&gt; to enable stream smoothing. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**stream_source_id** | **str** | For the &lt;em&gt;delivery_method&lt;/em&gt; &lt;strong&gt;cdn&lt;/strong&gt;. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. | [optional] 
**suppress_stream_target_start** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, disables stream targets when the transcoder starts. If &lt;strong&gt;false&lt;/strong&gt; (the default), the targets start when the transcoder starts. | [optional] 
**transcoder_type** | **str** | The type of transcoder, either &lt;strong&gt;transcoded&lt;/strong&gt; for streams that are transcoded into adaptive bitrate renditions or &lt;strong&gt;passthrough&lt;/strong&gt; for streams that aren&#39;t processed by the transcoder. The default is &lt;strong&gt;transcoded&lt;/strong&gt;. | 
**username** | **str** | A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. | [optional] 
**video_fallback** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, black video plays if the video source disconnects from the transcoder. If &lt;strong&gt;false&lt;/strong&gt; (the default), a stream-not-available message appears. Works only with stream targets whose &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. | [optional] 
**watermark** | **bool** | Embeds an image into the transcoded stream for copyright protection. Specify &lt;strong&gt;true&lt;/strong&gt; to embed a watermark image. | [optional] 
**watermark_height** | **int** | The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height. | [optional] 
**watermark_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. | [optional] 
**watermark_opacity** | **int** | The opacity, or percentage of transparency, of the watermark. &lt;strong&gt;0&lt;/strong&gt; is fully transparent; &lt;strong&gt;100&lt;/strong&gt; is fully opaque. | [optional] 
**watermark_position** | **str** | The corner of the video frame in which you want the watermark to appear. The default is &lt;strong&gt;top-left&lt;/strong&gt;. | [optional] 
**watermark_width** | **int** | The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width. | [optional] 

## Example

```python
from openapi_client.models.transcoder8 import Transcoder8

# TODO update the JSON string below
json = "{}"
# create an instance of Transcoder8 from a JSON string
transcoder8_instance = Transcoder8.from_json(json)
# print the JSON string representation of the object
print(Transcoder8.to_json())

# convert the object into a dict
transcoder8_dict = transcoder8_instance.to_dict()
# create an instance of Transcoder8 from a dict
transcoder8_from_dict = Transcoder8.from_dict(transcoder8_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


