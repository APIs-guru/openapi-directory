# BrowserBotResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML | 
**elements** | **List[str]** | Array containing all the elements matching the supplied selector. &lt;br&gt;Each element object will contain the text content, HTML content and all current element attributes | 
**error_message** | **str** | Contains the error message if an error has occurred (&#39;is-error&#39; will be true) | 
**exec_results** | **List[str]** | If you executed any JavaScript this array holds the results as objects | 
**http_redirect_url** | **str** | The redirected URL if the URL responded with an HTTP redirect | 
**http_status_code** | **int** | The HTTP status code the URL returned | 
**http_status_message** | **str** | The HTTP status message the URL returned | 
**is_error** | **bool** | True if an error has occurred loading the page. Check the &#39;error-message&#39; field for details | 
**is_http_ok** | **bool** | True if the HTTP status is OK (200) | 
**is_http_redirect** | **bool** | True if the URL responded with an HTTP redirect | 
**is_secure** | **bool** | True if the page is secured using TLS/SSL | 
**is_timeout** | **bool** | True if a timeout occurred while loading the page. You can set the timeout with the request parameter &#39;timeout&#39; | 
**language_code** | **str** | The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers | 
**load_time** | **float** | The number of seconds taken to load the page (from initial request until DOM ready) | 
**mime_type** | **str** | The document MIME type | 
**response_headers** | **Dict[str, str]** | Map containing all the HTTP response headers the URL responded with | 
**security_details** | **Dict[str, str]** | Map containing details of the TLS/SSL setup | 
**server_ip** | **str** | The HTTP servers IP address | 
**title** | **str** | The document title | 
**url** | **str** | The page URL | 

## Example

```python
from openapi_client.models.browser_bot_response import BrowserBotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserBotResponse from a JSON string
browser_bot_response_instance = BrowserBotResponse.from_json(json)
# print the JSON string representation of the object
print(BrowserBotResponse.to_json())

# convert the object into a dict
browser_bot_response_dict = browser_bot_response_instance.to_dict()
# create an instance of BrowserBotResponse from a dict
browser_bot_response_from_dict = BrowserBotResponse.from_dict(browser_bot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


