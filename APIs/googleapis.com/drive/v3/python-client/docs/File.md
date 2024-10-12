# File

The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_properties** | **Dict[str, str]** | A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. | [optional] 
**capabilities** | [**FileCapabilities**](FileCapabilities.md) |  | [optional] 
**content_hints** | [**FileContentHints**](FileContentHints.md) |  | [optional] 
**content_restrictions** | [**List[ContentRestriction]**](ContentRestriction.md) | Restrictions for accessing the content of the file. Only populated if such a restriction exists. | [optional] 
**copy_requires_writer_permission** | **bool** | Whether the options to copy, print, or download this file, should be disabled for readers and commenters. | [optional] 
**created_time** | **datetime** | The time at which the file was created (RFC 3339 date-time). | [optional] 
**description** | **str** | A short description of the file. | [optional] 
**drive_id** | **str** | Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. | [optional] 
**explicitly_trashed** | **bool** | Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. | [optional] 
**export_links** | **Dict[str, str]** | Output only. Links for exporting Docs Editors files to specific formats. | [optional] [readonly] 
**file_extension** | **str** | Output only. The final component of &#x60;fullFileExtension&#x60;. This is only available for files with binary content in Google Drive. | [optional] 
**folder_color_rgb** | **str** | The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the &#x60;folderColorPalette&#x60; field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead. | [optional] 
**full_file_extension** | **str** | Output only. The full file extension extracted from the &#x60;name&#x60; field. May contain multiple concatenated extensions, such as \&quot;tar.gz\&quot;. This is only available for files with binary content in Google Drive. This is automatically updated when the &#x60;name&#x60; field changes, however it is not cleared if the new name does not contain a valid extension. | [optional] 
**has_augmented_permissions** | **bool** | Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. | [optional] 
**has_thumbnail** | **bool** | Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. | [optional] 
**head_revision_id** | **str** | Output only. The ID of the file&#39;s head revision. This is currently only available for files with binary content in Google Drive. | [optional] 
**icon_link** | **str** | Output only. A static, unauthenticated link to the file&#39;s icon. | [optional] 
**id** | **str** | The ID of the file. | [optional] 
**image_media_metadata** | [**FileImageMediaMetadata**](FileImageMediaMetadata.md) |  | [optional] 
**is_app_authorized** | **bool** | Output only. Whether the file was created or opened by the requesting app. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#file\&quot;&#x60;. | [optional] [default to 'drive#file']
**label_info** | [**FileLabelInfo**](FileLabelInfo.md) |  | [optional] 
**last_modifying_user** | [**User**](User.md) |  | [optional] 
**link_share_metadata** | [**FileLinkShareMetadata**](FileLinkShareMetadata.md) |  | [optional] 
**md5_checksum** | **str** | Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. | [optional] 
**mime_type** | **str** | The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource. | [optional] 
**modified_by_me** | **bool** | Output only. Whether the file has been modified by this user. | [optional] 
**modified_by_me_time** | **datetime** | The last time the file was modified by the user (RFC 3339 date-time). | [optional] 
**modified_time** | **datetime** | he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user. | [optional] 
**name** | **str** | The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. | [optional] 
**original_filename** | **str** | The original filename of the uploaded content if available, or else the original value of the &#x60;name&#x60; field. This is only available for files with binary content in Google Drive. | [optional] 
**owned_by_me** | **bool** | Output only. Whether the user owns the file. Not populated for items in shared drives. | [optional] 
**owners** | [**List[User]**](User.md) | Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn&#39;t populated for items in shared drives. | [optional] 
**parents** | **List[str]** | The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user&#39;s My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the &#x60;addParents&#x60; and &#x60;removeParents&#x60; parameters to modify the parents list. | [optional] 
**permission_ids** | **List[str]** | Output only. List of permission IDs for users with access to this file. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. | [optional] 
**properties** | **Dict[str, str]** | A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests. | [optional] 
**quota_bytes_used** | **str** | Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with &#x60;keepForever&#x60; enabled. | [optional] 
**resource_key** | **str** | Output only. A key needed to access the item via a shared link. | [optional] 
**sha1_checksum** | **str** | Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**sha256_checksum** | **str** | Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**shared** | **bool** | Output only. Whether the file has been shared. Not populated for items in shared drives. | [optional] 
**shared_with_me_time** | **datetime** | The time at which the file was shared with the user, if applicable (RFC 3339 date-time). | [optional] 
**sharing_user** | [**User**](User.md) |  | [optional] 
**shortcut_details** | [**FileShortcutDetails**](FileShortcutDetails.md) |  | [optional] 
**size** | **str** | Output only. Size in bytes of blobs and first party editor files. Won&#39;t be populated for files that have no size, like shortcuts and folders. | [optional] 
**spaces** | **List[str]** | Output only. The list of spaces which contain the file. The currently supported values are &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;. | [optional] 
**starred** | **bool** | Whether the user has starred the file. | [optional] 
**team_drive_id** | **str** | Deprecated: Output only. Use &#x60;driveId&#x60; instead. | [optional] 
**thumbnail_link** | **str** | Output only. A short-lived link to the file&#39;s thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file&#39;s content. If the file isn&#39;t shared publicly, the URL returned in &#x60;Files.thumbnailLink&#x60; must be fetched using a credentialed request. | [optional] 
**thumbnail_version** | **str** | Output only. The thumbnail version for use in thumbnail cache invalidation. | [optional] 
**trashed** | **bool** | Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner&#39;s trash. | [optional] 
**trashed_time** | **datetime** | The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. | [optional] 
**trashing_user** | [**User**](User.md) |  | [optional] 
**version** | **str** | Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. | [optional] 
**video_media_metadata** | [**FileVideoMediaMetadata**](FileVideoMediaMetadata.md) |  | [optional] 
**viewed_by_me** | **bool** | Output only. Whether the file has been viewed by this user. | [optional] 
**viewed_by_me_time** | **datetime** | The last time the file was viewed by the user (RFC 3339 date-time). | [optional] 
**viewers_can_copy_content** | **bool** | Deprecated: Use &#x60;copyRequiresWriterPermission&#x60; instead. | [optional] 
**web_content_link** | **str** | Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. | [optional] 
**web_view_link** | **str** | Output only. A link for opening the file in a relevant Google editor or viewer in a browser. | [optional] 
**writers_can_share** | **bool** | Whether users with only &#x60;writer&#x60; permission can modify the file&#39;s permissions. Not populated for items in shared drives. | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


