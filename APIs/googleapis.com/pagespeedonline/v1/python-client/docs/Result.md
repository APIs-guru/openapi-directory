# Result


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captcha_result** | **str** | The captcha verify result | [optional] 
**formatted_results** | [**ResultFormattedResults**](ResultFormattedResults.md) |  | [optional] 
**id** | **str** | Canonicalized and final URL for the document, after following page redirects (if any). | [optional] 
**invalid_rules** | **List[str]** | List of rules that were specified in the request, but which the server did not know how to instantiate. | [optional] 
**kind** | **str** | Kind of result. | [optional] [default to 'pagespeedonline#result']
**page_stats** | [**ResultPageStats**](ResultPageStats.md) |  | [optional] 
**response_code** | **int** | Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. | [optional] 
**score** | **int** | The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement. | [optional] 
**screenshot** | [**ResultScreenshot**](ResultScreenshot.md) |  | [optional] 
**title** | **str** | Title of the page, as displayed in the browser&#39;s title bar. | [optional] 
**version** | [**ResultVersion**](ResultVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.result import Result

# TODO update the JSON string below
json = "{}"
# create an instance of Result from a JSON string
result_instance = Result.from_json(json)
# print the JSON string representation of the object
print(Result.to_json())

# convert the object into a dict
result_dict = result_instance.to_dict()
# create an instance of Result from a dict
result_from_dict = Result.from_dict(result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


