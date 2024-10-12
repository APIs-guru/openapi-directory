# SSHKeyRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_user** | [**SSHKeyRelationshipsOwnerUser**](SSHKeyRelationshipsOwnerUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.ssh_key_relationships import SSHKeyRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyRelationships from a JSON string
ssh_key_relationships_instance = SSHKeyRelationships.from_json(json)
# print the JSON string representation of the object
print(SSHKeyRelationships.to_json())

# convert the object into a dict
ssh_key_relationships_dict = ssh_key_relationships_instance.to_dict()
# create an instance of SSHKeyRelationships from a dict
ssh_key_relationships_from_dict = SSHKeyRelationships.from_dict(ssh_key_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


