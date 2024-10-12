# VmwareDiskConfig

VMware disk config details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backing_type** | **str** | VMDK backing type. | [optional] 
**rdm_compatibility_mode** | **str** | RDM compatibility mode. | [optional] 
**shared** | **bool** | Is VMDK shared with other VMs. | [optional] 
**vmdk_disk_mode** | **str** | VMDK disk mode. | [optional] 

## Example

```python
from openapi_client.models.vmware_disk_config import VmwareDiskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareDiskConfig from a JSON string
vmware_disk_config_instance = VmwareDiskConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareDiskConfig.to_json())

# convert the object into a dict
vmware_disk_config_dict = vmware_disk_config_instance.to_dict()
# create an instance of VmwareDiskConfig from a dict
vmware_disk_config_from_dict = VmwareDiskConfig.from_dict(vmware_disk_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


