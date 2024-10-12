# ClusterIdentity

Identity for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of cluster identity. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the cluster. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**type** | **str** | The type of identity used for the cluster. The type &#39;SystemAssigned, UserAssigned&#39; includes both an implicitly created identity and a set of user assigned identities. | [optional] 
**user_assigned_identities** | [**Dict[str, ClusterIdentityUserAssignedIdentitiesValue]**](ClusterIdentityUserAssignedIdentitiesValue.md) | The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;. | [optional] 

## Example

```python
from openapi_client.models.cluster_identity import ClusterIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterIdentity from a JSON string
cluster_identity_instance = ClusterIdentity.from_json(json)
# print the JSON string representation of the object
print(ClusterIdentity.to_json())

# convert the object into a dict
cluster_identity_dict = cluster_identity_instance.to_dict()
# create an instance of ClusterIdentity from a dict
cluster_identity_from_dict = ClusterIdentity.from_dict(cluster_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


