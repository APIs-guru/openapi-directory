# PermissionSchemes

List of all permission schemes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_schemes** | [**List[PermissionScheme]**](PermissionScheme.md) | Permission schemes list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.permission_schemes import PermissionSchemes

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionSchemes from a JSON string
permission_schemes_instance = PermissionSchemes.from_json(json)
# print the JSON string representation of the object
print(PermissionSchemes.to_json())

# convert the object into a dict
permission_schemes_dict = permission_schemes_instance.to_dict()
# create an instance of PermissionSchemes from a dict
permission_schemes_from_dict = PermissionSchemes.from_dict(permission_schemes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


