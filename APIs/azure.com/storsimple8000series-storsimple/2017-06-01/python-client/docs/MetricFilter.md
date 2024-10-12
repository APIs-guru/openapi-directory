# MetricFilter

The OData filters to be used for metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Specifies the category of the metrics to be filtered. E.g., \&quot;CapacityUtilization\&quot;. Valid values are the ones returned as the field \&quot;category\&quot; in the ListMetricDefinitions call. Only &#39;Equality&#39; operator is supported for this property. | 
**dimensions** | [**DimensionFilter**](DimensionFilter.md) |  | [optional] 
**end_time** | **datetime** | Specifies the end time of the time range to be queried. Only &#39;Less Than Or Equal To&#39; operator is supported for this property. | [optional] 
**name** | [**MetricNameFilter**](MetricNameFilter.md) |  | [optional] 
**start_time** | **datetime** | Specifies the start time of the time range to be queried. Only &#39;Greater Than Or Equal To&#39; operator is supported for this property. | [optional] 
**time_grain** | **str** | Specifies the time granularity of the metrics to be returned. E.g., \&quot;P1D\&quot;. Valid values are the ones returned as the field \&quot;timeGrain\&quot; in the ListMetricDefinitions call. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.metric_filter import MetricFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MetricFilter from a JSON string
metric_filter_instance = MetricFilter.from_json(json)
# print the JSON string representation of the object
print(MetricFilter.to_json())

# convert the object into a dict
metric_filter_dict = metric_filter_instance.to_dict()
# create an instance of MetricFilter from a dict
metric_filter_from_dict = MetricFilter.from_dict(metric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


