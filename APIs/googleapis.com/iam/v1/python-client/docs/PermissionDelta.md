# PermissionDelta

A PermissionDelta message to record the added_permissions and removed_permissions inside a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_permissions** | **List[str]** | Added permissions. | [optional] 
**removed_permissions** | **List[str]** | Removed permissions. | [optional] 

## Example

```python
from openapi_client.models.permission_delta import PermissionDelta

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionDelta from a JSON string
permission_delta_instance = PermissionDelta.from_json(json)
# print the JSON string representation of the object
print(PermissionDelta.to_json())

# convert the object into a dict
permission_delta_dict = permission_delta_instance.to_dict()
# create an instance of PermissionDelta from a dict
permission_delta_from_dict = PermissionDelta.from_dict(permission_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


