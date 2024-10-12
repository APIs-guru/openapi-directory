# TeamDriveRestrictions

A set of restrictions that apply to this Team Drive or items inside this Team Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_managed_restrictions** | **bool** | Whether administrative privileges on this Team Drive are required to modify restrictions. | [optional] 
**copy_requires_writer_permission** | **bool** | Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to &#x60;true&#x60;, it will override the similarly named field to &#x60;true&#x60; for any file inside this Team Drive. | [optional] 
**domain_users_only** | **bool** | Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. | [optional] 
**sharing_folders_requires_organizer_permission** | **bool** | If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. | [optional] 
**team_members_only** | **bool** | Whether access to items inside this Team Drive is restricted to members of this Team Drive. | [optional] 

## Example

```python
from openapi_client.models.team_drive_restrictions import TeamDriveRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDriveRestrictions from a JSON string
team_drive_restrictions_instance = TeamDriveRestrictions.from_json(json)
# print the JSON string representation of the object
print(TeamDriveRestrictions.to_json())

# convert the object into a dict
team_drive_restrictions_dict = team_drive_restrictions_instance.to_dict()
# create an instance of TeamDriveRestrictions from a dict
team_drive_restrictions_from_dict = TeamDriveRestrictions.from_dict(team_drive_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


