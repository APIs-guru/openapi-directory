# WkHtmlToPdfRequestDto

WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_base64_string** | **str** | Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String. | [optional] 
**resources** | **Dict[str, Optional[str]]** | This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string. | [optional] 
**url** | **str** | The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set. | [optional] 
**wk_html_to_pdf_arguments** | **Dict[str, Optional[str]]** | Command line arguments passed to wkhtmltopdf. | [optional] 

## Example

```python
from openapi_client.models.wk_html_to_pdf_request_dto import WkHtmlToPdfRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of WkHtmlToPdfRequestDto from a JSON string
wk_html_to_pdf_request_dto_instance = WkHtmlToPdfRequestDto.from_json(json)
# print the JSON string representation of the object
print(WkHtmlToPdfRequestDto.to_json())

# convert the object into a dict
wk_html_to_pdf_request_dto_dict = wk_html_to_pdf_request_dto_instance.to_dict()
# create an instance of WkHtmlToPdfRequestDto from a dict
wk_html_to_pdf_request_dto_from_dict = WkHtmlToPdfRequestDto.from_dict(wk_html_to_pdf_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


