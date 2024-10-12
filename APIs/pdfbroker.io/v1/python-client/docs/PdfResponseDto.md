# PdfResponseDto

When setting the Accept-header in the request to \"application/json\" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header \"application/pdf\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | If any error occurs the message will be displayed in here | [optional] 
**pdf_file_base64_string** | **str** | The Base64 encoded string that is the pdf file. | [optional] 

## Example

```python
from openapi_client.models.pdf_response_dto import PdfResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of PdfResponseDto from a JSON string
pdf_response_dto_instance = PdfResponseDto.from_json(json)
# print the JSON string representation of the object
print(PdfResponseDto.to_json())

# convert the object into a dict
pdf_response_dto_dict = pdf_response_dto_instance.to_dict()
# create an instance of PdfResponseDto from a dict
pdf_response_dto_from_dict = PdfResponseDto.from_dict(pdf_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


