# GceSetup

The definition of how to configure a VM instance outside of Resources and Identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_configs** | [**List[AcceleratorConfig]**](AcceleratorConfig.md) | Optional. The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has [enough vCPUs and memory to support the &#x60;machine_type&#x60; you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list). Currently supports only one accelerator configuration. | [optional] 
**boot_disk** | [**BootDisk**](BootDisk.md) |  | [optional] 
**container_image** | [**ContainerImage**](ContainerImage.md) |  | [optional] 
**data_disks** | [**List[DataDisk]**](DataDisk.md) | Optional. Data disks attached to the VM instance. Currently supports only one data disk. | [optional] 
**disable_public_ip** | **bool** | Optional. If true, no external IP will be assigned to this VM instance. | [optional] 
**enable_ip_forwarding** | **bool** | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward | [optional] 
**gpu_driver_config** | [**GPUDriverConfig**](GPUDriverConfig.md) |  | [optional] 
**machine_type** | **str** | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource | [optional] 
**metadata** | **Dict[str, str]** | Optional. Custom metadata to apply to this instance. | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | Optional. The network interfaces for the VM. Supports only one interface. | [optional] 
**service_accounts** | [**List[ServiceAccount]**](ServiceAccount.md) | Optional. The service account that serves as an identity for the VM instance. Currently supports only one service account. | [optional] 
**shielded_instance_config** | [**ShieldedInstanceConfig**](ShieldedInstanceConfig.md) |  | [optional] 
**tags** | **List[str]** | Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). | [optional] 
**vm_image** | [**VmImage**](VmImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.gce_setup import GceSetup

# TODO update the JSON string below
json = "{}"
# create an instance of GceSetup from a JSON string
gce_setup_instance = GceSetup.from_json(json)
# print the JSON string representation of the object
print(GceSetup.to_json())

# convert the object into a dict
gce_setup_dict = gce_setup_instance.to_dict()
# create an instance of GceSetup from a dict
gce_setup_from_dict = GceSetup.from_dict(gce_setup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


