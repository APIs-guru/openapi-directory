# AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity

Managed service identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | Principal Id of managed service identity. | [optional] [readonly] 
**tenant_id** | **str** | Tenant of managed service identity. | [optional] [readonly] 
**type** | **str** | Type of managed service identity. | [optional] 
**user_assigned_identities** | [**Dict[str, AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentityUserAssignedIdentitiesValue]**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentityUserAssignedIdentitiesValue.md) | The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_identity import AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity from a JSON string
app_service_environments_change_vnet200_response_value_inner_identity_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_identity_dict = app_service_environments_change_vnet200_response_value_inner_identity_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity from a dict
app_service_environments_change_vnet200_response_value_inner_identity_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerIdentity.from_dict(app_service_environments_change_vnet200_response_value_inner_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


