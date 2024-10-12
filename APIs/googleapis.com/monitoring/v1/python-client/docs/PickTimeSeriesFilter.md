# PickTimeSeriesFilter

Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | How to use the ranking to select time series that pass through the filter. | [optional] 
**interval** | [**Interval**](Interval.md) |  | [optional] 
**num_time_series** | **int** | How many time series to allow to pass through the filter. | [optional] 
**ranking_method** | **str** | ranking_method is applied to each time series independently to produce the value which will be used to compare the time series to other time series. | [optional] 

## Example

```python
from openapi_client.models.pick_time_series_filter import PickTimeSeriesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PickTimeSeriesFilter from a JSON string
pick_time_series_filter_instance = PickTimeSeriesFilter.from_json(json)
# print the JSON string representation of the object
print(PickTimeSeriesFilter.to_json())

# convert the object into a dict
pick_time_series_filter_dict = pick_time_series_filter_instance.to_dict()
# create an instance of PickTimeSeriesFilter from a dict
pick_time_series_filter_from_dict = PickTimeSeriesFilter.from_dict(pick_time_series_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


