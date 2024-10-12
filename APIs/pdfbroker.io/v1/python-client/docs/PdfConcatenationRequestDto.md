# PdfConcatenationRequestDto

Request to concatenate a list of Pdf documents to a single Pdf document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pdf_documents_as_base64_string** | **List[str]** | The list of Pdf documents encoded as Base64 strings. | [optional] 

## Example

```python
from openapi_client.models.pdf_concatenation_request_dto import PdfConcatenationRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of PdfConcatenationRequestDto from a JSON string
pdf_concatenation_request_dto_instance = PdfConcatenationRequestDto.from_json(json)
# print the JSON string representation of the object
print(PdfConcatenationRequestDto.to_json())

# convert the object into a dict
pdf_concatenation_request_dto_dict = pdf_concatenation_request_dto_instance.to_dict()
# create an instance of PdfConcatenationRequestDto from a dict
pdf_concatenation_request_dto_from_dict = PdfConcatenationRequestDto.from_dict(pdf_concatenation_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


