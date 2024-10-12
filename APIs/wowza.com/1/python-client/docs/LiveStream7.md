# LiveStream7


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio_height** | **int** | The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8. | 
**aspect_ratio_width** | **int** | The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8. | 
**closed_caption_type** | **str** | The type of closed caption data being passed from the source. The default, &lt;strong&gt;none&lt;/strong&gt;, indicates that no data is being provided. &lt;strong&gt;cea&lt;/strong&gt; indicates that a CEA closed captioning data stream is being provided. &lt;strong&gt;on_text&lt;/strong&gt; indicates that an onTextData closed captioning data stream is being provided. &lt;strong&gt;both&lt;/strong&gt; indicates that both CEA and onTextData closed captioing data streams are being provided. | [optional] 
**delivery_method** | **str** | The type of connection between the video source and the transcoder. The default, &lt;strong&gt;pull&lt;/strong&gt;, instructs the transcoder to pull the video from the source. &lt;strong&gt;push&lt;/strong&gt; instructs the source to push the stream to the transcoder. &lt;strong&gt;cdn&lt;/strong&gt; uses a stream source to deliver the stream to the transcoder. | [optional] 
**delivery_protocols** | **List[str]** | An array of direct delivery protocols enabled for this live stream. By default, &lt;strong&gt;rtmp&lt;/strong&gt;, &lt;strong&gt;rtsp&lt;/strong&gt;, and &lt;strong&gt;wowz&lt;/strong&gt; are enabled. | [optional] 
**disable_authentication** | **bool** | Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify &lt;strong&gt;true&lt;/strong&gt; to disable authentication with the video source. | [optional] 
**encoder** | **str** | The video source for the live stream. Choose the type of camera or encoder you&#39;re using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn&#39;t listed, choose &lt;strong&gt;ipcamera&lt;/strong&gt;, &lt;strong&gt;other_rtmp&lt;/strong&gt;, or &lt;strong&gt;other_rtsp&lt;/strong&gt;. | 
**hosted_page_description** | **str** | A description that appears on the hosted page below the player. Can&#39;t include custom HTML, JavaScript, or other tags. | [optional] 
**hosted_page_logo_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. | [optional] 
**hosted_page_sharing_icons** | **bool** | Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, &lt;strong&gt;true&lt;/strong&gt;, includes sharing icons on the hosted page. Specify &lt;strong&gt;false&lt;/strong&gt; to omit sharing icons. | [optional] 
**hosted_page_title** | **str** | A title for the page that appears above the player. Can&#39;t include custom HTML, JavaScript, or other tags. | [optional] 
**name** | **str** | A descriptive name for the live stream. Maximum 200 characters. | 
**password** | **str** | A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. | [optional] 
**player_countdown** | **bool** | A clock that appears in the player before the event and counts down to the start of the stream. Specify &lt;strong&gt;true&lt;/strong&gt; to display the countdown clock. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**player_countdown_at** | **datetime** | The date and time that the event starts, used by the countdown clock. Specify &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt;, where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
**player_logo_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. | [optional] 
**player_logo_position** | **str** | The corner of the player in which you want the player logo to appear. The default is &lt;strong&gt;top-left&lt;/strong&gt;. | [optional] 
**player_responsive** | **bool** | A player whose size adjusts according to the device on which it&#39;s being viewed. If &lt;strong&gt;true&lt;/strong&gt;, creates a responsive player. If &lt;strong&gt;false&lt;/strong&gt;, specify a &lt;em&gt;player_width&lt;/em&gt;. | [optional] 
**player_type** | **str** | The player you want to use. Valid values are &lt;strong&gt;original_html5&lt;/strong&gt;, which provides HTML5 playback and falls back to Flash on older browsers, and &lt;strong&gt;wowza_player&lt;/strong&gt;, which provides HTML5 playback over Apple HLS. &lt;strong&gt;wowza_player&lt;/strong&gt; requires that &lt;strong&gt;target_delivery_protocol&lt;/strong&gt; be &lt;strong&gt;hls-https&lt;/strong&gt; and &lt;strong&gt;closed_caption_type&lt;/strong&gt; be &lt;strong&gt;none&lt;/strong&gt;. The default is &lt;strong&gt;original_html5&lt;/strong&gt;. | [optional] 
**player_video_poster_image** | **str** | A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. | [optional] 
**player_width** | **int** | The width, in pixels, of a fixed-size player. The default is &lt;strong&gt;640&lt;/strong&gt;. | [optional] 
**recording** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, creates a recording of the live stream. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**remove_hosted_page_logo_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the logo file from the hosted page. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**remove_player_logo_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the logo file from the player. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**remove_player_video_poster_image** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, removes the poster image. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 
**source_url** | **str** | The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax. | [optional] 
**target_delivery_protocol** | **str** | The type of stream being delivered from Wowza Streaming Cloud. The default is &lt;strong&gt;hls-https&lt;/strong&gt;. | [optional] 
**use_stream_source** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, &lt;strong&gt;false&lt;/strong&gt;, pushes directly to Wowza Streaming Cloud. | [optional] 
**username** | **str** | A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. | [optional] 
**video_fallback** | **bool** | If &lt;strong&gt;true&lt;/strong&gt;, black video plays if the video source disconnects from the transcoder. If &lt;strong&gt;false&lt;/strong&gt; (the default), a stream-not-available message appears. Works only with HLS stream targets. | [optional] 

## Example

```python
from openapi_client.models.live_stream7 import LiveStream7

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStream7 from a JSON string
live_stream7_instance = LiveStream7.from_json(json)
# print the JSON string representation of the object
print(LiveStream7.to_json())

# convert the object into a dict
live_stream7_dict = live_stream7_instance.to_dict()
# create an instance of LiveStream7 from a dict
live_stream7_from_dict = LiveStream7.from_dict(live_stream7_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


