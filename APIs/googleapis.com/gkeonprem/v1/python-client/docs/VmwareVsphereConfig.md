# VmwareVsphereConfig

VmwareVsphereConfig represents configuration for the VMware VCenter for node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datastore** | **str** | The name of the vCenter datastore. Inherited from the user cluster. | [optional] 
**host_groups** | **List[str]** | Vsphere host groups to apply to all VMs in the node pool | [optional] 
**tags** | [**List[VmwareVsphereTag]**](VmwareVsphereTag.md) | Tags to apply to VMs. | [optional] 

## Example

```python
from openapi_client.models.vmware_vsphere_config import VmwareVsphereConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVsphereConfig from a JSON string
vmware_vsphere_config_instance = VmwareVsphereConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareVsphereConfig.to_json())

# convert the object into a dict
vmware_vsphere_config_dict = vmware_vsphere_config_instance.to_dict()
# create an instance of VmwareVsphereConfig from a dict
vmware_vsphere_config_from_dict = VmwareVsphereConfig.from_dict(vmware_vsphere_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


