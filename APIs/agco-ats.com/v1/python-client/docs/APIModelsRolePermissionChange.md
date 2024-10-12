# APIModelsRolePermissionChange

Change to the Permissions that a Role is given.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action to take. | 
**permission** | **str** | The name of the permission to grant or revoke. | 

## Example

```python
from openapi_client.models.api_models_role_permission_change import APIModelsRolePermissionChange

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsRolePermissionChange from a JSON string
api_models_role_permission_change_instance = APIModelsRolePermissionChange.from_json(json)
# print the JSON string representation of the object
print(APIModelsRolePermissionChange.to_json())

# convert the object into a dict
api_models_role_permission_change_dict = api_models_role_permission_change_instance.to_dict()
# create an instance of APIModelsRolePermissionChange from a dict
api_models_role_permission_change_from_dict = APIModelsRolePermissionChange.from_dict(api_models_role_permission_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


