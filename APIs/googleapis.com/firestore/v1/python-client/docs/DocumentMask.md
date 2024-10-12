# DocumentMask

A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_paths** | **List[str]** | The list of field paths in the mask. See Document.fields for a field path syntax reference. | [optional] 

## Example

```python
from openapi_client.models.document_mask import DocumentMask

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentMask from a JSON string
document_mask_instance = DocumentMask.from_json(json)
# print the JSON string representation of the object
print(DocumentMask.to_json())

# convert the object into a dict
document_mask_dict = document_mask_instance.to_dict()
# create an instance of DocumentMask from a dict
document_mask_from_dict = DocumentMask.from_dict(document_mask_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


