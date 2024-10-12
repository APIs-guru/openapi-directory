# UsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | 
**included** | [**List[App]**](App.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.users_response import UsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersResponse from a JSON string
users_response_instance = UsersResponse.from_json(json)
# print the JSON string representation of the object
print(UsersResponse.to_json())

# convert the object into a dict
users_response_dict = users_response_instance.to_dict()
# create an instance of UsersResponse from a dict
users_response_from_dict = UsersResponse.from_dict(users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


