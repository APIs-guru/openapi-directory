# ManagedClusterIdentity

Identity for the managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the system assigned identity which is used by master components. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id of the system assigned identity which is used by master components. | [optional] [readonly] 
**type** | **str** | The type of identity used for the managed cluster. Type &#39;SystemAssigned&#39; will use an implicitly created identity in master components and an auto-created user assigned identity in MC_ resource group in agent nodes. Type &#39;None&#39; will not use MSI for the managed cluster, service principal will be used instead. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_identity import ManagedClusterIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterIdentity from a JSON string
managed_cluster_identity_instance = ManagedClusterIdentity.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterIdentity.to_json())

# convert the object into a dict
managed_cluster_identity_dict = managed_cluster_identity_instance.to_dict()
# create an instance of ManagedClusterIdentity from a dict
managed_cluster_identity_from_dict = ManagedClusterIdentity.from_dict(managed_cluster_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


