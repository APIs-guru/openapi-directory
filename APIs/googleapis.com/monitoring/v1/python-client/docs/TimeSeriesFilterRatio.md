# TimeSeriesFilterRatio

A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denominator** | [**RatioPart**](RatioPart.md) |  | [optional] 
**numerator** | [**RatioPart**](RatioPart.md) |  | [optional] 
**pick_time_series_filter** | [**PickTimeSeriesFilter**](PickTimeSeriesFilter.md) |  | [optional] 
**secondary_aggregation** | [**Aggregation**](Aggregation.md) |  | [optional] 
**statistical_time_series_filter** | [**StatisticalTimeSeriesFilter**](StatisticalTimeSeriesFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.time_series_filter_ratio import TimeSeriesFilterRatio

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesFilterRatio from a JSON string
time_series_filter_ratio_instance = TimeSeriesFilterRatio.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesFilterRatio.to_json())

# convert the object into a dict
time_series_filter_ratio_dict = time_series_filter_ratio_instance.to_dict()
# create an instance of TimeSeriesFilterRatio from a dict
time_series_filter_ratio_from_dict = TimeSeriesFilterRatio.from_dict(time_series_filter_ratio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


