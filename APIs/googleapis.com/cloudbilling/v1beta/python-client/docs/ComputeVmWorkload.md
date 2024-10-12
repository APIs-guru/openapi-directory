# ComputeVmWorkload

Specificies usage of a set of identical compute VM instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_confidential_compute** | **bool** | Defines whether each instance has confidential compute enabled. | [optional] 
**guest_accelerator** | [**GuestAccelerator**](GuestAccelerator.md) |  | [optional] 
**instances_running** | [**Usage**](Usage.md) |  | [optional] 
**licenses** | **List[str]** | Premium image licenses used by each instance. | [optional] 
**machine_type** | [**MachineType**](MachineType.md) |  | [optional] 
**persistent_disks** | [**List[PersistentDisk]**](PersistentDisk.md) | Persistent disks attached to each instance. Must include a boot disk. | [optional] 
**preemptible** | **bool** | Defines whether each instance is preemptible. | [optional] 
**region** | **str** | The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: \&quot;us-central1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.compute_vm_workload import ComputeVmWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeVmWorkload from a JSON string
compute_vm_workload_instance = ComputeVmWorkload.from_json(json)
# print the JSON string representation of the object
print(ComputeVmWorkload.to_json())

# convert the object into a dict
compute_vm_workload_dict = compute_vm_workload_instance.to_dict()
# create an instance of ComputeVmWorkload from a dict
compute_vm_workload_from_dict = ComputeVmWorkload.from_dict(compute_vm_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


