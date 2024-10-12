# EnterpriseTopazSidekickCommonDocument

Representation of a document. NEXT_TAG: 15

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | Access type, i.e., whether the user has access to the document or not. | [optional] 
**debug_info** | [**EnterpriseTopazSidekickCommonDebugInfo**](EnterpriseTopazSidekickCommonDebugInfo.md) |  | [optional] 
**document_id** | **str** | Document id. | [optional] 
**drive_document_metadata** | [**EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata**](EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata.md) |  | [optional] 
**generic_url** | **str** | Generic Drive-based url in the format of drive.google.com/open to be used for deeplink | [optional] 
**justification** | [**EnterpriseTopazSidekickCommonDocumentJustification**](EnterpriseTopazSidekickCommonDocumentJustification.md) |  | [optional] 
**mime_type** | **str** | MIME type | [optional] 
**provenance** | **str** | Document provenance. | [optional] 
**reason** | **str** | Justification of why this document is being returned. | [optional] 
**snippet** | **str** | A sampling of the text from the document. | [optional] 
**thumbnail_url** | **str** | Thumbnail URL. | [optional] 
**title** | **str** | Title of the document. | [optional] 
**type** | **str** | Type of the document. | [optional] 
**url** | **str** | Absolute URL of the document. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_common_document import EnterpriseTopazSidekickCommonDocument

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickCommonDocument from a JSON string
enterprise_topaz_sidekick_common_document_instance = EnterpriseTopazSidekickCommonDocument.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickCommonDocument.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_common_document_dict = enterprise_topaz_sidekick_common_document_instance.to_dict()
# create an instance of EnterpriseTopazSidekickCommonDocument from a dict
enterprise_topaz_sidekick_common_document_from_dict = EnterpriseTopazSidekickCommonDocument.from_dict(enterprise_topaz_sidekick_common_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


