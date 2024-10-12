# LiveBroadcastStatus

Live broadcast state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**life_cycle_status** | **str** | The broadcast&#39;s status. The status can be updated using the API&#39;s liveBroadcasts.transition method. | [optional] 
**live_broadcast_priority** | **str** | Priority of the live broadcast event (internal state). | [optional] 
**made_for_kids** | **bool** | Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only. | [optional] 
**privacy_status** | **str** | The broadcast&#39;s privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. | [optional] 
**recording_status** | **str** | The broadcast&#39;s recording status. | [optional] 
**self_declared_made_for_kids** | **bool** | This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work. | [optional] 

## Example

```python
from openapi_client.models.live_broadcast_status import LiveBroadcastStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcastStatus from a JSON string
live_broadcast_status_instance = LiveBroadcastStatus.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcastStatus.to_json())

# convert the object into a dict
live_broadcast_status_dict = live_broadcast_status_instance.to_dict()
# create an instance of LiveBroadcastStatus from a dict
live_broadcast_status_from_dict = LiveBroadcastStatus.from_dict(live_broadcast_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


