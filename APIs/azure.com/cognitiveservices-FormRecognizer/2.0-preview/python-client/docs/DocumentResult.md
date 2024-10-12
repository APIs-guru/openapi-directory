# DocumentResult

A set of extracted fields corresponding to the input document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**doc_type** | **str** | Document type. | 
**fields** | [**Dict[str, FieldValue]**](FieldValue.md) | Dictionary of named field values. | 
**page_range** | **List[int]** | First and last page number where the document is found. | 

## Example

```python
from openapi_client.models.document_result import DocumentResult

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentResult from a JSON string
document_result_instance = DocumentResult.from_json(json)
# print the JSON string representation of the object
print(DocumentResult.to_json())

# convert the object into a dict
document_result_dict = document_result_instance.to_dict()
# create an instance of DocumentResult from a dict
document_result_from_dict = DocumentResult.from_dict(document_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


