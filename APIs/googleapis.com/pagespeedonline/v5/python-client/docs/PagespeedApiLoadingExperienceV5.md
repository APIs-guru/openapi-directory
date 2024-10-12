# PagespeedApiLoadingExperienceV5

The CrUX loading experience object that contains CrUX data breakdowns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The url, pattern or origin which the metrics are on. | [optional] 
**initial_url** | **str** | The requested URL, which may differ from the resolved \&quot;id\&quot;. | [optional] 
**metrics** | [**Dict[str, UserPageLoadMetricV5]**](UserPageLoadMetricV5.md) | The map of . | [optional] 
**origin_fallback** | **bool** | True if the result is an origin fallback from a page, false otherwise. | [optional] 
**overall_category** | **str** | The human readable speed \&quot;category\&quot; of the id. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_loading_experience_v5 import PagespeedApiLoadingExperienceV5

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiLoadingExperienceV5 from a JSON string
pagespeed_api_loading_experience_v5_instance = PagespeedApiLoadingExperienceV5.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiLoadingExperienceV5.to_json())

# convert the object into a dict
pagespeed_api_loading_experience_v5_dict = pagespeed_api_loading_experience_v5_instance.to_dict()
# create an instance of PagespeedApiLoadingExperienceV5 from a dict
pagespeed_api_loading_experience_v5_from_dict = PagespeedApiLoadingExperienceV5.from_dict(pagespeed_api_loading_experience_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


