# About

Information about the user, the user's Drive, and system capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_installed** | **bool** | Whether the user has installed the requesting app. | [optional] 
**can_create_drives** | **bool** | Whether the user can create shared drives. | [optional] 
**can_create_team_drives** | **bool** | Deprecated: Use &#x60;canCreateDrives&#x60; instead. | [optional] 
**drive_themes** | [**List[AboutDriveThemesInner]**](AboutDriveThemesInner.md) | A list of themes that are supported for shared drives. | [optional] 
**export_formats** | **Dict[str, List[str]]** | A map of source MIME type to possible targets for all supported exports. | [optional] 
**folder_color_palette** | **List[str]** | The currently supported folder colors as RGB hex strings. | [optional] 
**import_formats** | **Dict[str, List[str]]** | A map of source MIME type to possible targets for all supported imports. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#about\&quot;&#x60;. | [optional] [default to 'drive#about']
**max_import_sizes** | **Dict[str, str]** | A map of maximum import sizes by MIME type, in bytes. | [optional] 
**max_upload_size** | **str** | The maximum upload size in bytes. | [optional] 
**storage_quota** | [**AboutStorageQuota**](AboutStorageQuota.md) |  | [optional] 
**team_drive_themes** | [**List[AboutTeamDriveThemesInner]**](AboutTeamDriveThemesInner.md) | Deprecated: Use &#x60;driveThemes&#x60; instead. | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.about import About

# TODO update the JSON string below
json = "{}"
# create an instance of About from a JSON string
about_instance = About.from_json(json)
# print the JSON string representation of the object
print(About.to_json())

# convert the object into a dict
about_dict = about_instance.to_dict()
# create an instance of About from a dict
about_from_dict = About.from_dict(about_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


