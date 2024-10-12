# SSHKeyRelationshipsOwnerUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SSHKeyRelationshipsOwnerUserData**](SSHKeyRelationshipsOwnerUserData.md) |  | [optional] 

## Example

```python
from openapi_client.models.ssh_key_relationships_owner_user import SSHKeyRelationshipsOwnerUser

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyRelationshipsOwnerUser from a JSON string
ssh_key_relationships_owner_user_instance = SSHKeyRelationshipsOwnerUser.from_json(json)
# print the JSON string representation of the object
print(SSHKeyRelationshipsOwnerUser.to_json())

# convert the object into a dict
ssh_key_relationships_owner_user_dict = ssh_key_relationships_owner_user_instance.to_dict()
# create an instance of SSHKeyRelationshipsOwnerUser from a dict
ssh_key_relationships_owner_user_from_dict = SSHKeyRelationshipsOwnerUser.from_dict(ssh_key_relationships_owner_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


