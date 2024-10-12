# PagespeedApiPagespeedResponseV4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captcha_result** | **str** | The captcha verify result | [optional] 
**formatted_results** | [**PagespeedApiPagespeedResponseV4FormattedResults**](PagespeedApiPagespeedResponseV4FormattedResults.md) |  | [optional] 
**id** | **str** | Canonicalized and final URL for the document, after following page redirects (if any). | [optional] 
**invalid_rules** | **List[str]** | List of rules that were specified in the request, but which the server did not know how to instantiate. | [optional] 
**kind** | **str** | Kind of result. | [optional] [default to 'pagespeedonline#result']
**loading_experience** | [**PagespeedApiPagespeedResponseV4LoadingExperience**](PagespeedApiPagespeedResponseV4LoadingExperience.md) |  | [optional] 
**page_stats** | [**PagespeedApiPagespeedResponseV4PageStats**](PagespeedApiPagespeedResponseV4PageStats.md) |  | [optional] 
**response_code** | **int** | Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error. | [optional] 
**rule_groups** | [**Dict[str, PagespeedApiPagespeedResponseV4RuleGroupsValue]**](PagespeedApiPagespeedResponseV4RuleGroupsValue.md) | A map with one entry for each rule group in these results. | [optional] 
**screenshot** | [**PagespeedApiImageV4**](PagespeedApiImageV4.md) |  | [optional] 
**snapshots** | [**List[PagespeedApiImageV4]**](PagespeedApiImageV4.md) | Additional base64-encoded screenshots of the page, in various partial render states. | [optional] 
**title** | **str** | Title of the page, as displayed in the browser&#39;s title bar. | [optional] 
**version** | [**PagespeedApiPagespeedResponseV4Version**](PagespeedApiPagespeedResponseV4Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4 import PagespeedApiPagespeedResponseV4

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4 from a JSON string
pagespeed_api_pagespeed_response_v4_instance = PagespeedApiPagespeedResponseV4.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_dict = pagespeed_api_pagespeed_response_v4_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4 from a dict
pagespeed_api_pagespeed_response_v4_from_dict = PagespeedApiPagespeedResponseV4.from_dict(pagespeed_api_pagespeed_response_v4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


