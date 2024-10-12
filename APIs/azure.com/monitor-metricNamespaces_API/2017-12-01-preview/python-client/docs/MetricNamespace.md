# MetricNamespace

Metric namespace class specifies the metadata for a metric namespace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the metricNamespace. | [optional] 
**name** | **str** | The name of the namespace. | [optional] 
**properties** | [**MetricNamespaceName**](MetricNamespaceName.md) |  | [optional] 
**type** | **str** | The type of the namespace. | [optional] 

## Example

```python
from openapi_client.models.metric_namespace import MetricNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of MetricNamespace from a JSON string
metric_namespace_instance = MetricNamespace.from_json(json)
# print the JSON string representation of the object
print(MetricNamespace.to_json())

# convert the object into a dict
metric_namespace_dict = metric_namespace_instance.to_dict()
# create an instance of MetricNamespace from a dict
metric_namespace_from_dict = MetricNamespace.from_dict(metric_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


