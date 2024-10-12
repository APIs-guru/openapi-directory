# WkHtmlToPdfHtmlToPdfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional] 
**html** | **str** |  | 
**inline_pdf** | **bool** |  | [optional] 
**options** | [**WkHtmlToPdfAdvancedOptions**](WkHtmlToPdfAdvancedOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.wk_html_to_pdf_html_to_pdf_request import WkHtmlToPdfHtmlToPdfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WkHtmlToPdfHtmlToPdfRequest from a JSON string
wk_html_to_pdf_html_to_pdf_request_instance = WkHtmlToPdfHtmlToPdfRequest.from_json(json)
# print the JSON string representation of the object
print(WkHtmlToPdfHtmlToPdfRequest.to_json())

# convert the object into a dict
wk_html_to_pdf_html_to_pdf_request_dict = wk_html_to_pdf_html_to_pdf_request_instance.to_dict()
# create an instance of WkHtmlToPdfHtmlToPdfRequest from a dict
wk_html_to_pdf_html_to_pdf_request_from_dict = WkHtmlToPdfHtmlToPdfRequest.from_dict(wk_html_to_pdf_html_to_pdf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


