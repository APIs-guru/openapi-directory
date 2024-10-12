# GoogleAnalyticsLink

\"Google Analytics Link\" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_settings** | [**AttributionSettings**](AttributionSettings.md) |  | [optional] 
**property_id** | **str** | Required. Immutable. ID of the Google Analytics property the merchant is linked to. | [optional] 
**property_name** | **str** | Output only. Name of the Google Analytics property the merchant is linked to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_link import GoogleAnalyticsLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsLink from a JSON string
google_analytics_link_instance = GoogleAnalyticsLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsLink.to_json())

# convert the object into a dict
google_analytics_link_dict = google_analytics_link_instance.to_dict()
# create an instance of GoogleAnalyticsLink from a dict
google_analytics_link_from_dict = GoogleAnalyticsLink.from_dict(google_analytics_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


