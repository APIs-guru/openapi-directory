# UserIdentityCollection

List of Users Identity list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[UserIdentityContract]**](UserIdentityContract.md) | User Identity values. | [optional] 

## Example

```python
from openapi_client.models.user_identity_collection import UserIdentityCollection

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentityCollection from a JSON string
user_identity_collection_instance = UserIdentityCollection.from_json(json)
# print the JSON string representation of the object
print(UserIdentityCollection.to_json())

# convert the object into a dict
user_identity_collection_dict = user_identity_collection_instance.to_dict()
# create an instance of UserIdentityCollection from a dict
user_identity_collection_from_dict = UserIdentityCollection.from_dict(user_identity_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


