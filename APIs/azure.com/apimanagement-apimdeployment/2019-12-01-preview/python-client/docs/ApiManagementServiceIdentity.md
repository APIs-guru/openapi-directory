# ApiManagementServiceIdentity

Identity properties of the Api Management service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of the identity. | [optional] [readonly] 
**tenant_id** | **str** | The client tenant id of the identity. | [optional] [readonly] 
**type** | **str** | The type of identity used for the resource. The type &#39;SystemAssigned, UserAssigned&#39; includes both an implicitly created identity and a set of user assigned identities. The type &#39;None&#39; will remove any identities from the service. | 
**user_assigned_identities** | [**Dict[str, ApiManagementServiceIdentityUserAssignedIdentitiesValue]**](ApiManagementServiceIdentityUserAssignedIdentitiesValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_management_service_identity import ApiManagementServiceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceIdentity from a JSON string
api_management_service_identity_instance = ApiManagementServiceIdentity.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceIdentity.to_json())

# convert the object into a dict
api_management_service_identity_dict = api_management_service_identity_instance.to_dict()
# create an instance of ApiManagementServiceIdentity from a dict
api_management_service_identity_from_dict = ApiManagementServiceIdentity.from_dict(api_management_service_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


