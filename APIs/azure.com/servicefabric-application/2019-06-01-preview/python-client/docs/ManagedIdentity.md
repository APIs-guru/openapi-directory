# ManagedIdentity

Describes the managed identities for an Azure resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the managed identity. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id of the managed identity. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**type** | [**ManagedIdentityType**](ManagedIdentityType.md) |  | [optional] 
**user_assigned_identities** | [**Dict[str, UserAssignedIdentity]**](UserAssignedIdentity.md) | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;.  | [optional] 

## Example

```python
from openapi_client.models.managed_identity import ManagedIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedIdentity from a JSON string
managed_identity_instance = ManagedIdentity.from_json(json)
# print the JSON string representation of the object
print(ManagedIdentity.to_json())

# convert the object into a dict
managed_identity_dict = managed_identity_instance.to_dict()
# create an instance of ManagedIdentity from a dict
managed_identity_from_dict = ManagedIdentity.from_dict(managed_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


