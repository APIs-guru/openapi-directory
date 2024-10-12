# AccountPermissionsListResponse

Account Permission List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_permissions** | [**List[AccountPermission]**](AccountPermission.md) | Account permission collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountPermissionsListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.account_permissions_list_response import AccountPermissionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPermissionsListResponse from a JSON string
account_permissions_list_response_instance = AccountPermissionsListResponse.from_json(json)
# print the JSON string representation of the object
print(AccountPermissionsListResponse.to_json())

# convert the object into a dict
account_permissions_list_response_dict = account_permissions_list_response_instance.to_dict()
# create an instance of AccountPermissionsListResponse from a dict
account_permissions_list_response_from_dict = AccountPermissionsListResponse.from_dict(account_permissions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


