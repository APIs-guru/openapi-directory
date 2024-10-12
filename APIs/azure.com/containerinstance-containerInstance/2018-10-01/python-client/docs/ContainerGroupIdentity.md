# ContainerGroupIdentity

Identity for the container group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the container group identity. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the container group. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**type** | **str** | The type of identity used for the container group. The type &#39;SystemAssigned, UserAssigned&#39; includes both an implicitly created identity and a set of user assigned identities. The type &#39;None&#39; will remove any identities from the container group. | [optional] 
**user_assigned_identities** | [**Dict[str, ContainerGroupIdentityUserAssignedIdentitiesValue]**](ContainerGroupIdentityUserAssignedIdentitiesValue.md) | The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;. | [optional] 

## Example

```python
from openapi_client.models.container_group_identity import ContainerGroupIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupIdentity from a JSON string
container_group_identity_instance = ContainerGroupIdentity.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupIdentity.to_json())

# convert the object into a dict
container_group_identity_dict = container_group_identity_instance.to_dict()
# create an instance of ContainerGroupIdentity from a dict
container_group_identity_from_dict = ContainerGroupIdentity.from_dict(container_group_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


