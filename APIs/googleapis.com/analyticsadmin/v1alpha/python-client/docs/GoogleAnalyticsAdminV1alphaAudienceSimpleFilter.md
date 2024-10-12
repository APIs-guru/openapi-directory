# GoogleAnalyticsAdminV1alphaAudienceSimpleFilter

Defines a simple filter that a user must satisfy to be a member of the Audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_expression** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpression**](GoogleAnalyticsAdminV1alphaAudienceFilterExpression.md) |  | [optional] 
**scope** | **str** | Required. Immutable. Specifies the scope for this filter. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_simple_filter import GoogleAnalyticsAdminV1alphaAudienceSimpleFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSimpleFilter from a JSON string
google_analytics_admin_v1alpha_audience_simple_filter_instance = GoogleAnalyticsAdminV1alphaAudienceSimpleFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceSimpleFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_simple_filter_dict = google_analytics_admin_v1alpha_audience_simple_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSimpleFilter from a dict
google_analytics_admin_v1alpha_audience_simple_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceSimpleFilter.from_dict(google_analytics_admin_v1alpha_audience_simple_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


