# MetricAbsence

A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | [**List[Aggregation]**](Aggregation.md) | Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. | [optional] 
**duration** | **str** | The amount of time that a time series must fail to report new data to be considered failing. The minimum value of this field is 120 seconds. Larger values that are a multiple of a minute--for example, 240 or 300 seconds--are supported. If an invalid value is given, an error will be returned. The Duration.nanos field is ignored. | [optional] 
**filter** | **str** | Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_absence import MetricAbsence

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAbsence from a JSON string
metric_absence_instance = MetricAbsence.from_json(json)
# print the JSON string representation of the object
print(MetricAbsence.to_json())

# convert the object into a dict
metric_absence_dict = metric_absence_instance.to_dict()
# create an instance of MetricAbsence from a dict
metric_absence_from_dict = MetricAbsence.from_dict(metric_absence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


