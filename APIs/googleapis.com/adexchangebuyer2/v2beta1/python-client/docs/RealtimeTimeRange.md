# RealtimeTimeRange

An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_timestamp** | **str** | The start timestamp of the real-time RTB metrics aggregation. | [optional] 

## Example

```python
from openapi_client.models.realtime_time_range import RealtimeTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeTimeRange from a JSON string
realtime_time_range_instance = RealtimeTimeRange.from_json(json)
# print the JSON string representation of the object
print(RealtimeTimeRange.to_json())

# convert the object into a dict
realtime_time_range_dict = realtime_time_range_instance.to_dict()
# create an instance of RealtimeTimeRange from a dict
realtime_time_range_from_dict = RealtimeTimeRange.from_dict(realtime_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


