# InfraUsage

Infra Usage of billing metrics. Next ID: 6

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_metrics** | [**List[CpuMetric]**](CpuMetric.md) | Aggregated core metrics since requested start_time. | [optional] 
**disk_metrics** | [**List[DiskMetric]**](DiskMetric.md) | Aggregated persistent disk metrics since requested start_time. | [optional] 
**gpu_metrics** | [**List[GpuMetric]**](GpuMetric.md) | Aggregated gpu metrics since requested start_time. | [optional] 
**ram_metrics** | [**List[RamMetric]**](RamMetric.md) | Aggregated ram metrics since requested start_time. | [optional] 
**tpu_metrics** | [**List[TpuMetric]**](TpuMetric.md) | Aggregated tpu metrics since requested start_time. | [optional] 

## Example

```python
from openapi_client.models.infra_usage import InfraUsage

# TODO update the JSON string below
json = "{}"
# create an instance of InfraUsage from a JSON string
infra_usage_instance = InfraUsage.from_json(json)
# print the JSON string representation of the object
print(InfraUsage.to_json())

# convert the object into a dict
infra_usage_dict = infra_usage_instance.to_dict()
# create an instance of InfraUsage from a dict
infra_usage_from_dict = InfraUsage.from_dict(infra_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


