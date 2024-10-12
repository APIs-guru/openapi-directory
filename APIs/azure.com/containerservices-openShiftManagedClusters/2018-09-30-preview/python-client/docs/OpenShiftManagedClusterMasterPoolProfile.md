# OpenShiftManagedClusterMasterPoolProfile

OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of masters (VMs) to host docker containers. The default value is 3. | 
**name** | **str** | Unique name of the master pool profile in the context of the subscription and resource group. | [optional] 
**os_type** | [**OSType**](OSType.md) |  | [optional] [default to OSType.LINUX]
**subnet_cidr** | **str** | Subnet CIDR for the peering. | [optional] 
**vm_size** | [**OpenShiftContainerServiceVMSize**](OpenShiftContainerServiceVMSize.md) |  | 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_master_pool_profile import OpenShiftManagedClusterMasterPoolProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterMasterPoolProfile from a JSON string
open_shift_managed_cluster_master_pool_profile_instance = OpenShiftManagedClusterMasterPoolProfile.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterMasterPoolProfile.to_json())

# convert the object into a dict
open_shift_managed_cluster_master_pool_profile_dict = open_shift_managed_cluster_master_pool_profile_instance.to_dict()
# create an instance of OpenShiftManagedClusterMasterPoolProfile from a dict
open_shift_managed_cluster_master_pool_profile_from_dict = OpenShiftManagedClusterMasterPoolProfile.from_dict(open_shift_managed_cluster_master_pool_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


