# GooglePlayAnalytics

Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gclid** | **str** | Deprecated; FDL SDK does not process nor log it. | [optional] 
**utm_campaign** | **str** | Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign. | [optional] 
**utm_content** | **str** | Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL. | [optional] 
**utm_medium** | **str** | Campaign medium; used to identify a medium such as email or cost-per-click. | [optional] 
**utm_source** | **str** | Campaign source; used to identify a search engine, newsletter, or other source. | [optional] 
**utm_term** | **str** | Campaign term; used with paid search to supply the keywords for ads. | [optional] 

## Example

```python
from openapi_client.models.google_play_analytics import GooglePlayAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayAnalytics from a JSON string
google_play_analytics_instance = GooglePlayAnalytics.from_json(json)
# print the JSON string representation of the object
print(GooglePlayAnalytics.to_json())

# convert the object into a dict
google_play_analytics_dict = google_play_analytics_instance.to_dict()
# create an instance of GooglePlayAnalytics from a dict
google_play_analytics_from_dict = GooglePlayAnalytics.from_dict(google_play_analytics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


