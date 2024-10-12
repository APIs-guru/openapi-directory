# GoogleAnalyticsAdminV1alphaListChannelGroupsResponse

Response message for ListChannelGroups RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_groups** | [**List[GoogleAnalyticsAdminV1alphaChannelGroup]**](GoogleAnalyticsAdminV1alphaChannelGroup.md) | List of ChannelGroup. These will be ordered stably, but in an arbitrary order. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_channel_groups_response import GoogleAnalyticsAdminV1alphaListChannelGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListChannelGroupsResponse from a JSON string
google_analytics_admin_v1alpha_list_channel_groups_response_instance = GoogleAnalyticsAdminV1alphaListChannelGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListChannelGroupsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_channel_groups_response_dict = google_analytics_admin_v1alpha_list_channel_groups_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListChannelGroupsResponse from a dict
google_analytics_admin_v1alpha_list_channel_groups_response_from_dict = GoogleAnalyticsAdminV1alphaListChannelGroupsResponse.from_dict(google_analytics_admin_v1alpha_list_channel_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


