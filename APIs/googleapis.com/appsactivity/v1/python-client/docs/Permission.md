# Permission

Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user or group the permission applies to. | [optional] 
**permission_id** | **str** | The ID for this permission. Corresponds to the Drive API&#39;s permission ID returned as part of the Drive Permissions resource. | [optional] 
**role** | **str** | Indicates the Google Drive permissions role. The role determines a user&#39;s ability to read, write, or comment on the file. | [optional] 
**type** | **str** | Indicates how widely permissions are granted. | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**with_link** | **bool** | Whether the permission requires a link to the file. | [optional] 

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


