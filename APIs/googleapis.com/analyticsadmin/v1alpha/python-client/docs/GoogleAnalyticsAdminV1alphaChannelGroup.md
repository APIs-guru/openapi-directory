# GoogleAnalyticsAdminV1alphaChannelGroup

A resource message representing a Channel Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the Channel Group. Max length of 256 characters. | [optional] 
**display_name** | **str** | Required. The display name of the Channel Group. Max length of 80 characters. | [optional] 
**grouping_rule** | [**List[GoogleAnalyticsAdminV1alphaGroupingRule]**](GoogleAnalyticsAdminV1alphaGroupingRule.md) | Required. The grouping rules of channels. Maximum number of rules is 50. | [optional] 
**name** | **str** | Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group} | [optional] [readonly] 
**system_defined** | **bool** | Output only. If true, then this channel group is the Default Channel Group predefined by Google Analytics. Display name and grouping rules cannot be updated for this channel group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_channel_group import GoogleAnalyticsAdminV1alphaChannelGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroup from a JSON string
google_analytics_admin_v1alpha_channel_group_instance = GoogleAnalyticsAdminV1alphaChannelGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChannelGroup.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_channel_group_dict = google_analytics_admin_v1alpha_channel_group_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroup from a dict
google_analytics_admin_v1alpha_channel_group_from_dict = GoogleAnalyticsAdminV1alphaChannelGroup.from_dict(google_analytics_admin_v1alpha_channel_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


