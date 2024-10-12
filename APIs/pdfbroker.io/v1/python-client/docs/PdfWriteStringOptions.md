# PdfWriteStringOptions

Options for writing string in pdf page;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**font** | [**FontDto**](FontDto.md) |  | [optional] 
**page_number** | **int** | Get or set which page in the pdf to write on, default is first page. | [optional] 
**text** | **str** | The text to write in the pdf | [optional] 
**text_color** | [**ColorDto**](ColorDto.md) |  | [optional] 
**x_origin** | [**XOriginPoint**](XOriginPoint.md) |  | [optional] 
**x_position** | **float** | Get or set the X axis position on where to write string, in reference to XOrigin. | [optional] 
**y_origin** | [**YOriginPoint**](YOriginPoint.md) |  | [optional] 
**y_position** | **float** | Get or set the Y axis position on where to write string, in reference to YOrigin. | [optional] 

## Example

```python
from openapi_client.models.pdf_write_string_options import PdfWriteStringOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PdfWriteStringOptions from a JSON string
pdf_write_string_options_instance = PdfWriteStringOptions.from_json(json)
# print the JSON string representation of the object
print(PdfWriteStringOptions.to_json())

# convert the object into a dict
pdf_write_string_options_dict = pdf_write_string_options_instance.to_dict()
# create an instance of PdfWriteStringOptions from a dict
pdf_write_string_options_from_dict = PdfWriteStringOptions.from_dict(pdf_write_string_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


