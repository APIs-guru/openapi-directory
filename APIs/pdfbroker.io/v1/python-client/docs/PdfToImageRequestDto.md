# PdfToImageRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**PdfToImageOptions**](PdfToImageOptions.md) |  | [optional] 
**pdf_file_base64_string** | **str** | The pdf file to generate image from, as Base64 encoded string. | [optional] 

## Example

```python
from openapi_client.models.pdf_to_image_request_dto import PdfToImageRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of PdfToImageRequestDto from a JSON string
pdf_to_image_request_dto_instance = PdfToImageRequestDto.from_json(json)
# print the JSON string representation of the object
print(PdfToImageRequestDto.to_json())

# convert the object into a dict
pdf_to_image_request_dto_dict = pdf_to_image_request_dto_instance.to_dict()
# create an instance of PdfToImageRequestDto from a dict
pdf_to_image_request_dto_from_dict = PdfToImageRequestDto.from_dict(pdf_to_image_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


