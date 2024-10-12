# UserRolesListResponse

User Role List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#userRolesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**user_roles** | [**List[UserRole]**](UserRole.md) | User role collection. | [optional] 

## Example

```python
from openapi_client.models.user_roles_list_response import UserRolesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserRolesListResponse from a JSON string
user_roles_list_response_instance = UserRolesListResponse.from_json(json)
# print the JSON string representation of the object
print(UserRolesListResponse.to_json())

# convert the object into a dict
user_roles_list_response_dict = user_roles_list_response_instance.to_dict()
# create an instance of UserRolesListResponse from a dict
user_roles_list_response_from_dict = UserRolesListResponse.from_dict(user_roles_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


