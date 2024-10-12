# PermissionList

A list of permissions for a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#permissionList\&quot;&#x60;. | [optional] [default to 'drive#permissionList']
**next_page_token** | **str** | The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 

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


