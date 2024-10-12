# AccountPermissionGroupsListResponse

Account Permission Group List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_permission_groups** | [**List[AccountPermissionGroup]**](AccountPermissionGroup.md) | Account permission group collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountPermissionGroupGroupsListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.account_permission_groups_list_response import AccountPermissionGroupsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPermissionGroupsListResponse from a JSON string
account_permission_groups_list_response_instance = AccountPermissionGroupsListResponse.from_json(json)
# print the JSON string representation of the object
print(AccountPermissionGroupsListResponse.to_json())

# convert the object into a dict
account_permission_groups_list_response_dict = account_permission_groups_list_response_instance.to_dict()
# create an instance of AccountPermissionGroupsListResponse from a dict
account_permission_groups_list_response_from_dict = AccountPermissionGroupsListResponse.from_dict(account_permission_groups_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


