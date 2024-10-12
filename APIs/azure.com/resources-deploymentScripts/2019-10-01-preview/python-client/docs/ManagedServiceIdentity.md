# ManagedServiceIdentity

Managed identity generic object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of the managed identity. | [optional] 
**user_assigned_identities** | [**Dict[str, UserAssignedIdentity]**](UserAssignedIdentity.md) | The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. | [optional] 

## Example

```python
from openapi_client.models.managed_service_identity import ManagedServiceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedServiceIdentity from a JSON string
managed_service_identity_instance = ManagedServiceIdentity.from_json(json)
# print the JSON string representation of the object
print(ManagedServiceIdentity.to_json())

# convert the object into a dict
managed_service_identity_dict = managed_service_identity_instance.to_dict()
# create an instance of ManagedServiceIdentity from a dict
managed_service_identity_from_dict = ManagedServiceIdentity.from_dict(managed_service_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


