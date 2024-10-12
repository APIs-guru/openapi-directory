# PermissionScheme

Details of a permission scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description for the permission scheme. | [optional] 
**expand** | **str** | The expand options available for the permission scheme. | [optional] [readonly] 
**id** | **int** | The ID of the permission scheme. | [optional] [readonly] 
**name** | **str** | The name of the permission scheme. Must be unique. | 
**permissions** | [**List[PermissionGrant]**](PermissionGrant.md) | The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information. | [optional] 
**scope** | [**Scope**](Scope.md) | The scope of the permission scheme. | [optional] 
**var_self** | **str** | The URL of the permission scheme. | [optional] [readonly] 

## Example

```python
from openapi_client.models.permission_scheme import PermissionScheme

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionScheme from a JSON string
permission_scheme_instance = PermissionScheme.from_json(json)
# print the JSON string representation of the object
print(PermissionScheme.to_json())

# convert the object into a dict
permission_scheme_dict = permission_scheme_instance.to_dict()
# create an instance of PermissionScheme from a dict
permission_scheme_from_dict = PermissionScheme.from_dict(permission_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


