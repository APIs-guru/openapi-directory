# MetricNameFilter

The metric name filter, specifying the name of the metric to be filtered on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Specifies the metric name to be filtered on. E.g., CloudStorageUsed. Valid values are the ones returned in the field \&quot;name\&quot; in the ListMetricDefinitions call. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.metric_name_filter import MetricNameFilter

# TODO update the JSON string below
json = "{}"
# create an instance of MetricNameFilter from a JSON string
metric_name_filter_instance = MetricNameFilter.from_json(json)
# print the JSON string representation of the object
print(MetricNameFilter.to_json())

# convert the object into a dict
metric_name_filter_dict = metric_name_filter_instance.to_dict()
# create an instance of MetricNameFilter from a dict
metric_name_filter_from_dict = MetricNameFilter.from_dict(metric_name_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


