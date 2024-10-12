# PermissionGetResult

Permissions information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[Permission]**](Permission.md) | An array of permissions. | [optional] 

## Example

```python
from openapi_client.models.permission_get_result import PermissionGetResult

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionGetResult from a JSON string
permission_get_result_instance = PermissionGetResult.from_json(json)
# print the JSON string representation of the object
print(PermissionGetResult.to_json())

# convert the object into a dict
permission_get_result_dict = permission_get_result_instance.to_dict()
# create an instance of PermissionGetResult from a dict
permission_get_result_from_dict = PermissionGetResult.from_dict(permission_get_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


