# PdfToImageOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width; | [optional] 
**horizontal_resolution** | **float** | Set the horizontal resolution, default is 96 dpi; | [optional] 
**image_format** | **str** | Valid options are \&quot;image/jpeg\&quot;, \&quot;image/png\&quot; or \&quot;image/gif\&quot;. Default is \&quot;image/png\&quot; | [optional] 
**jpeg_quality** | **int** | Sets the quality of jpeg images, range 0 to 100, default is 75 | [optional] 
**page_number** | **int** | Which page of the pdf file to generate image from, default is first page | [optional] 
**png_compression_level** | **int** | Sets the png compression level, range 1 - 9, default is 6 | [optional] 
**transparent** | **bool** | Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format. | [optional] 
**vertical_resolution** | **float** | Set the vertical resolution, default is 96 dpi; | [optional] 
**width** | **int** | Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height; | [optional] 

## Example

```python
from openapi_client.models.pdf_to_image_options import PdfToImageOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PdfToImageOptions from a JSON string
pdf_to_image_options_instance = PdfToImageOptions.from_json(json)
# print the JSON string representation of the object
print(PdfToImageOptions.to_json())

# convert the object into a dict
pdf_to_image_options_dict = pdf_to_image_options_instance.to_dict()
# create an instance of PdfToImageOptions from a dict
pdf_to_image_options_from_dict = PdfToImageOptions.from_dict(pdf_to_image_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


