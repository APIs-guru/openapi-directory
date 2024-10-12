# LiveStreamStatus

Brief description of the live stream status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_status** | [**LiveStreamHealthStatus**](LiveStreamHealthStatus.md) |  | [optional] 
**stream_status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.live_stream_status import LiveStreamStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamStatus from a JSON string
live_stream_status_instance = LiveStreamStatus.from_json(json)
# print the JSON string representation of the object
print(LiveStreamStatus.to_json())

# convert the object into a dict
live_stream_status_dict = live_stream_status_instance.to_dict()
# create an instance of LiveStreamStatus from a dict
live_stream_status_from_dict = LiveStreamStatus.from_dict(live_stream_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


