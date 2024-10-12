# LiveStreamHealthStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_issues** | [**List[LiveStreamConfigurationIssue]**](LiveStreamConfigurationIssue.md) | The configurations issues on this stream | [optional] 
**last_update_time_seconds** | **str** | The last time this status was updated (in seconds) | [optional] 
**status** | **str** | The status code of this stream | [optional] 

## Example

```python
from openapi_client.models.live_stream_health_status import LiveStreamHealthStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamHealthStatus from a JSON string
live_stream_health_status_instance = LiveStreamHealthStatus.from_json(json)
# print the JSON string representation of the object
print(LiveStreamHealthStatus.to_json())

# convert the object into a dict
live_stream_health_status_dict = live_stream_health_status_instance.to_dict()
# create an instance of LiveStreamHealthStatus from a dict
live_stream_health_status_from_dict = LiveStreamHealthStatus.from_dict(live_stream_health_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


