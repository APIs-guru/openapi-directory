# Workload

Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_cdn_egress_workload** | [**CloudCdnEgressWorkload**](CloudCdnEgressWorkload.md) |  | [optional] 
**cloud_cdn_workload** | [**CloudCdnWorkload**](CloudCdnWorkload.md) |  | [optional] 
**cloud_interconnect_egress_workload** | [**CloudInterconnectEgressWorkload**](CloudInterconnectEgressWorkload.md) |  | [optional] 
**cloud_interconnect_workload** | [**CloudInterconnectWorkload**](CloudInterconnectWorkload.md) |  | [optional] 
**cloud_storage_egress_workload** | [**CloudStorageEgressWorkload**](CloudStorageEgressWorkload.md) |  | [optional] 
**cloud_storage_workload** | [**CloudStorageWorkload**](CloudStorageWorkload.md) |  | [optional] 
**compute_vm_workload** | [**ComputeVmWorkload**](ComputeVmWorkload.md) |  | [optional] 
**name** | **str** | Required. A name for this workload. All workloads in a &#x60;CostScenario&#x60; must have a unique &#x60;name&#x60;. Each &#x60;name&#x60; may be at most 128 characters long. | [optional] 
**premium_tier_egress_workload** | [**PremiumTierEgressWorkload**](PremiumTierEgressWorkload.md) |  | [optional] 
**standard_tier_egress_workload** | [**StandardTierEgressWorkload**](StandardTierEgressWorkload.md) |  | [optional] 
**vm_to_vm_egress_workload** | [**VmToVmEgressWorkload**](VmToVmEgressWorkload.md) |  | [optional] 

## Example

```python
from openapi_client.models.workload import Workload

# TODO update the JSON string below
json = "{}"
# create an instance of Workload from a JSON string
workload_instance = Workload.from_json(json)
# print the JSON string representation of the object
print(Workload.to_json())

# convert the object into a dict
workload_dict = workload_instance.to_dict()
# create an instance of Workload from a dict
workload_from_dict = Workload.from_dict(workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


