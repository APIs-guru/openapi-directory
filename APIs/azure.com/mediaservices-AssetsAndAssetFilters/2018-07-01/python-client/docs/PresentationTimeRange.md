# PresentationTimeRange

The presentation time range, this is asset related and not recommended for Account Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_timestamp** | **int** | The absolute end time boundary. | [optional] 
**force_end_timestamp** | **bool** | The indicator of forcing existing of end time stamp. | [optional] 
**live_backoff_duration** | **int** | The relative to end right edge. | [optional] 
**presentation_window_duration** | **int** | The relative to end sliding window. | [optional] 
**start_timestamp** | **int** | The absolute start time boundary. | [optional] 
**timescale** | **int** | The time scale of time stamps. | [optional] 

## Example

```python
from openapi_client.models.presentation_time_range import PresentationTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of PresentationTimeRange from a JSON string
presentation_time_range_instance = PresentationTimeRange.from_json(json)
# print the JSON string representation of the object
print(PresentationTimeRange.to_json())

# convert the object into a dict
presentation_time_range_dict = presentation_time_range_instance.to_dict()
# create an instance of PresentationTimeRange from a dict
presentation_time_range_from_dict = PresentationTimeRange.from_dict(presentation_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


