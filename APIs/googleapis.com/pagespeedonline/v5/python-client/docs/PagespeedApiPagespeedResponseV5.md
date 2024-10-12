# PagespeedApiPagespeedResponseV5

The Pagespeed API response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_utc_timestamp** | **str** | The UTC timestamp of this analysis. | [optional] 
**captcha_result** | **str** | The captcha verify result | [optional] 
**id** | **str** | Canonicalized and final URL for the document, after following page redirects (if any). | [optional] 
**kind** | **str** | Kind of result. | [optional] 
**lighthouse_result** | [**LighthouseResultV5**](LighthouseResultV5.md) |  | [optional] 
**loading_experience** | [**PagespeedApiLoadingExperienceV5**](PagespeedApiLoadingExperienceV5.md) |  | [optional] 
**origin_loading_experience** | [**PagespeedApiLoadingExperienceV5**](PagespeedApiLoadingExperienceV5.md) |  | [optional] 
**version** | [**PagespeedVersion**](PagespeedVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v5 import PagespeedApiPagespeedResponseV5

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV5 from a JSON string
pagespeed_api_pagespeed_response_v5_instance = PagespeedApiPagespeedResponseV5.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV5.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v5_dict = pagespeed_api_pagespeed_response_v5_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV5 from a dict
pagespeed_api_pagespeed_response_v5_from_dict = PagespeedApiPagespeedResponseV5.from_dict(pagespeed_api_pagespeed_response_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


