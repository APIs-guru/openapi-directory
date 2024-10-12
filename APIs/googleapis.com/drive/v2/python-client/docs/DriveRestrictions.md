# DriveRestrictions

A set of restrictions that apply to this shared drive or items inside this shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_managed_restrictions** | **bool** | Whether administrative privileges on this shared drive are required to modify restrictions. | [optional] 
**copy_requires_writer_permission** | **bool** | Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to &#x60;true&#x60;, it will override the similarly named field to &#x60;true&#x60; for any file inside this shared drive. | [optional] 
**domain_users_only** | **bool** | Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. | [optional] 
**drive_members_only** | **bool** | Whether access to items inside this shared drive is restricted to its members. | [optional] 
**sharing_folders_requires_organizer_permission** | **bool** | If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. | [optional] 

## Example

```python
from openapi_client.models.drive_restrictions import DriveRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of DriveRestrictions from a JSON string
drive_restrictions_instance = DriveRestrictions.from_json(json)
# print the JSON string representation of the object
print(DriveRestrictions.to_json())

# convert the object into a dict
drive_restrictions_dict = drive_restrictions_instance.to_dict()
# create an instance of DriveRestrictions from a dict
drive_restrictions_from_dict = DriveRestrictions.from_dict(drive_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


