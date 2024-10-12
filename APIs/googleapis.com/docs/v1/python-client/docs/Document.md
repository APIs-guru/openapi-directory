# Document

A Google Docs document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**Body**](Body.md) |  | [optional] 
**document_id** | **str** | Output only. The ID of the document. | [optional] 
**document_style** | [**DocumentStyle**](DocumentStyle.md) |  | [optional] 
**footers** | [**Dict[str, Footer]**](Footer.md) | Output only. The footers in the document, keyed by footer ID. | [optional] 
**footnotes** | [**Dict[str, Footnote]**](Footnote.md) | Output only. The footnotes in the document, keyed by footnote ID. | [optional] 
**headers** | [**Dict[str, Header]**](Header.md) | Output only. The headers in the document, keyed by header ID. | [optional] 
**inline_objects** | [**Dict[str, InlineObject]**](InlineObject.md) | Output only. The inline objects in the document, keyed by object ID. | [optional] 
**lists** | **Dict[str, List]** | Output only. The lists in the document, keyed by list ID. | [optional] 
**named_ranges** | [**Dict[str, NamedRanges]**](NamedRanges.md) | Output only. The named ranges in the document, keyed by name. | [optional] 
**named_styles** | [**NamedStyles**](NamedStyles.md) |  | [optional] 
**positioned_objects** | [**Dict[str, PositionedObject]**](PositionedObject.md) | Output only. The positioned objects in the document, keyed by object ID. | [optional] 
**revision_id** | **str** | Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes. | [optional] 
**suggested_document_style_changes** | [**Dict[str, SuggestedDocumentStyle]**](SuggestedDocumentStyle.md) | Output only. The suggested changes to the style of the document, keyed by suggestion ID. | [optional] 
**suggested_named_styles_changes** | [**Dict[str, SuggestedNamedStyles]**](SuggestedNamedStyles.md) | Output only. The suggested changes to the named styles of the document, keyed by suggestion ID. | [optional] 
**suggestions_view_mode** | **str** | Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE. | [optional] 
**title** | **str** | The title of the document. | [optional] 

## Example

```python
from openapi_client.models.document import Document

# TODO update the JSON string below
json = "{}"
# create an instance of Document from a JSON string
document_instance = Document.from_json(json)
# print the JSON string representation of the object
print(Document.to_json())

# convert the object into a dict
document_dict = document_instance.to_dict()
# create an instance of Document from a dict
document_from_dict = Document.from_dict(document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


