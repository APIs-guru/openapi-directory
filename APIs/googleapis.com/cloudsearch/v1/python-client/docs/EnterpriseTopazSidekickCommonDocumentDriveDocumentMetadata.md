# EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata

Meta data for drive documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | The drive document cosmo id. Client could use the id to build a URL to open a document. Please use Document.document_id. | [optional] 
**is_private** | **bool** | Additional field to identify whether a document is private since scope set to LIMITED can mean both that the doc is private or that it&#39;s shared with others. is_private indicates whether the doc is not shared with anyone except for the owner. | [optional] 
**last_comment_time_ms** | **str** | Timestamp of the most recent comment added to the document in milliseconds since epoch. | [optional] 
**last_edit_time_ms** | **str** | Timestamp of the most recent edit from the current user in milliseconds since epoch. | [optional] 
**last_modification_time_millis** | **str** | Last modification time of the document (independent of the user that modified it). | [optional] 
**last_updated_time_ms** | **str** | Timestamp of the last updated time of the document in milliseconds since epoch. | [optional] 
**last_view_time_ms** | **str** | Timestamp of the most recent view from the current user in milliseconds since epoch. | [optional] 
**owner** | [**EnterpriseTopazSidekickCommonPerson**](EnterpriseTopazSidekickCommonPerson.md) |  | [optional] 
**scope** | **str** | ACL scope of the document which identifies the sharing status of the doc (e.g., limited, shared with link, team drive, ...). | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_common_document_drive_document_metadata import EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata from a JSON string
enterprise_topaz_sidekick_common_document_drive_document_metadata_instance = EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_common_document_drive_document_metadata_dict = enterprise_topaz_sidekick_common_document_drive_document_metadata_instance.to_dict()
# create an instance of EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata from a dict
enterprise_topaz_sidekick_common_document_drive_document_metadata_from_dict = EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata.from_dict(enterprise_topaz_sidekick_common_document_drive_document_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


