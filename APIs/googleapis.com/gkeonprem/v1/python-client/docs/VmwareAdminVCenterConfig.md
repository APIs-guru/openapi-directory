# VmwareAdminVCenterConfig

VmwareAdminVCenterConfig contains VCenter configuration for VMware admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The vCenter IP address. | [optional] 
**ca_cert_data** | **str** | Contains the vCenter CA certificate public key for SSL verification. | [optional] 
**cluster** | **str** | The name of the vCenter cluster for the admin cluster. | [optional] 
**data_disk** | **str** | The name of the virtual machine disk (VMDK) for the admin cluster. | [optional] 
**datacenter** | **str** | The name of the vCenter datacenter for the admin cluster. | [optional] 
**datastore** | **str** | The name of the vCenter datastore for the admin cluster. | [optional] 
**folder** | **str** | The name of the vCenter folder for the admin cluster. | [optional] 
**resource_pool** | **str** | The name of the vCenter resource pool for the admin cluster. | [optional] 
**storage_policy_name** | **str** | The name of the vCenter storage policy for the user cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_v_center_config import VmwareAdminVCenterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminVCenterConfig from a JSON string
vmware_admin_v_center_config_instance = VmwareAdminVCenterConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminVCenterConfig.to_json())

# convert the object into a dict
vmware_admin_v_center_config_dict = vmware_admin_v_center_config_instance.to_dict()
# create an instance of VmwareAdminVCenterConfig from a dict
vmware_admin_v_center_config_from_dict = VmwareAdminVCenterConfig.from_dict(vmware_admin_v_center_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


