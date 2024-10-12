# UsersettingsNotesExport

User settings in sub-objects, each for different purposes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_name** | **str** |  | [optional] 
**is_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.usersettings_notes_export import UsersettingsNotesExport

# TODO update the JSON string below
json = "{}"
# create an instance of UsersettingsNotesExport from a JSON string
usersettings_notes_export_instance = UsersettingsNotesExport.from_json(json)
# print the JSON string representation of the object
print(UsersettingsNotesExport.to_json())

# convert the object into a dict
usersettings_notes_export_dict = usersettings_notes_export_instance.to_dict()
# create an instance of UsersettingsNotesExport from a dict
usersettings_notes_export_from_dict = UsersettingsNotesExport.from_dict(usersettings_notes_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


