# Revision

A revision of a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive. | [optional] 
**etag** | **str** | Output only. The ETag of the revision. | [optional] 
**export_links** | **Dict[str, str]** | Output only. Links for exporting Docs Editors files to specific formats. | [optional] 
**file_size** | **str** | Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive. | [optional] 
**id** | **str** | Output only. The ID of the revision. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#revision&#x60;. | [optional] [default to 'drive#revision']
**last_modifying_user** | [**User**](User.md) |  | [optional] 
**last_modifying_user_name** | **str** | Output only. Name of the last user to modify this revision. | [optional] 
**md5_checksum** | **str** | Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive. | [optional] 
**mime_type** | **str** | Output only. The MIME type of the revision. | [optional] 
**modified_date** | **datetime** | Last time this revision was modified (formatted RFC 3339 timestamp). | [optional] 
**original_filename** | **str** | Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive. | [optional] 
**pinned** | **bool** | Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions. | [optional] 
**publish_auto** | **bool** | Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files. | [optional] 
**published** | **bool** | Whether this revision is published. This is only populated and can only be modified for Docs Editors files. | [optional] 
**published_link** | **str** | Output only. A link to the published revision. This is only populated for Google Sites files. | [optional] 
**published_outside_domain** | **bool** | Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files. | [optional] 
**self_link** | **str** | Output only. A link back to this revision. | [optional] 

## Example

```python
from openapi_client.models.revision import Revision

# TODO update the JSON string below
json = "{}"
# create an instance of Revision from a JSON string
revision_instance = Revision.from_json(json)
# print the JSON string representation of the object
print(Revision.to_json())

# convert the object into a dict
revision_dict = revision_instance.to_dict()
# create an instance of Revision from a dict
revision_from_dict = Revision.from_dict(revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


