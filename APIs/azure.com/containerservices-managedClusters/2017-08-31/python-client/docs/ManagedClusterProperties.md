# ManagedClusterProperties

Properties of the managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pool_profiles** | [**List[ContainerServiceAgentPoolProfile]**](ContainerServiceAgentPoolProfile.md) | Properties of the agent pool. | [optional] 
**dns_prefix** | **str** | DNS prefix specified when creating the managed cluster. | [optional] 
**fqdn** | **str** | FQDN for the master pool. | [optional] [readonly] 
**kubernetes_version** | **str** | Version of Kubernetes specified when creating the managed cluster. | [optional] 
**linux_profile** | [**ContainerServiceLinuxProfile**](ContainerServiceLinuxProfile.md) |  | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 
**service_principal_profile** | [**ContainerServiceServicePrincipalProfile**](ContainerServiceServicePrincipalProfile.md) |  | [optional] 

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


