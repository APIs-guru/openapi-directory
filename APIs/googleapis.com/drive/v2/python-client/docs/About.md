# About

An item with user information and settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_role_info** | [**List[AboutAdditionalRoleInfoInner]**](AboutAdditionalRoleInfoInner.md) | Information about supported additional roles per file type. The most specific type takes precedence. | [optional] 
**can_create_drives** | **bool** | Whether the user can create shared drives. | [optional] 
**can_create_team_drives** | **bool** | Deprecated: Use &#x60;canCreateDrives&#x60; instead. | [optional] 
**domain_sharing_policy** | **str** | The domain sharing policy for the current user. Possible values are: * &#x60;allowed&#x60; * &#x60;allowedWithWarning&#x60; * &#x60;incomingOnly&#x60; * &#x60;disallowed&#x60; | [optional] 
**drive_themes** | [**List[AboutDriveThemesInner]**](AboutDriveThemesInner.md) | A list of themes that are supported for shared drives. | [optional] 
**etag** | **str** | The ETag of the item. | [optional] 
**export_formats** | [**List[AboutExportFormatsInner]**](AboutExportFormatsInner.md) | The allowable export formats. | [optional] 
**features** | [**List[AboutFeaturesInner]**](AboutFeaturesInner.md) | List of additional features enabled on this account. | [optional] 
**folder_color_palette** | **List[str]** | The palette of allowable folder colors as RGB hex strings. | [optional] 
**import_formats** | [**List[AboutImportFormatsInner]**](AboutImportFormatsInner.md) | The allowable import formats. | [optional] 
**is_current_app_installed** | **bool** | A boolean indicating whether the authenticated app is installed by the authenticated user. | [optional] 
**kind** | **str** | This is always &#x60;drive#about&#x60;. | [optional] [default to 'drive#about']
**language_code** | **str** | The user&#39;s language or locale code, as defined by BCP 47, with some extensions from Unicode&#39;s LDML format (http://www.unicode.org/reports/tr35/). | [optional] 
**largest_change_id** | **str** | The largest change id. | [optional] 
**max_upload_sizes** | [**List[AboutMaxUploadSizesInner]**](AboutMaxUploadSizesInner.md) | List of max upload sizes for each file type. The most specific type takes precedence. | [optional] 
**name** | **str** | The name of the current user. | [optional] 
**permission_id** | **str** | The current user&#39;s ID as visible in the permissions collection. | [optional] 
**quota_bytes_by_service** | [**List[AboutQuotaBytesByServiceInner]**](AboutQuotaBytesByServiceInner.md) | The amount of storage quota used by different Google services. | [optional] 
**quota_bytes_total** | **str** | The total number of quota bytes. This is only relevant when quotaType is LIMITED. | [optional] 
**quota_bytes_used** | **str** | The number of quota bytes used by Google Drive. | [optional] 
**quota_bytes_used_aggregate** | **str** | The number of quota bytes used by all Google apps (Drive, Picasa, etc.). | [optional] 
**quota_bytes_used_in_trash** | **str** | The number of quota bytes used by trashed items. | [optional] 
**quota_type** | **str** | The type of the user&#39;s storage quota. Possible values are: * &#x60;LIMITED&#x60; * &#x60;UNLIMITED&#x60; | [optional] 
**remaining_change_ids** | **str** | The number of remaining change ids, limited to no more than 2500. | [optional] 
**root_folder_id** | **str** | The id of the root folder. | [optional] 
**self_link** | **str** | A link back to this item. | [optional] 
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


