# UserAssignedIdentity

User-assigned managed identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client App Id associated with this identity. | [optional] 
**principal_id** | **str** | Azure Active Directory principal ID associated with this Identity. | [optional] 

## Example

```python
from openapi_client.models.user_assigned_identity import UserAssignedIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of UserAssignedIdentity from a JSON string
user_assigned_identity_instance = UserAssignedIdentity.from_json(json)
# print the JSON string representation of the object
print(UserAssignedIdentity.to_json())

# convert the object into a dict
user_assigned_identity_dict = user_assigned_identity_instance.to_dict()
# create an instance of UserAssignedIdentity from a dict
user_assigned_identity_from_dict = UserAssignedIdentity.from_dict(user_assigned_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


