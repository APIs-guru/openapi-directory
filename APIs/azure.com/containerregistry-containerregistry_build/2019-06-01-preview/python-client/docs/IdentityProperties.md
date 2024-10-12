# IdentityProperties

Managed identity for the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal ID of resource identity. | [optional] 
**tenant_id** | **str** | The tenant ID of resource. | [optional] 
**type** | **str** | The identity type. | [optional] 
**user_assigned_identities** | [**Dict[str, UserIdentityProperties]**](UserIdentityProperties.md) | The list of user identities associated with the resource. The user identity   dictionary key references will be ARM resource ids in the form:   &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/      providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}&#39;. | [optional] 

## Example

```python
from openapi_client.models.identity_properties import IdentityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProperties from a JSON string
identity_properties_instance = IdentityProperties.from_json(json)
# print the JSON string representation of the object
print(IdentityProperties.to_json())

# convert the object into a dict
identity_properties_dict = identity_properties_instance.to_dict()
# create an instance of IdentityProperties from a dict
identity_properties_from_dict = IdentityProperties.from_dict(identity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


