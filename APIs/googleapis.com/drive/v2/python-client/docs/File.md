# File

The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Output only. A link for opening the file in a relevant Google editor or viewer. | [optional] 
**app_data_contents** | **bool** | Output only. Whether this file is in the Application Data folder. | [optional] 
**can_comment** | **bool** | Output only. Deprecated: Use &#x60;capabilities/canComment&#x60; instead. | [optional] 
**can_read_revisions** | **bool** | Output only. Deprecated: Use &#x60;capabilities/canReadRevisions&#x60; instead. | [optional] 
**capabilities** | [**FileCapabilities**](FileCapabilities.md) |  | [optional] 
**content_restrictions** | [**List[ContentRestriction]**](ContentRestriction.md) | Restrictions for accessing the content of the file. Only populated if such a restriction exists. | [optional] 
**copy_requires_writer_permission** | **bool** | Whether the options to copy, print, or download this file, should be disabled for readers and commenters. | [optional] 
**copyable** | **bool** | Output only. Deprecated: Use &#x60;capabilities/canCopy&#x60; instead. | [optional] 
**created_date** | **datetime** | Create time for this file (formatted RFC 3339 timestamp). | [optional] 
**default_open_with_link** | **str** | Output only. A link to open this file with the user&#39;s default app for this file. Only populated when the drive.apps.readonly scope is used. | [optional] 
**description** | **str** | A short description of the file. | [optional] 
**download_url** | **str** | Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files. | [optional] 
**drive_id** | **str** | Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. | [optional] 
**editable** | **bool** | Output only. Deprecated: Use &#x60;capabilities/canEdit&#x60; instead. | [optional] 
**embed_link** | **str** | Output only. A link for embedding the file. | [optional] 
**etag** | **str** | Output only. ETag of the file. | [optional] 
**explicitly_trashed** | **bool** | Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed. | [optional] 
**export_links** | **Dict[str, str]** | Output only. Links for exporting Docs Editors files to specific formats. | [optional] [readonly] 
**file_extension** | **str** | Output only. The final component of &#x60;fullFileExtension&#x60; with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**file_size** | **str** | Output only. Size in bytes of blobs and first party editor files. Won&#39;t be populated for files that have no size, like shortcuts and folders. | [optional] 
**folder_color_rgb** | **str** | Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. | [optional] 
**full_file_extension** | **str** | Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as \&quot;tar.gz\&quot;. Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**has_augmented_permissions** | **bool** | Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. | [optional] 
**has_thumbnail** | **bool** | Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. | [optional] 
**head_revision_id** | **str** | Output only. The ID of the file&#39;s head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**icon_link** | **str** | Output only. A link to the file&#39;s icon. | [optional] 
**id** | **str** | The ID of the file. | [optional] 
**image_media_metadata** | [**FileImageMediaMetadata**](FileImageMediaMetadata.md) |  | [optional] 
**indexable_text** | [**FileIndexableText**](FileIndexableText.md) |  | [optional] 
**is_app_authorized** | **bool** | Output only. Whether the file was created or opened by the requesting app. | [optional] 
**kind** | **str** | Output only. The type of file. This is always &#x60;drive#file&#x60;. | [optional] [default to 'drive#file']
**label_info** | [**FileLabelInfo**](FileLabelInfo.md) |  | [optional] 
**labels** | [**FileLabels**](FileLabels.md) |  | [optional] 
**last_modifying_user** | [**User**](User.md) |  | [optional] 
**last_modifying_user_name** | **str** | Output only. Name of the last user to modify this file. | [optional] 
**last_viewed_by_me_date** | **datetime** | Last time this file was viewed by the user (formatted RFC 3339 timestamp). | [optional] 
**link_share_metadata** | [**FileLinkShareMetadata**](FileLinkShareMetadata.md) |  | [optional] 
**marked_viewed_by_me_date** | **datetime** | Deprecated. | [optional] 
**md5_checksum** | **str** | Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**mime_type** | **str** | The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content&#39;s MIME type. | [optional] 
**modified_by_me_date** | **datetime** | Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date. | [optional] 
**modified_date** | **datetime** | Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set. | [optional] 
**open_with_links** | **Dict[str, str]** | Output only. A map of the id of each of the user&#39;s apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used. | [optional] 
**original_filename** | **str** | The original filename of the uploaded content if available, or else the original value of the &#x60;title&#x60; field. This is only available for files with binary content in Google Drive. | [optional] 
**owned_by_me** | **bool** | Output only. Whether the file is owned by the current user. Not populated for items in shared drives. | [optional] 
**owner_names** | **List[str]** | Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives. | [optional] 
**owners** | [**List[User]**](User.md) | Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn&#39;t populated for items in shared drives. | [optional] 
**parents** | [**List[ParentReference]**](ParentReference.md) | Collection of parent folders which contain this file. If not specified as part of an insert request, the file will be placed directly in the user&#39;s My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the &#x60;addParents&#x60; and &#x60;removeParents&#x60; parameters to modify the parents list. | [optional] 
**permission_ids** | **List[str]** | Output only. List of permission IDs for users with access to this file. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | Output only. The list of permissions for users with access to this file. Not populated for items in shared drives. | [optional] 
**properties** | [**List[ModelProperty]**](ModelProperty.md) | The list of properties. | [optional] 
**quota_bytes_used** | **str** | Output only. The number of quota bytes used by this file. | [optional] 
**resource_key** | **str** | Output only. A key needed to access the item via a shared link. | [optional] 
**self_link** | **str** | Output only. A link back to this file. | [optional] 
**sha1_checksum** | **str** | Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**sha256_checksum** | **str** | Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. | [optional] 
**shareable** | **bool** | Output only. Deprecated: Use &#x60;capabilities/canShare&#x60; instead. | [optional] 
**shared** | **bool** | Output only. Whether the file has been shared. Not populated for items in shared drives. | [optional] 
**shared_with_me_date** | **datetime** | Time at which this file was shared with the user (formatted RFC 3339 timestamp). | [optional] 
**sharing_user** | [**User**](User.md) |  | [optional] 
**shortcut_details** | [**FileShortcutDetails**](FileShortcutDetails.md) |  | [optional] 
**spaces** | **List[str]** | Output only. The list of spaces which contain the file. Supported values are &#x60;drive&#x60;, &#x60;appDataFolder&#x60; and &#x60;photos&#x60;. | [optional] 
**team_drive_id** | **str** | Output only. Deprecated: Use &#x60;driveId&#x60; instead. | [optional] 
**thumbnail** | [**FileThumbnail**](FileThumbnail.md) |  | [optional] 
**thumbnail_link** | **str** | Output only. A short-lived link to the file&#39;s thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file&#39;s content. If the file isn&#39;t shared publicly, the URL returned in &#x60;Files.thumbnailLink&#x60; must be fetched using a credentialed request. | [optional] 
**thumbnail_version** | **str** | Output only. The thumbnail version for use in thumbnail cache invalidation. | [optional] 
**title** | **str** | The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant. | [optional] 
**trashed_date** | **datetime** | The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives. | [optional] 
**trashing_user** | [**User**](User.md) |  | [optional] 
**user_permission** | [**Permission**](Permission.md) |  | [optional] 
**version** | **str** | Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user. | [optional] 
**video_media_metadata** | [**FileVideoMediaMetadata**](FileVideoMediaMetadata.md) |  | [optional] 
**web_content_link** | **str** | Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials. | [optional] 
**web_view_link** | **str** | Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive&#39;s Website Hosting. | [optional] 
**writers_can_share** | **bool** | Whether writers can share the document with other users. Not populated for items in shared drives. | [optional] 

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


