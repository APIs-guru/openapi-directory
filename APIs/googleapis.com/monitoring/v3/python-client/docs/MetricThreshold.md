# MetricThreshold

A condition type that compares a collection of time series against a threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | [**List[Aggregation]**](Aggregation.md) | Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. | [optional] 
**comparison** | **str** | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). The comparison is applied on each time series, with the time series on the left-hand side and the threshold on the right-hand side.Only COMPARISON_LT and COMPARISON_GT are supported currently. | [optional] 
**denominator_aggregations** | [**List[Aggregation]**](Aggregation.md) | Specifies the alignment of data points in individual time series selected by denominatorFilter as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources).When computing ratios, the aggregations and denominator_aggregations fields must use the same alignment period and produce time series that have the same periodicity and labels. | [optional] 
**denominator_filter** | **str** | A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. If a denominator_filter is specified, the time series specified by the filter field will be used as the numerator.The filter must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. | [optional] 
**duration** | **str** | The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. | [optional] 
**evaluation_missing_data** | **str** | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. To use this control, the value of the duration field must be greater than or equal to 60 seconds. | [optional] 
**filter** | **str** | Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. | [optional] 
**forecast_options** | [**ForecastOptions**](ForecastOptions.md) |  | [optional] 
**threshold_value** | **float** | A value against which to compare the time series. | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_threshold import MetricThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of MetricThreshold from a JSON string
metric_threshold_instance = MetricThreshold.from_json(json)
# print the JSON string representation of the object
print(MetricThreshold.to_json())

# convert the object into a dict
metric_threshold_dict = metric_threshold_instance.to_dict()
# create an instance of MetricThreshold from a dict
metric_threshold_from_dict = MetricThreshold.from_dict(metric_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


