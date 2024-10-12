# PerStepNamespaceMetrics

Metrics for a particular unfused step and namespace. A metric is uniquely identified by the `metrics_namespace`, `original_step`, `metric name` and `metric_labels`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_values** | [**List[MetricValue]**](MetricValue.md) | Optional. Metrics that are recorded for this namespace and unfused step. | [optional] 
**metrics_namespace** | **str** | The namespace of these metrics on the worker. | [optional] 
**original_step** | **str** | The original system name of the unfused step that these metrics are reported from. | [optional] 

## Example

```python
from openapi_client.models.per_step_namespace_metrics import PerStepNamespaceMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of PerStepNamespaceMetrics from a JSON string
per_step_namespace_metrics_instance = PerStepNamespaceMetrics.from_json(json)
# print the JSON string representation of the object
print(PerStepNamespaceMetrics.to_json())

# convert the object into a dict
per_step_namespace_metrics_dict = per_step_namespace_metrics_instance.to_dict()
# create an instance of PerStepNamespaceMetrics from a dict
per_step_namespace_metrics_from_dict = PerStepNamespaceMetrics.from_dict(per_step_namespace_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


