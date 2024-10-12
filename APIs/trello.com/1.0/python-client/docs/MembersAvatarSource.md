# MembersAvatarSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: gravatar, none or upload | [optional] 

## Example

```python
from openapi_client.models.members_avatar_source import MembersAvatarSource

# TODO update the JSON string below
json = "{}"
# create an instance of MembersAvatarSource from a JSON string
members_avatar_source_instance = MembersAvatarSource.from_json(json)
# print the JSON string representation of the object
print(MembersAvatarSource.to_json())

# convert the object into a dict
members_avatar_source_dict = members_avatar_source_instance.to_dict()
# create an instance of MembersAvatarSource from a dict
members_avatar_source_from_dict = MembersAvatarSource.from_dict(members_avatar_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


