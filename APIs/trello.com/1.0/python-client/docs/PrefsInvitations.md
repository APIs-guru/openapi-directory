# PrefsInvitations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: admins or members | [optional] 

## Example

```python
from openapi_client.models.prefs_invitations import PrefsInvitations

# TODO update the JSON string below
json = "{}"
# create an instance of PrefsInvitations from a JSON string
prefs_invitations_instance = PrefsInvitations.from_json(json)
# print the JSON string representation of the object
print(PrefsInvitations.to_json())

# convert the object into a dict
prefs_invitations_dict = prefs_invitations_instance.to_dict()
# create an instance of PrefsInvitations from a dict
prefs_invitations_from_dict = PrefsInvitations.from_dict(prefs_invitations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


