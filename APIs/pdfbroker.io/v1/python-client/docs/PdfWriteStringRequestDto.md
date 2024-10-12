# PdfWriteStringRequestDto

The request dto object to write a string on pdf page

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**font_file_base64_string** | **str** | System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string. | [optional] 
**options** | [**PdfWriteStringOptions**](PdfWriteStringOptions.md) |  | [optional] 
**pdf_file_base64_string** | **str** | The pdf file to add text to, as Base64 encoded string. | [optional] 

## Example

```python
from openapi_client.models.pdf_write_string_request_dto import PdfWriteStringRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of PdfWriteStringRequestDto from a JSON string
pdf_write_string_request_dto_instance = PdfWriteStringRequestDto.from_json(json)
# print the JSON string representation of the object
print(PdfWriteStringRequestDto.to_json())

# convert the object into a dict
pdf_write_string_request_dto_dict = pdf_write_string_request_dto_instance.to_dict()
# create an instance of PdfWriteStringRequestDto from a dict
pdf_write_string_request_dto_from_dict = PdfWriteStringRequestDto.from_dict(pdf_write_string_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


