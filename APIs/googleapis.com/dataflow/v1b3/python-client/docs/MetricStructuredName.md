# MetricStructuredName

Identifies a metric, by describing the source which generated the metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **Dict[str, str]** | Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context[&#39;step&#39;] &#x3D; . Counters associated with PCollections in the SDK will have context[&#39;pcollection&#39;] &#x3D; . | [optional] 
**name** | **str** | Worker-defined metric name. | [optional] 
**origin** | **str** | Origin (namespace) of metric name. May be blank for user-define metrics; will be \&quot;dataflow\&quot; for metrics defined by the Dataflow service or SDK. | [optional] 

## Example

```python
from openapi_client.models.metric_structured_name import MetricStructuredName

# TODO update the JSON string below
json = "{}"
# create an instance of MetricStructuredName from a JSON string
metric_structured_name_instance = MetricStructuredName.from_json(json)
# print the JSON string representation of the object
print(MetricStructuredName.to_json())

# convert the object into a dict
metric_structured_name_dict = metric_structured_name_instance.to_dict()
# create an instance of MetricStructuredName from a dict
metric_structured_name_from_dict = MetricStructuredName.from_dict(metric_structured_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


