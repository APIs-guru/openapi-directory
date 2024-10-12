# TimeSeriesFilter

A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Aggregation**](Aggregation.md) |  | [optional] 
**filter** | **str** | Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. | [optional] 
**pick_time_series_filter** | [**PickTimeSeriesFilter**](PickTimeSeriesFilter.md) |  | [optional] 
**secondary_aggregation** | [**Aggregation**](Aggregation.md) |  | [optional] 
**statistical_time_series_filter** | [**StatisticalTimeSeriesFilter**](StatisticalTimeSeriesFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.time_series_filter import TimeSeriesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesFilter from a JSON string
time_series_filter_instance = TimeSeriesFilter.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesFilter.to_json())

# convert the object into a dict
time_series_filter_dict = time_series_filter_instance.to_dict()
# create an instance of TimeSeriesFilter from a dict
time_series_filter_from_dict = TimeSeriesFilter.from_dict(time_series_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


