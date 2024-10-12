# UserRelationshipsOwnerAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the account. | [optional] 
**type** | **str** | Type is account. | [optional] 

## Example

```python
from openapi_client.models.user_relationships_owner_account_data import UserRelationshipsOwnerAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of UserRelationshipsOwnerAccountData from a JSON string
user_relationships_owner_account_data_instance = UserRelationshipsOwnerAccountData.from_json(json)
# print the JSON string representation of the object
print(UserRelationshipsOwnerAccountData.to_json())

# convert the object into a dict
user_relationships_owner_account_data_dict = user_relationships_owner_account_data_instance.to_dict()
# create an instance of UserRelationshipsOwnerAccountData from a dict
user_relationships_owner_account_data_from_dict = UserRelationshipsOwnerAccountData.from_dict(user_relationships_owner_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


