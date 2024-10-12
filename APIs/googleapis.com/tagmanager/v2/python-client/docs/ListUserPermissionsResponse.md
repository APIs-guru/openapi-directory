# ListUserPermissionsResponse

List user permissions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**user_permission** | [**List[UserPermission]**](UserPermission.md) | All GTM UserPermissions of a GTM Account. | [optional] 

## Example

```python
from openapi_client.models.list_user_permissions_response import ListUserPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserPermissionsResponse from a JSON string
list_user_permissions_response_instance = ListUserPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserPermissionsResponse.to_json())

# convert the object into a dict
list_user_permissions_response_dict = list_user_permissions_response_instance.to_dict()
# create an instance of ListUserPermissionsResponse from a dict
list_user_permissions_response_from_dict = ListUserPermissionsResponse.from_dict(list_user_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


