# Avatar

Details of an avatar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | The file name of the avatar icon. Returned for system avatars. | [optional] [readonly] 
**id** | **str** | The ID of the avatar. | 
**is_deletable** | **bool** | Whether the avatar can be deleted. | [optional] [readonly] 
**is_selected** | **bool** | Whether the avatar is used in Jira. For example, shown as a project&#39;s avatar. | [optional] [readonly] 
**is_system_avatar** | **bool** | Whether the avatar is a system avatar. | [optional] [readonly] 
**owner** | **str** | The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user. | [optional] [readonly] 
**urls** | **Dict[str, str]** | The list of avatar icon URLs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.avatar import Avatar

# TODO update the JSON string below
json = "{}"
# create an instance of Avatar from a JSON string
avatar_instance = Avatar.from_json(json)
# print the JSON string representation of the object
print(Avatar.to_json())

# convert the object into a dict
avatar_dict = avatar_instance.to_dict()
# create an instance of Avatar from a dict
avatar_from_dict = Avatar.from_dict(avatar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


