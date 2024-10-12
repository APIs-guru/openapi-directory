# OpenShiftManagedClusterAgentPoolProfile

Defines the configuration of the OpenShift cluster VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of agents (VMs) to host docker containers. | 
**name** | **str** | Unique name of the pool profile in the context of the subscription and resource group. | 
**os_type** | [**OSType**](OSType.md) |  | [optional] [default to OSType.LINUX]
**role** | [**OpenShiftAgentPoolProfileRole**](OpenShiftAgentPoolProfileRole.md) |  | [optional] 
**subnet_cidr** | **str** | Subnet CIDR for the peering. | [optional] [default to '10.0.0.0/24']
**vm_size** | [**OpenShiftContainerServiceVMSize**](OpenShiftContainerServiceVMSize.md) |  | 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_agent_pool_profile import OpenShiftManagedClusterAgentPoolProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterAgentPoolProfile from a JSON string
open_shift_managed_cluster_agent_pool_profile_instance = OpenShiftManagedClusterAgentPoolProfile.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterAgentPoolProfile.to_json())

# convert the object into a dict
open_shift_managed_cluster_agent_pool_profile_dict = open_shift_managed_cluster_agent_pool_profile_instance.to_dict()
# create an instance of OpenShiftManagedClusterAgentPoolProfile from a dict
open_shift_managed_cluster_agent_pool_profile_from_dict = OpenShiftManagedClusterAgentPoolProfile.from_dict(open_shift_managed_cluster_agent_pool_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


