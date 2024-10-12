# SSHKeyRelationshipsOwnerUserData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ssh_key_relationships_owner_user_data import SSHKeyRelationshipsOwnerUserData

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyRelationshipsOwnerUserData from a JSON string
ssh_key_relationships_owner_user_data_instance = SSHKeyRelationshipsOwnerUserData.from_json(json)
# print the JSON string representation of the object
print(SSHKeyRelationshipsOwnerUserData.to_json())

# convert the object into a dict
ssh_key_relationships_owner_user_data_dict = ssh_key_relationships_owner_user_data_instance.to_dict()
# create an instance of SSHKeyRelationshipsOwnerUserData from a dict
ssh_key_relationships_owner_user_data_from_dict = SSHKeyRelationshipsOwnerUserData.from_dict(ssh_key_relationships_owner_user_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


