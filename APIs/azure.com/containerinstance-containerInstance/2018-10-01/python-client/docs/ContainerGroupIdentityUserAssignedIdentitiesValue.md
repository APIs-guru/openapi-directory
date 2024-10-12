# ContainerGroupIdentityUserAssignedIdentitiesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of user assigned identity. | [optional] [readonly] 
**principal_id** | **str** | The principal id of user assigned identity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_group_identity_user_assigned_identities_value import ContainerGroupIdentityUserAssignedIdentitiesValue

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupIdentityUserAssignedIdentitiesValue from a JSON string
container_group_identity_user_assigned_identities_value_instance = ContainerGroupIdentityUserAssignedIdentitiesValue.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupIdentityUserAssignedIdentitiesValue.to_json())

# convert the object into a dict
container_group_identity_user_assigned_identities_value_dict = container_group_identity_user_assigned_identities_value_instance.to_dict()
# create an instance of ContainerGroupIdentityUserAssignedIdentitiesValue from a dict
container_group_identity_user_assigned_identities_value_from_dict = ContainerGroupIdentityUserAssignedIdentitiesValue.from_dict(container_group_identity_user_assigned_identities_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


