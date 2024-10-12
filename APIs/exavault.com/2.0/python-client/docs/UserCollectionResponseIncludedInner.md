# UserCollectionResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ResourceAttributes**](ResourceAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**relationships** | [**ResourceRelationships**](ResourceRelationships.md) |  | [optional] 
**type** | **str** | Type of item. \&quot;account\&quot; | [optional] 

## Example

```python
from openapi_client.models.user_collection_response_included_inner import UserCollectionResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserCollectionResponseIncludedInner from a JSON string
user_collection_response_included_inner_instance = UserCollectionResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(UserCollectionResponseIncludedInner.to_json())

# convert the object into a dict
user_collection_response_included_inner_dict = user_collection_response_included_inner_instance.to_dict()
# create an instance of UserCollectionResponseIncludedInner from a dict
user_collection_response_included_inner_from_dict = UserCollectionResponseIncludedInner.from_dict(user_collection_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


