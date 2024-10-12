# OpenShiftManagedClusterProperties

Properties of the OpenShift managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pool_profiles** | [**List[OpenShiftManagedClusterAgentPoolProfile]**](OpenShiftManagedClusterAgentPoolProfile.md) | Configuration of OpenShift cluster VMs. | [optional] 
**auth_profile** | [**OpenShiftManagedClusterAuthProfile**](OpenShiftManagedClusterAuthProfile.md) |  | [optional] 
**fqdn** | **str** | User-specified FQDN for OpenShift API server loadbalancer internal hostname. | [optional] 
**master_pool_profile** | [**OpenShiftManagedClusterMasterPoolProfile**](OpenShiftManagedClusterMasterPoolProfile.md) |  | [optional] 
**network_profile** | [**NetworkProfile**](NetworkProfile.md) |  | [optional] 
**open_shift_version** | **str** | Version of OpenShift specified when creating the cluster. | 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 
**public_hostname** | **str** | Optional user-specified FQDN for OpenShift API server. | [optional] 
**router_profiles** | [**List[OpenShiftRouterProfile]**](OpenShiftRouterProfile.md) | Configuration for OpenShift router(s). | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_properties import OpenShiftManagedClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterProperties from a JSON string
open_shift_managed_cluster_properties_instance = OpenShiftManagedClusterProperties.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterProperties.to_json())

# convert the object into a dict
open_shift_managed_cluster_properties_dict = open_shift_managed_cluster_properties_instance.to_dict()
# create an instance of OpenShiftManagedClusterProperties from a dict
open_shift_managed_cluster_properties_from_dict = OpenShiftManagedClusterProperties.from_dict(open_shift_managed_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


