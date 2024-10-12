# ResultPageStats

Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css_response_bytes** | **str** | Number of uncompressed response bytes for CSS resources on the page. | [optional] 
**flash_response_bytes** | **str** | Number of response bytes for flash resources on the page. | [optional] 
**html_response_bytes** | **str** | Number of uncompressed response bytes for the main HTML document and all iframes on the page. | [optional] 
**image_response_bytes** | **str** | Number of response bytes for image resources on the page. | [optional] 
**javascript_response_bytes** | **str** | Number of uncompressed response bytes for JS resources on the page. | [optional] 
**number_css_resources** | **int** | Number of CSS resources referenced by the page. | [optional] 
**number_hosts** | **int** | Number of unique hosts referenced by the page. | [optional] 
**number_js_resources** | **int** | Number of JavaScript resources referenced by the page. | [optional] 
**number_resources** | **int** | Number of HTTP resources loaded by the page. | [optional] 
**number_static_resources** | **int** | Number of static (i.e. cacheable) resources on the page. | [optional] 
**other_response_bytes** | **str** | Number of response bytes for other resources on the page. | [optional] 
**text_response_bytes** | **str** | Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. | [optional] 
**total_request_bytes** | **str** | Total size of all request bytes sent by the page. | [optional] 

## Example

```python
from openapi_client.models.result_page_stats import ResultPageStats

# TODO update the JSON string below
json = "{}"
# create an instance of ResultPageStats from a JSON string
result_page_stats_instance = ResultPageStats.from_json(json)
# print the JSON string representation of the object
print(ResultPageStats.to_json())

# convert the object into a dict
result_page_stats_dict = result_page_stats_instance.to_dict()
# create an instance of ResultPageStats from a dict
result_page_stats_from_dict = ResultPageStats.from_dict(result_page_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


