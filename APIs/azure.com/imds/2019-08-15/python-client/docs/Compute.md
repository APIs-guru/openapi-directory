# Compute

Compute Metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**az_environment** | **str** | This is the name of the environment in which the VM is running. | [optional] 
**location** | **str** | This is the Azure Region in which the VM is running. | [optional] 
**name** | **str** | This is the name of the VM. | [optional] 
**offer** | **str** | This is the offer information for the VM image. This value is only present for images deployed from the Azure Image Gallery. | [optional] 
**os_type** | **str** | This value indicates the type of OS the VM is running, either Linux or Windows. | [optional] 
**placement_group_id** | **str** | This is the placement group of your Virtual Machine Scale Set. | [optional] 
**plan** | [**PlanProperties**](PlanProperties.md) |  | [optional] 
**platform_fault_domain** | **str** | This is the fault domain in which the VM. | [optional] 
**platform_update_domain** | **str** | This is the update domain in which the VM. | [optional] 
**provider** | **str** | This is the provider of the VM. | [optional] 
**public_keys** | [**List[PublicKeysProperties]**](PublicKeysProperties.md) | This is information about the SSH certificate | [optional] 
**publisher** | **str** | This is the publisher of the VM image. | [optional] 
**resource_group_name** | **str** | This is the resource group for the VM. | [optional] 
**resource_id** | **str** | This is the fully qualified ID for the VM. | [optional] 
**sku** | **str** | This is the specific SKU for the VM image. | [optional] 
**storage_profile** | [**StorageProfile**](StorageProfile.md) |  | [optional] 
**subscription_id** | **str** | This is the Azure subscription for the VM. | [optional] 
**tags** | **str** | This is the list of tags for your VM. | [optional] 
**version** | **str** | This is the version of the VM image. | [optional] 
**vm_id** | **str** | This is the unique identifier for the VM. | [optional] 
**vm_scale_set_name** | **str** | This is the resource name of the VMSS. | [optional] 
**vm_size** | **str** | This is the size of the VM. | [optional] 
**zone** | **str** | This is the availability zone of the VM. | [optional] 

## Example

```python
from openapi_client.models.compute import Compute

# TODO update the JSON string below
json = "{}"
# create an instance of Compute from a JSON string
compute_instance = Compute.from_json(json)
# print the JSON string representation of the object
print(Compute.to_json())

# convert the object into a dict
compute_dict = compute_instance.to_dict()
# create an instance of Compute from a dict
compute_from_dict = Compute.from_dict(compute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


