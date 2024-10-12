# ChromeUrlToPdfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional] 
**inline_pdf** | **bool** |  | [optional] 
**options** | [**ChromeAdvancedOptions**](ChromeAdvancedOptions.md) |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.chrome_url_to_pdf_request import ChromeUrlToPdfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeUrlToPdfRequest from a JSON string
chrome_url_to_pdf_request_instance = ChromeUrlToPdfRequest.from_json(json)
# print the JSON string representation of the object
print(ChromeUrlToPdfRequest.to_json())

# convert the object into a dict
chrome_url_to_pdf_request_dict = chrome_url_to_pdf_request_instance.to_dict()
# create an instance of ChromeUrlToPdfRequest from a dict
chrome_url_to_pdf_request_from_dict = ChromeUrlToPdfRequest.from_dict(chrome_url_to_pdf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


