# PerWorkerMetrics

Per worker metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_step_namespace_metrics** | [**List[PerStepNamespaceMetrics]**](PerStepNamespaceMetrics.md) | Optional. Metrics for a particular unfused step and namespace. | [optional] 

## Example

```python
from openapi_client.models.per_worker_metrics import PerWorkerMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of PerWorkerMetrics from a JSON string
per_worker_metrics_instance = PerWorkerMetrics.from_json(json)
# print the JSON string representation of the object
print(PerWorkerMetrics.to_json())

# convert the object into a dict
per_worker_metrics_dict = per_worker_metrics_instance.to_dict()
# create an instance of PerWorkerMetrics from a dict
per_worker_metrics_from_dict = PerWorkerMetrics.from_dict(per_worker_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


