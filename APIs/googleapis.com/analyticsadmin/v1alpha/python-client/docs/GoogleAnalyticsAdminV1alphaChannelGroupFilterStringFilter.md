# GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter

Filter where the field value is a String. The match is case insensitive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_type** | **str** | Required. The match type for the string filter. | [optional] 
**value** | **str** | Required. The string value to be matched against. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_channel_group_filter_string_filter import GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter from a JSON string
google_analytics_admin_v1alpha_channel_group_filter_string_filter_instance = GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_channel_group_filter_string_filter_dict = google_analytics_admin_v1alpha_channel_group_filter_string_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter from a dict
google_analytics_admin_v1alpha_channel_group_filter_string_filter_from_dict = GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter.from_dict(google_analytics_admin_v1alpha_channel_group_filter_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


