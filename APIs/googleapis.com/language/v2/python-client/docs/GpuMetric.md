# GpuMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gpu_sec** | **str** | Required. Seconds of GPU usage, e.g. 3600. | [optional] 
**gpu_type** | **str** | Required. Type of GPU, e.g. NVIDIA_TESLA_V100. | [optional] 
**machine_spec** | **str** | Required. Machine spec, e.g. N1_STANDARD_4. | [optional] 
**tracking_labels** | **Dict[str, str]** | Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels&#39; keys are defined with special format: goog-[\\p{Ll}\\p{N}]+ E.g. \&quot;key\&quot;: \&quot;goog-k8s-cluster-name\&quot;,\&quot;value\&quot;: \&quot;us-east1-b4rk\&quot; | [optional] 

## Example

```python
from openapi_client.models.gpu_metric import GpuMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GpuMetric from a JSON string
gpu_metric_instance = GpuMetric.from_json(json)
# print the JSON string representation of the object
print(GpuMetric.to_json())

# convert the object into a dict
gpu_metric_dict = gpu_metric_instance.to_dict()
# create an instance of GpuMetric from a dict
gpu_metric_from_dict = GpuMetric.from_dict(gpu_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


