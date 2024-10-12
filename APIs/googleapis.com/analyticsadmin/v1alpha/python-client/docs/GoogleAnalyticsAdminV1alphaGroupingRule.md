# GoogleAnalyticsAdminV1alphaGroupingRule

The rules that govern how traffic is grouped into one channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Customer defined display name for the channel. | [optional] 
**expression** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression**](GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_grouping_rule import GoogleAnalyticsAdminV1alphaGroupingRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaGroupingRule from a JSON string
google_analytics_admin_v1alpha_grouping_rule_instance = GoogleAnalyticsAdminV1alphaGroupingRule.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaGroupingRule.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_grouping_rule_dict = google_analytics_admin_v1alpha_grouping_rule_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaGroupingRule from a dict
google_analytics_admin_v1alpha_grouping_rule_from_dict = GoogleAnalyticsAdminV1alphaGroupingRule.from_dict(google_analytics_admin_v1alpha_grouping_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


