# GoogleAnalyticsAdminV1alphaChannelGroupFilter

A specific filter for a single dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | Required. Immutable. The dimension name to filter. | [optional] 
**in_list_filter** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter**](GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter.md) |  | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter**](GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_channel_group_filter import GoogleAnalyticsAdminV1alphaChannelGroupFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilter from a JSON string
google_analytics_admin_v1alpha_channel_group_filter_instance = GoogleAnalyticsAdminV1alphaChannelGroupFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChannelGroupFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_channel_group_filter_dict = google_analytics_admin_v1alpha_channel_group_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilter from a dict
google_analytics_admin_v1alpha_channel_group_filter_from_dict = GoogleAnalyticsAdminV1alphaChannelGroupFilter.from_dict(google_analytics_admin_v1alpha_channel_group_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


