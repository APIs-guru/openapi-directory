# PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue

The type of the metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**distributions** | [**List[PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValueDistributionsInner]**](PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValueDistributionsInner.md) |  | [optional] 
**median** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value import PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue from a JSON string
pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value_instance = PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value_dict = pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue from a dict
pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value_from_dict = PagespeedApiPagespeedResponseV4LoadingExperienceMetricsValue.from_dict(pagespeed_api_pagespeed_response_v4_loading_experience_metrics_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


