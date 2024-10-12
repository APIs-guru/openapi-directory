# PermissionList

A list of permissions associated with a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**items** | [**List[Permission]**](Permission.md) | The list of permissions. | [optional] 
**kind** | **str** | This is always &#x60;drive#permissionList&#x60;. | [optional] [default to 'drive#permissionList']
**next_page_token** | **str** | The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.permission_list import PermissionList

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionList from a JSON string
permission_list_instance = PermissionList.from_json(json)
# print the JSON string representation of the object
print(PermissionList.to_json())

# convert the object into a dict
permission_list_dict = permission_list_instance.to_dict()
# create an instance of PermissionList from a dict
permission_list_from_dict = PermissionList.from_dict(permission_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


