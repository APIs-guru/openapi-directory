# UserCollection

Paged Users list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserContract]**](UserContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_collection import UserCollection

# TODO update the JSON string below
json = "{}"
# create an instance of UserCollection from a JSON string
user_collection_instance = UserCollection.from_json(json)
# print the JSON string representation of the object
print(UserCollection.to_json())

# convert the object into a dict
user_collection_dict = user_collection_instance.to_dict()
# create an instance of UserCollection from a dict
user_collection_from_dict = UserCollection.from_dict(user_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


