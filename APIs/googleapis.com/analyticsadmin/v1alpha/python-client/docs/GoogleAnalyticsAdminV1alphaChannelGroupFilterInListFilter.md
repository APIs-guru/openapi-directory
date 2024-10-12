# GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter

A filter for a string dimension that matches a particular list of options. The match is case insensitive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | Required. The list of possible string values to match against. Must be non-empty. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_channel_group_filter_in_list_filter import GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter from a JSON string
google_analytics_admin_v1alpha_channel_group_filter_in_list_filter_instance = GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_channel_group_filter_in_list_filter_dict = google_analytics_admin_v1alpha_channel_group_filter_in_list_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter from a dict
google_analytics_admin_v1alpha_channel_group_filter_in_list_filter_from_dict = GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter.from_dict(google_analytics_admin_v1alpha_channel_group_filter_in_list_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


