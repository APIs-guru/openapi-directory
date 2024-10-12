# InstancePolicy

InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerators** | [**List[Accelerator]**](Accelerator.md) | The accelerators attached to each VM instance. | [optional] 
**boot_disk** | [**Disk**](Disk.md) |  | [optional] 
**disks** | [**List[AttachedDisk]**](AttachedDisk.md) | Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted. A non-boot disk is a disk that can be of a device with a file system or a raw storage drive that is not ready for data storage and accessing. | [optional] 
**machine_type** | **str** | The Compute Engine machine type. | [optional] 
**min_cpu_platform** | **str** | The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. | [optional] 
**provisioning_model** | **str** | The provisioning model. | [optional] 
**reservation** | **str** | Optional. If specified, VMs will consume only the specified reservation. If not specified (default), VMs will consume any applicable reservation. | [optional] 

## Example

```python
from openapi_client.models.instance_policy import InstancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePolicy from a JSON string
instance_policy_instance = InstancePolicy.from_json(json)
# print the JSON string representation of the object
print(InstancePolicy.to_json())

# convert the object into a dict
instance_policy_dict = instance_policy_instance.to_dict()
# create an instance of InstancePolicy from a dict
instance_policy_from_dict = InstancePolicy.from_dict(instance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


