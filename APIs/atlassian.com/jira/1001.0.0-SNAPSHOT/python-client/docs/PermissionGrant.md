# PermissionGrant

Details about a permission granted to a user or group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holder** | [**PermissionHolder**](PermissionHolder.md) | The user or group being granted the permission. It consists of a &#x60;type&#x60;, a type-dependent &#x60;parameter&#x60; and a type-dependent &#x60;value&#x60;. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. | [optional] 
**id** | **int** | The ID of the permission granted details. | [optional] [readonly] 
**permission** | **str** | The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions. | [optional] 
**var_self** | **str** | The URL of the permission granted details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.permission_grant import PermissionGrant

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionGrant from a JSON string
permission_grant_instance = PermissionGrant.from_json(json)
# print the JSON string representation of the object
print(PermissionGrant.to_json())

# convert the object into a dict
permission_grant_dict = permission_grant_instance.to_dict()
# create an instance of PermissionGrant from a dict
permission_grant_from_dict = PermissionGrant.from_dict(permission_grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


