# ChromeHtmlToPdfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional] 
**html** | **str** |  | 
**inline_pdf** | **bool** |  | [optional] 
**options** | [**ChromeAdvancedOptions**](ChromeAdvancedOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.chrome_html_to_pdf_request import ChromeHtmlToPdfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeHtmlToPdfRequest from a JSON string
chrome_html_to_pdf_request_instance = ChromeHtmlToPdfRequest.from_json(json)
# print the JSON string representation of the object
print(ChromeHtmlToPdfRequest.to_json())

# convert the object into a dict
chrome_html_to_pdf_request_dict = chrome_html_to_pdf_request_instance.to_dict()
# create an instance of ChromeHtmlToPdfRequest from a dict
chrome_html_to_pdf_request_from_dict = ChromeHtmlToPdfRequest.from_dict(chrome_html_to_pdf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


