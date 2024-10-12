# MetricFilter

MetricFilter specifies the filter on a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_value** | **str** | The value to compare against. | [optional] 
**metric_name** | **str** | The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression. | [optional] 
**var_not** | **bool** | Logical &#x60;NOT&#x60; operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false. | [optional] 
**operator** | **str** | Is the metric &#x60;EQUAL&#x60;, &#x60;LESS_THAN&#x60; or &#x60;GREATER_THAN&#x60; the comparisonValue, the default is &#x60;EQUAL&#x60;. If the operator is &#x60;IS_MISSING&#x60;, checks if the metric is missing and would ignore the comparisonValue. | [optional] 

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


