# Permission

The permission setting of an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_discovery** | **bool** | If true, the item can be discovered (e.g. in the user&#39;s \&quot;Shared with me\&quot; collection) without needing a link to the item. | [optional] 
**anyone** | **object** | Represents any user (including a logged out user). | [optional] 
**domain** | [**Domain**](Domain.md) |  | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**role** | **str** | Indicates the [Google Drive permissions role](https://developers.google.com/drive/web/manage-sharing#roles). The role determines a user&#39;s ability to read, write, and comment on items. | [optional] 
**user** | [**User**](User.md) |  | [optional] 

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


