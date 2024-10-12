# PagespeedApiPagespeedResponseV4LoadingExperience

Metrics of end users' page loading experience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The url, pattern or origin which the metrics are on. | [optional] 
**initial_url** | **str** |  | [optional] 
**metrics** | [**Dict[str, PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue]**](PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue.md) |  | [optional] 
**overall_category** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_loading_experience import PagespeedApiPagespeedResponseV4LoadingExperience

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4LoadingExperience from a JSON string
pagespeed_api_pagespeed_response_v4_loading_experience_instance = PagespeedApiPagespeedResponseV4LoadingExperience.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4LoadingExperience.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_loading_experience_dict = pagespeed_api_pagespeed_response_v4_loading_experience_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4LoadingExperience from a dict
pagespeed_api_pagespeed_response_v4_loading_experience_from_dict = PagespeedApiPagespeedResponseV4LoadingExperience.from_dict(pagespeed_api_pagespeed_response_v4_loading_experience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


