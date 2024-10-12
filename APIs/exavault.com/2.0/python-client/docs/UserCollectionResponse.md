# UserCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | [optional] 
**included** | [**List[UserCollectionResponseIncludedInner]**](UserCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 
**returned_results** | **int** | Number of results returned. | [optional] 
**total_results** | **int** | Total results found. | [optional] 

## Example

```python
from openapi_client.models.user_collection_response import UserCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserCollectionResponse from a JSON string
user_collection_response_instance = UserCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(UserCollectionResponse.to_json())

# convert the object into a dict
user_collection_response_dict = user_collection_response_instance.to_dict()
# create an instance of UserCollectionResponse from a dict
user_collection_response_from_dict = UserCollectionResponse.from_dict(user_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


