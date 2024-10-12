# MetricRange

A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GoogleMonitoringV3Range**](GoogleMonitoringV3Range.md) |  | [optional] 
**time_series** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. | [optional] 

## Example

```python
from openapi_client.models.metric_range import MetricRange

# TODO update the JSON string below
json = "{}"
# create an instance of MetricRange from a JSON string
metric_range_instance = MetricRange.from_json(json)
# print the JSON string representation of the object
print(MetricRange.to_json())

# convert the object into a dict
metric_range_dict = metric_range_instance.to_dict()
# create an instance of MetricRange from a dict
metric_range_from_dict = MetricRange.from_dict(metric_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


