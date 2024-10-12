# ApiManagementServiceIdentityUserAssignedIdentitiesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of user assigned identity. | [optional] [readonly] 
**principal_id** | **str** | The principal id of user assigned identity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_management_service_identity_user_assigned_identities_value import ApiManagementServiceIdentityUserAssignedIdentitiesValue

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceIdentityUserAssignedIdentitiesValue from a JSON string
api_management_service_identity_user_assigned_identities_value_instance = ApiManagementServiceIdentityUserAssignedIdentitiesValue.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceIdentityUserAssignedIdentitiesValue.to_json())

# convert the object into a dict
api_management_service_identity_user_assigned_identities_value_dict = api_management_service_identity_user_assigned_identities_value_instance.to_dict()
# create an instance of ApiManagementServiceIdentityUserAssignedIdentitiesValue from a dict
api_management_service_identity_user_assigned_identities_value_from_dict = ApiManagementServiceIdentityUserAssignedIdentitiesValue.from_dict(api_management_service_identity_user_assigned_identities_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


