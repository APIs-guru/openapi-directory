# CpuMetric

Metric for billing reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_number** | **str** | Required. Number of CPU cores. | [optional] 
**core_sec** | **str** | Required. Total seconds of core usage, e.g. 4. | [optional] 
**cpu_type** | **str** | Required. Type of cpu, e.g. N2. | [optional] 
**machine_spec** | **str** | Required. Machine spec, e.g. N1_STANDARD_4. | [optional] 
**tracking_labels** | **Dict[str, str]** | Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels&#39; keys are defined with special format: goog-[\\p{Ll}\\p{N}]+ E.g. \&quot;key\&quot;: \&quot;goog-k8s-cluster-name\&quot;,\&quot;value\&quot;: \&quot;us-east1-b4rk\&quot; | [optional] 

## Example

```python
from openapi_client.models.cpu_metric import CpuMetric

# TODO update the JSON string below
json = "{}"
# create an instance of CpuMetric from a JSON string
cpu_metric_instance = CpuMetric.from_json(json)
# print the JSON string representation of the object
print(CpuMetric.to_json())

# convert the object into a dict
cpu_metric_dict = cpu_metric_instance.to_dict()
# create an instance of CpuMetric from a dict
cpu_metric_from_dict = CpuMetric.from_dict(cpu_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


