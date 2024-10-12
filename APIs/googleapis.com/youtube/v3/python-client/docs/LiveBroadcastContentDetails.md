# LiveBroadcastContentDetails

Detailed settings of a broadcast.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bound_stream_id** | **str** | This value uniquely identifies the live stream bound to the broadcast. | [optional] 
**bound_stream_last_update_time_ms** | **datetime** | The date and time that the live stream referenced by boundStreamId was last updated. | [optional] 
**closed_captions_type** | **str** |  | [optional] 
**enable_auto_start** | **bool** | This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. | [optional] 
**enable_auto_stop** | **bool** | This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. | [optional] 
**enable_closed_captions** | **bool** | This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. | [optional] 
**enable_content_encryption** | **bool** | This setting indicates whether YouTube should enable content encryption for the broadcast. | [optional] 
**enable_dvr** | **bool** | This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property&#39;s value to true if you want to make playback available immediately after the broadcast ends. | [optional] 
**enable_embed** | **bool** | This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. | [optional] 
**enable_low_latency** | **bool** | Indicates whether this broadcast has low latency enabled. | [optional] 
**latency_preference** | **str** | If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency&#x3D;false LATENCY_LOW should match enable_low_latency&#x3D;true LATENCY_ULTRA_LOW should have enable_low_latency omitted. | [optional] 
**mesh** | **bytearray** | The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. | [optional] 
**monitor_stream** | [**MonitorStreamInfo**](MonitorStreamInfo.md) |  | [optional] 
**projection** | **str** | The projection format of this broadcast. This defaults to rectangular. | [optional] 
**record_from_start** | **bool** | Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property&#39;s value to true if you want the playback to be available immediately after the broadcast ends. If you set this property&#39;s value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback. | [optional] 
**start_with_slate** | **bool** | This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast&#39;s status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint&#39;s eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. | [optional] 
**stereo_layout** | **str** | The 3D stereo layout of this broadcast. This defaults to mono. | [optional] 

## Example

```python
from openapi_client.models.live_broadcast_content_details import LiveBroadcastContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcastContentDetails from a JSON string
live_broadcast_content_details_instance = LiveBroadcastContentDetails.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcastContentDetails.to_json())

# convert the object into a dict
live_broadcast_content_details_dict = live_broadcast_content_details_instance.to_dict()
# create an instance of LiveBroadcastContentDetails from a dict
live_broadcast_content_details_from_dict = LiveBroadcastContentDetails.from_dict(live_broadcast_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


