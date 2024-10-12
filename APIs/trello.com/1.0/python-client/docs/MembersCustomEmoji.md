# MembersCustomEmoji


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** | A file | [optional] 
**name** | **str** | a string with a length from 2 to 64 | [optional] 

## Example

```python
from openapi_client.models.members_custom_emoji import MembersCustomEmoji

# TODO update the JSON string below
json = "{}"
# create an instance of MembersCustomEmoji from a JSON string
members_custom_emoji_instance = MembersCustomEmoji.from_json(json)
# print the JSON string representation of the object
print(MembersCustomEmoji.to_json())

# convert the object into a dict
members_custom_emoji_dict = members_custom_emoji_instance.to_dict()
# create an instance of MembersCustomEmoji from a dict
members_custom_emoji_from_dict = MembersCustomEmoji.from_dict(members_custom_emoji_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


