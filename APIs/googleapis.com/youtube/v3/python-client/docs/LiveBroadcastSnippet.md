# LiveBroadcastSnippet

Basic broadcast information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_end_time** | **datetime** | The date and time that the broadcast actually ended. This information is only available once the broadcast&#39;s state is complete. | [optional] 
**actual_start_time** | **datetime** | The date and time that the broadcast actually started. This information is only available once the broadcast&#39;s state is live. | [optional] 
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. | [optional] 
**description** | **str** | The broadcast&#39;s description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. | [optional] 
**is_default_broadcast** | **bool** | Indicates whether this broadcast is the default broadcast. Internal only. | [optional] 
**live_chat_id** | **str** | The id of the live chat for this broadcast. | [optional] 
**published_at** | **datetime** | The date and time that the broadcast was added to YouTube&#39;s live broadcast schedule. | [optional] 
**scheduled_end_time** | **datetime** | The date and time that the broadcast is scheduled to end. | [optional] 
**scheduled_start_time** | **datetime** | The date and time that the broadcast is scheduled to start. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The broadcast&#39;s title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. | [optional] 

## Example

```python
from openapi_client.models.live_broadcast_snippet import LiveBroadcastSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcastSnippet from a JSON string
live_broadcast_snippet_instance = LiveBroadcastSnippet.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcastSnippet.to_json())

# convert the object into a dict
live_broadcast_snippet_dict = live_broadcast_snippet_instance.to_dict()
# create an instance of LiveBroadcastSnippet from a dict
live_broadcast_snippet_from_dict = LiveBroadcastSnippet.from_dict(live_broadcast_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


