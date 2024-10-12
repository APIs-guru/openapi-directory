# TimeSeriesQuery

TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ops_analytics_query** | [**OpsAnalyticsQuery**](OpsAnalyticsQuery.md) |  | [optional] 
**output_full_duration** | **bool** | Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like - XyChart - Scorecard&#39;s spark chart | [optional] 
**prometheus_query** | **str** | A query used to fetch time series with PromQL. | [optional] 
**time_series_filter** | [**TimeSeriesFilter**](TimeSeriesFilter.md) |  | [optional] 
**time_series_filter_ratio** | [**TimeSeriesFilterRatio**](TimeSeriesFilterRatio.md) |  | [optional] 
**time_series_query_language** | **str** | A query used to fetch time series with MQL. | [optional] 
**unit_override** | **str** | The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor. | [optional] 

## Example

```python
from openapi_client.models.time_series_query import TimeSeriesQuery

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesQuery from a JSON string
time_series_query_instance = TimeSeriesQuery.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesQuery.to_json())

# convert the object into a dict
time_series_query_dict = time_series_query_instance.to_dict()
# create an instance of TimeSeriesQuery from a dict
time_series_query_from_dict = TimeSeriesQuery.from_dict(time_series_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


