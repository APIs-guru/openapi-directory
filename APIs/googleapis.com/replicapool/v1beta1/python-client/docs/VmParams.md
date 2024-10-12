# VmParams

Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_instance_name** | **str** | Deprecated. Please use baseInstanceName instead. | [optional] 
**can_ip_forward** | **bool** | Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information. | [optional] 
**description** | **str** | An optional textual description of the instance. | [optional] 
**disks_to_attach** | [**List[ExistingDisk]**](ExistingDisk.md) | A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica. | [optional] 
**disks_to_create** | [**List[NewDisk]**](NewDisk.md) | A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica. | [optional] 
**machine_type** | **str** | The machine type for this instance. The resource name (e.g. n1-standard-1). | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT. | [optional] 
**on_host_maintenance** | **str** |  | [optional] 
**service_accounts** | [**List[ServiceAccount]**](ServiceAccount.md) | A list of Service Accounts to enable for this instance. | [optional] 
**tags** | [**Tag**](Tag.md) |  | [optional] 

## Example

```python
from openapi_client.models.vm_params import VmParams

# TODO update the JSON string below
json = "{}"
# create an instance of VmParams from a JSON string
vm_params_instance = VmParams.from_json(json)
# print the JSON string representation of the object
print(VmParams.to_json())

# convert the object into a dict
vm_params_dict = vm_params_instance.to_dict()
# create an instance of VmParams from a dict
vm_params_from_dict = VmParams.from_dict(vm_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


