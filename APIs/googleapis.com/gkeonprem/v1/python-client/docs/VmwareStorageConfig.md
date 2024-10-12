# VmwareStorageConfig

Specifies vSphere CSI components deployment config in the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vsphere_csi_disabled** | **bool** | Whether or not to deploy vSphere CSI components in the VMware user cluster. Enabled by default. | [optional] 

## Example

```python
from openapi_client.models.vmware_storage_config import VmwareStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareStorageConfig from a JSON string
vmware_storage_config_instance = VmwareStorageConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareStorageConfig.to_json())

# convert the object into a dict
vmware_storage_config_dict = vmware_storage_config_instance.to_dict()
# create an instance of VmwareStorageConfig from a dict
vmware_storage_config_from_dict = VmwareStorageConfig.from_dict(vmware_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


