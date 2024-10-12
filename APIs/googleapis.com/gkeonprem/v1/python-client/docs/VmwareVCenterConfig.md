# VmwareVCenterConfig

Represents configuration for the VMware VCenter for the user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Output only. The vCenter IP address. | [optional] [readonly] 
**ca_cert_data** | **str** | Contains the vCenter CA certificate public key for SSL verification. | [optional] 
**cluster** | **str** | The name of the vCenter cluster for the user cluster. | [optional] 
**datacenter** | **str** | The name of the vCenter datacenter for the user cluster. | [optional] 
**datastore** | **str** | The name of the vCenter datastore for the user cluster. | [optional] 
**folder** | **str** | The name of the vCenter folder for the user cluster. | [optional] 
**resource_pool** | **str** | The name of the vCenter resource pool for the user cluster. | [optional] 
**storage_policy_name** | **str** | The name of the vCenter storage policy for the user cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_v_center_config import VmwareVCenterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVCenterConfig from a JSON string
vmware_v_center_config_instance = VmwareVCenterConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareVCenterConfig.to_json())

# convert the object into a dict
vmware_v_center_config_dict = vmware_v_center_config_instance.to_dict()
# create an instance of VmwareVCenterConfig from a dict
vmware_v_center_config_from_dict = VmwareVCenterConfig.from_dict(vmware_v_center_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


