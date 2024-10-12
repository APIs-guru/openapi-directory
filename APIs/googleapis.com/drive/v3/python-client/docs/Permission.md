# Permission

A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_file_discovery** | **bool** | Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type &#x60;domain&#x60; or &#x60;anyone&#x60;. | [optional] 
**deleted** | **bool** | Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. | [optional] 
**display_name** | **str** | Output only. The \&quot;pretty\&quot; name of the value of the permission. The following is a list of examples for each type of permission: * &#x60;user&#x60; - User&#39;s full name, as defined for their Google account, such as \&quot;Joe Smith.\&quot; * &#x60;group&#x60; - Name of the Google Group, such as \&quot;The Company Administrators.\&quot; * &#x60;domain&#x60; - String domain name, such as \&quot;thecompany.com.\&quot; * &#x60;anyone&#x60; - No &#x60;displayName&#x60; is present. | [optional] 
**domain** | **str** | The domain to which this permission refers. | [optional] 
**email_address** | **str** | The email address of the user or group to which this permission refers. | [optional] 
**expiration_time** | **datetime** | The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future | [optional] 
**id** | **str** | Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as &#x60;permissionId&#x60;. IDs should be treated as opaque values. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#permission\&quot;&#x60;. | [optional] [default to 'drive#permission']
**pending_owner** | **bool** | Whether the account associated with this permission is a pending owner. Only populated for &#x60;user&#x60; type permissions for files that are not in a shared drive. | [optional] 
**permission_details** | [**List[PermissionPermissionDetailsInner]**](PermissionPermissionDetailsInner.md) | Output only. Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. | [optional] [readonly] 
**photo_link** | **str** | Output only. A link to the user&#39;s profile photo, if available. | [optional] 
**role** | **str** | The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * &#x60;owner&#x60; * &#x60;organizer&#x60; * &#x60;fileOrganizer&#x60; * &#x60;writer&#x60; * &#x60;commenter&#x60; * &#x60;reader&#x60; | [optional] 
**team_drive_permission_details** | [**List[PermissionTeamDrivePermissionDetailsInner]**](PermissionTeamDrivePermissionDetailsInner.md) | Output only. Deprecated: Output only. Use &#x60;permissionDetails&#x60; instead. | [optional] [readonly] 
**type** | **str** | The type of the grantee. Valid values are: * &#x60;user&#x60; * &#x60;group&#x60; * &#x60;domain&#x60; * &#x60;anyone&#x60; When creating a permission, if &#x60;type&#x60; is &#x60;user&#x60; or &#x60;group&#x60;, you must provide an &#x60;emailAddress&#x60; for the user or group. When &#x60;type&#x60; is &#x60;domain&#x60;, you must provide a &#x60;domain&#x60;. There isn&#39;t extra information required for an &#x60;anyone&#x60; type. | [optional] 
**view** | **str** | Indicates the view for this permission. Only populated for permissions that belong to a view. &#39;published&#39; is the only supported value. | [optional] 

## Example

```python
from openapi_client.models.permission import Permission

# TODO update the JSON string below
json = "{}"
# create an instance of Permission from a JSON string
permission_instance = Permission.from_json(json)
# print the JSON string representation of the object
print(Permission.to_json())

# convert the object into a dict
permission_dict = permission_instance.to_dict()
# create an instance of Permission from a dict
permission_from_dict = Permission.from_dict(permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


