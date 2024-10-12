# ManagedClusterProperties

Properties of the managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_profile** | [**ManagedClusterAADProfile**](ManagedClusterAADProfile.md) |  | [optional] 
**addon_profiles** | **object** | Profile of managed cluster add-on. | [optional] 
**agent_pool_profiles** | [**List[ManagedClusterAgentPoolProfile]**](ManagedClusterAgentPoolProfile.md) | Properties of the agent pool. | [optional] 
**api_server_access_profile** | [**ManagedClusterAPIServerAccessProfile**](ManagedClusterAPIServerAccessProfile.md) |  | [optional] 
**dns_prefix** | **str** | DNS prefix specified when creating the managed cluster. | [optional] 
**enable_pod_security_policy** | **bool** | (PREVIEW) Whether to enable Kubernetes Pod security policy. | [optional] 
**enable_rbac** | **bool** | Whether to enable Kubernetes Role-Based Access Control. | [optional] 
**fqdn** | **str** | FQDN for the master pool. | [optional] [readonly] 
**kubernetes_version** | **str** | Version of Kubernetes specified when creating the managed cluster. | [optional] 
**linux_profile** | [**ContainerServiceLinuxProfile**](ContainerServiceLinuxProfile.md) |  | [optional] 
**max_agent_pools** | **int** | The max number of agent pools for the managed cluster. | [optional] [readonly] 
**network_profile** | [**ContainerServiceNetworkProfile**](ContainerServiceNetworkProfile.md) |  | [optional] 
**node_resource_group** | **str** | Name of the resource group containing agent pool nodes. | [optional] 
**private_fqdn** | **str** | FQDN of private cluster. | [optional] [readonly] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 
**service_principal_profile** | [**ManagedClusterServicePrincipalProfile**](ManagedClusterServicePrincipalProfile.md) |  | [optional] 
**windows_profile** | [**ManagedClusterWindowsProfile**](ManagedClusterWindowsProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_properties import ManagedClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterProperties from a JSON string
managed_cluster_properties_instance = ManagedClusterProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterProperties.to_json())

# convert the object into a dict
managed_cluster_properties_dict = managed_cluster_properties_instance.to_dict()
# create an instance of ManagedClusterProperties from a dict
managed_cluster_properties_from_dict = ManagedClusterProperties.from_dict(managed_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


