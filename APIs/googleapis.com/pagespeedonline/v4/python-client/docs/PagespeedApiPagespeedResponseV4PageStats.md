# PagespeedApiPagespeedResponseV4PageStats

Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cms** | **str** | Content management system (CMS) used for the page. | [optional] 
**css_response_bytes** | **str** | Number of uncompressed response bytes for CSS resources on the page. | [optional] 
**flash_response_bytes** | **str** | Number of response bytes for flash resources on the page. | [optional] 
**html_response_bytes** | **str** | Number of uncompressed response bytes for the main HTML document and all iframes on the page. | [optional] 
**image_response_bytes** | **str** | Number of response bytes for image resources on the page. | [optional] 
**javascript_response_bytes** | **str** | Number of uncompressed response bytes for JS resources on the page. | [optional] 
**num_render_blocking_round_trips** | **int** | The needed round trips to load render blocking resources | [optional] 
**num_total_round_trips** | **int** | The needed round trips to load the full page | [optional] 
**number_css_resources** | **int** | Number of CSS resources referenced by the page. | [optional] 
**number_hosts** | **int** | Number of unique hosts referenced by the page. | [optional] 
**number_js_resources** | **int** | Number of JavaScript resources referenced by the page. | [optional] 
**number_resources** | **int** | Number of HTTP resources loaded by the page. | [optional] 
**number_roboted_resources** | **int** | Number of roboted resources. | [optional] 
**number_static_resources** | **int** | Number of static (i.e. cacheable) resources on the page. | [optional] 
**number_transient_fetch_failure_resources** | **int** | Number of transient-failed resources. | [optional] 
**other_response_bytes** | **str** | Number of response bytes for other resources on the page. | [optional] 
**over_the_wire_response_bytes** | **str** | Number of over-the-wire bytes, uses the default gzip compression strategy as an estimation. | [optional] 
**roboted_urls** | **List[str]** | List of roboted urls. | [optional] 
**text_response_bytes** | **str** | Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page. | [optional] 
**total_request_bytes** | **str** | Total size of all request bytes sent by the page. | [optional] 
**transient_fetch_failure_urls** | **List[str]** | List of transient fetch failure urls. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_page_stats import PagespeedApiPagespeedResponseV4PageStats

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4PageStats from a JSON string
pagespeed_api_pagespeed_response_v4_page_stats_instance = PagespeedApiPagespeedResponseV4PageStats.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4PageStats.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_page_stats_dict = pagespeed_api_pagespeed_response_v4_page_stats_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4PageStats from a dict
pagespeed_api_pagespeed_response_v4_page_stats_from_dict = PagespeedApiPagespeedResponseV4PageStats.from_dict(pagespeed_api_pagespeed_response_v4_page_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


