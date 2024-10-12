# StatisticalTimeSeriesFilter

A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_time_series** | **int** | How many time series to output. | [optional] 
**ranking_method** | **str** | rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series. | [optional] 

## Example

```python
from openapi_client.models.statistical_time_series_filter import StatisticalTimeSeriesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of StatisticalTimeSeriesFilter from a JSON string
statistical_time_series_filter_instance = StatisticalTimeSeriesFilter.from_json(json)
# print the JSON string representation of the object
print(StatisticalTimeSeriesFilter.to_json())

# convert the object into a dict
statistical_time_series_filter_dict = statistical_time_series_filter_instance.to_dict()
# create an instance of StatisticalTimeSeriesFilter from a dict
statistical_time_series_filter_from_dict = StatisticalTimeSeriesFilter.from_dict(statistical_time_series_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


