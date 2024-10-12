# LiveStream


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_asset_id** | **str** | The Asset that is currently being created if there is an active broadcast. | [optional] 
**audio_only** | **bool** | The live stream only processes the audio track if the value is set to true. Mux drops the video track if broadcasted. | [optional] 
**created_at** | **str** | Time the Live Stream was created, defined as a Unix timestamp (seconds since epoch). | [optional] 
**embedded_subtitles** | [**List[LiveStreamEmbeddedSubtitleSettings]**](LiveStreamEmbeddedSubtitleSettings.md) | Describes the embedded closed caption configuration of the incoming live stream. | [optional] 
**generated_subtitles** | [**List[LiveStreamGeneratedSubtitleSettings]**](LiveStreamGeneratedSubtitleSettings.md) | Configure the incoming live stream to include subtitles created with automatic speech recognition. Each Asset created from a live stream with &#x60;generated_subtitles&#x60; configured will automatically receive two text tracks. The first of these will have a &#x60;text_source&#x60; value of &#x60;generated_live&#x60;, and will be available with &#x60;ready&#x60; status as soon as the stream is live. The second text track will have a &#x60;text_source&#x60; value of &#x60;generated_live_final&#x60; and will contain subtitles with improved accuracy, timing, and formatting. However, &#x60;generated_live_final&#x60; tracks will not be available in &#x60;ready&#x60; status until the live stream ends. If an Asset has both &#x60;generated_live&#x60; and &#x60;generated_live_final&#x60; tracks that are &#x60;ready&#x60;, then only the &#x60;generated_live_final&#x60; track will be included during playback. | [optional] 
**id** | **str** | Unique identifier for the Live Stream. Max 255 characters. | [optional] 
**latency_mode** | **str** | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags. The Low Latency value is a beta feature. Read more here: https://mux.com/blog/introducing-low-latency-live-streaming/ | [optional] 
**low_latency** | **bool** | This field is deprecated. Please use &#x60;latency_mode&#x60; instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Setting this option will enable compatibility with the LL-HLS specification for low-latency streaming. This typically has lower latency than Reduced Latency streams, and cannot be combined with Reduced Latency. | [optional] 
**max_continuous_duration** | **int** | The time in seconds a live stream may be continuously active before being disconnected. Defaults to 12 hours. | [optional] [default to 43200]
**new_asset_settings** | [**CreateAssetRequest**](CreateAssetRequest.md) |  | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set for the asset. Max 255 characters. | [optional] 
**playback_ids** | [**List[PlaybackID]**](PlaybackID.md) | An array of Playback ID objects. Use these to create HLS playback URLs. See [Play your videos](https://docs.mux.com/guides/video/play-your-videos) for more details. | [optional] 
**recent_asset_ids** | **List[str]** | An array of strings with the most recent Asset IDs that were created from this Live Stream. The most recently generated Asset ID is the last entry in the list. | [optional] 
**reconnect_slate_url** | **str** | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. If this is not set, the default slate media will be used. | [optional] 
**reconnect_window** | **float** | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset. **Max**: 1800s (30 minutes).  If not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.  Reduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the &#x60;use_slate_for_standard_latency&#x60; option.  | [optional] [default to 60]
**reduced_latency** | **bool** | This field is deprecated. Please use &#x60;latency_mode&#x60; instead. Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this if you want lower latency for your live stream. See the [Reduce live stream latency guide](https://docs.mux.com/guides/video/reduce-live-stream-latency) to understand the tradeoffs. | [optional] 
**simulcast_targets** | [**List[SimulcastTarget]**](SimulcastTarget.md) | Each Simulcast Target contains configuration details to broadcast (or \&quot;restream\&quot;) a live stream to a third-party streaming service. [See the Stream live to 3rd party platforms guide](https://docs.mux.com/guides/video/stream-live-to-3rd-party-platforms). | [optional] 
**status** | [**LiveStreamStatus**](LiveStreamStatus.md) |  | [optional] 
**stream_key** | **str** | Unique key used for streaming to a Mux RTMP endpoint. This should be considered as sensitive as credentials, anyone with this stream key can begin streaming. | [optional] 
**test** | **bool** | True means this live stream is a test live stream. Test live streams can be used to help evaluate the Mux Video APIs for free. There is no limit on the number of test live streams, but they are watermarked with the Mux logo, and limited to 5 minutes. The test live stream is disabled after the stream is active for 5 mins and the recorded asset also deleted after 24 hours. | [optional] 
**use_slate_for_standard_latency** | **bool** | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream. | [optional] [default to False]

## Example

```python
from openapi_client.models.live_stream import LiveStream

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStream from a JSON string
live_stream_instance = LiveStream.from_json(json)
# print the JSON string representation of the object
print(LiveStream.to_json())

# convert the object into a dict
live_stream_dict = live_stream_instance.to_dict()
# create an instance of LiveStream from a dict
live_stream_from_dict = LiveStream.from_dict(live_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


