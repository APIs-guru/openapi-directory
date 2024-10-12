# PermissionGrants

List of permission grants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional permission grant details in the response. | [optional] [readonly] 
**permissions** | [**List[PermissionGrant]**](PermissionGrant.md) | Permission grants list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.permission_grants import PermissionGrants

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionGrants from a JSON string
permission_grants_instance = PermissionGrants.from_json(json)
# print the JSON string representation of the object
print(PermissionGrants.to_json())

# convert the object into a dict
permission_grants_dict = permission_grants_instance.to_dict()
# create an instance of PermissionGrants from a dict
permission_grants_from_dict = PermissionGrants.from_dict(permission_grants_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


