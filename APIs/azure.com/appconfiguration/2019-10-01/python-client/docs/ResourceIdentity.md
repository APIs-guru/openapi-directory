# ResourceIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the identity. This property will only be provided for a system-assigned identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the resource&#39;s identity. This property will only be provided for a system-assigned identity. | [optional] [readonly] 
**type** | **str** | The type of managed identity used. The type &#39;SystemAssigned, UserAssigned&#39; includes both an implicitly created identity and a set of user-assigned identities. The type &#39;None&#39; will remove any identities. | [optional] 
**user_assigned_identities** | [**Dict[str, UserIdentity]**](UserIdentity.md) | The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;. | [optional] 

## Example

```python
from openapi_client.models.resource_identity import ResourceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceIdentity from a JSON string
resource_identity_instance = ResourceIdentity.from_json(json)
# print the JSON string representation of the object
print(ResourceIdentity.to_json())

# convert the object into a dict
resource_identity_dict = resource_identity_instance.to_dict()
# create an instance of ResourceIdentity from a dict
resource_identity_from_dict = ResourceIdentity.from_dict(resource_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


