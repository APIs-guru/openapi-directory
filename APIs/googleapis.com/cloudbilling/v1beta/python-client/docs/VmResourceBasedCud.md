# VmResourceBasedCud

Specifies a resource-based committed use discount (CUD).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_accelerator** | [**GuestAccelerator**](GuestAccelerator.md) |  | [optional] 
**machine_series** | **str** | The machine series for CUD. For example: \&quot;n1\&quot; for general purpose N1 machine type commitments. \&quot;n2\&quot; for general purpose N2 machine type commitments. \&quot;e2\&quot; for general purpose E2 machine type commitments. \&quot;n2d\&quot; for general purpose N2D machine type commitments. \&quot;t2d\&quot; for general purpose T2D machine type commitments. \&quot;c2\&quot;/\&quot;c2d\&quot; for compute-optimized commitments. \&quot;m1\&quot;/\&quot;m2\&quot; for the memory-optimized commitments. \&quot;a2&#39; for the accelerator-optimized commitments. | [optional] 
**memory_size_gb** | **float** | Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). | [optional] 
**plan** | **str** | Commitment usage plan. | [optional] 
**region** | **str** | The region where the VM runs. For example: \&quot;us-central1\&quot; | [optional] 
**virtual_cpu_count** | **str** | The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd. | [optional] 

## Example

```python
from openapi_client.models.vm_resource_based_cud import VmResourceBasedCud

# TODO update the JSON string below
json = "{}"
# create an instance of VmResourceBasedCud from a JSON string
vm_resource_based_cud_instance = VmResourceBasedCud.from_json(json)
# print the JSON string representation of the object
print(VmResourceBasedCud.to_json())

# convert the object into a dict
vm_resource_based_cud_dict = vm_resource_based_cud_instance.to_dict()
# create an instance of VmResourceBasedCud from a dict
vm_resource_based_cud_from_dict = VmResourceBasedCud.from_dict(vm_resource_based_cud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


