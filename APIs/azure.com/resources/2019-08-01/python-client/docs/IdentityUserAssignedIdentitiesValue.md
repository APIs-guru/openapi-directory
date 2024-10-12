# IdentityUserAssignedIdentitiesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of user assigned identity. | [optional] [readonly] 
**principal_id** | **str** | The principal id of user assigned identity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity_user_assigned_identities_value import IdentityUserAssignedIdentitiesValue

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityUserAssignedIdentitiesValue from a JSON string
identity_user_assigned_identities_value_instance = IdentityUserAssignedIdentitiesValue.from_json(json)
# print the JSON string representation of the object
print(IdentityUserAssignedIdentitiesValue.to_json())

# convert the object into a dict
identity_user_assigned_identities_value_dict = identity_user_assigned_identities_value_instance.to_dict()
# create an instance of IdentityUserAssignedIdentitiesValue from a dict
identity_user_assigned_identities_value_from_dict = IdentityUserAssignedIdentitiesValue.from_dict(identity_user_assigned_identities_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


