# RestrictedPermission

Details of the permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the permission. Either &#x60;id&#x60; or &#x60;key&#x60; must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions. | [optional] 
**key** | **str** | The key of the permission. Either &#x60;id&#x60; or &#x60;key&#x60; must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions. | [optional] 

## Example

```python
from openapi_client.models.restricted_permission import RestrictedPermission

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictedPermission from a JSON string
restricted_permission_instance = RestrictedPermission.from_json(json)
# print the JSON string representation of the object
print(RestrictedPermission.to_json())

# convert the object into a dict
restricted_permission_dict = restricted_permission_instance.to_dict()
# create an instance of RestrictedPermission from a dict
restricted_permission_from_dict = RestrictedPermission.from_dict(restricted_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


