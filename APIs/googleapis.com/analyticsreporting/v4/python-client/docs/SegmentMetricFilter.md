# SegmentMetricFilter

Metric filter to be used in a segment filter clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_value** | **str** | The value to compare against. If the operator is &#x60;BETWEEN&#x60;, this value is treated as minimum comparison value. | [optional] 
**max_comparison_value** | **str** | Max comparison value is only used for &#x60;BETWEEN&#x60; operator. | [optional] 
**metric_name** | **str** | The metric that will be filtered on. A &#x60;metricFilter&#x60; must contain a metric name. | [optional] 
**operator** | **str** | Specifies is the operation to perform to compare the metric. The default is &#x60;EQUAL&#x60;. | [optional] 
**scope** | **str** | Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions. | [optional] 

## Example

```python
from openapi_client.models.segment_metric_filter import SegmentMetricFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentMetricFilter from a JSON string
segment_metric_filter_instance = SegmentMetricFilter.from_json(json)
# print the JSON string representation of the object
print(SegmentMetricFilter.to_json())

# convert the object into a dict
segment_metric_filter_dict = segment_metric_filter_instance.to_dict()
# create an instance of SegmentMetricFilter from a dict
segment_metric_filter_from_dict = SegmentMetricFilter.from_dict(segment_metric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


