# Revision

The metadata for a revision to a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_links** | **Dict[str, str]** | Output only. Links for exporting Docs Editors files to specific formats. | [optional] 
**id** | **str** | Output only. The ID of the revision. | [optional] 
**keep_forever** | **bool** | Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#revision\&quot;&#x60;. | [optional] [default to 'drive#revision']
**last_modifying_user** | [**User**](User.md) |  | [optional] 
**md5_checksum** | **str** | Output only. The MD5 checksum of the revision&#39;s content. This is only applicable to files with binary content in Drive. | [optional] 
**mime_type** | **str** | Output only. The MIME type of the revision. | [optional] 
**modified_time** | **datetime** | The last time the revision was modified (RFC 3339 date-time). | [optional] 
**original_filename** | **str** | Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive. | [optional] 
**publish_auto** | **bool** | Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. | [optional] 
**published** | **bool** | Whether this revision is published. This is only applicable to Docs Editors files. | [optional] 
**published_link** | **str** | Output only. A link to the published revision. This is only populated for Google Sites files. | [optional] 
**published_outside_domain** | **bool** | Whether this revision is published outside the domain. This is only applicable to Docs Editors files. | [optional] 
**size** | **str** | Output only. The size of the revision&#39;s content in bytes. This is only applicable to files with binary content in Drive. | [optional] 

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


