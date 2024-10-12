# MetricUpdate

Describes the state of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cumulative** | **bool** | True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem. | [optional] 
**distribution** | **object** | A struct value describing properties of a distribution of numeric values. | [optional] 
**gauge** | **object** | A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value. | [optional] 
**internal** | **object** | Worker-computed aggregate value for internal use by the Dataflow service. | [optional] 
**kind** | **str** | Metric aggregation kind. The possible metric aggregation kinds are \&quot;Sum\&quot;, \&quot;Max\&quot;, \&quot;Min\&quot;, \&quot;Mean\&quot;, \&quot;Set\&quot;, \&quot;And\&quot;, \&quot;Or\&quot;, and \&quot;Distribution\&quot;. The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value. | [optional] 
**mean_count** | **object** | Worker-computed aggregate value for the \&quot;Mean\&quot; aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long. | [optional] 
**mean_sum** | **object** | Worker-computed aggregate value for the \&quot;Mean\&quot; aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double. | [optional] 
**name** | [**MetricStructuredName**](MetricStructuredName.md) |  | [optional] 
**scalar** | **object** | Worker-computed aggregate value for aggregation kinds \&quot;Sum\&quot;, \&quot;Max\&quot;, \&quot;Min\&quot;, \&quot;And\&quot;, and \&quot;Or\&quot;. The possible value types are Long, Double, and Boolean. | [optional] 
**set** | **object** | Worker-computed aggregate value for the \&quot;Set\&quot; aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric&#39;s type. All Values in the list must be of the same type. | [optional] 
**update_time** | **str** | Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API. | [optional] 

## Example

```python
from openapi_client.models.metric_update import MetricUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MetricUpdate from a JSON string
metric_update_instance = MetricUpdate.from_json(json)
# print the JSON string representation of the object
print(MetricUpdate.to_json())

# convert the object into a dict
metric_update_dict = metric_update_instance.to_dict()
# create an instance of MetricUpdate from a dict
metric_update_from_dict = MetricUpdate.from_dict(metric_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


