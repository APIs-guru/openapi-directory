# WkHtmlToPdfUrlToPdfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional] 
**inline_pdf** | **bool** |  | [optional] 
**options** | [**WkHtmlToPdfAdvancedOptions**](WkHtmlToPdfAdvancedOptions.md) |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.wk_html_to_pdf_url_to_pdf_request import WkHtmlToPdfUrlToPdfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WkHtmlToPdfUrlToPdfRequest from a JSON string
wk_html_to_pdf_url_to_pdf_request_instance = WkHtmlToPdfUrlToPdfRequest.from_json(json)
# print the JSON string representation of the object
print(WkHtmlToPdfUrlToPdfRequest.to_json())

# convert the object into a dict
wk_html_to_pdf_url_to_pdf_request_dict = wk_html_to_pdf_url_to_pdf_request_instance.to_dict()
# create an instance of WkHtmlToPdfUrlToPdfRequest from a dict
wk_html_to_pdf_url_to_pdf_request_from_dict = WkHtmlToPdfUrlToPdfRequest.from_dict(wk_html_to_pdf_url_to_pdf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


