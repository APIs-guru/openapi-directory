# UserPermission

Details of a permission and its availability to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated_key** | **bool** | Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the &#x60;permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.&#x60; | [optional] 
**description** | **str** | The description of the permission. | [optional] 
**have_permission** | **bool** | Whether the permission is available to the user in the queried context. | [optional] 
**id** | **str** | The ID of the permission. Either &#x60;id&#x60; or &#x60;key&#x60; must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions. | [optional] 
**key** | **str** | The key of the permission. Either &#x60;id&#x60; or &#x60;key&#x60; must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions. | [optional] 
**name** | **str** | The name of the permission. | [optional] 
**type** | **str** | The type of the permission. | [optional] 

## Example

```python
from openapi_client.models.user_permission import UserPermission

# TODO update the JSON string below
json = "{}"
# create an instance of UserPermission from a JSON string
user_permission_instance = UserPermission.from_json(json)
# print the JSON string representation of the object
print(UserPermission.to_json())

# convert the object into a dict
user_permission_dict = user_permission_instance.to_dict()
# create an instance of UserPermission from a dict
user_permission_from_dict = UserPermission.from_dict(user_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


