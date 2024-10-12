# GoogleAnalyticsAdminV1alphaAudienceFilterClause

A clause for defining either a simple or sequence filter. A filter can be inclusive (For example, users satisfying the filter clause are included in the Audience) or exclusive (For example, users satisfying the filter clause are excluded from the Audience).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clause_type** | **str** | Required. Specifies whether this is an include or exclude filter clause. | [optional] 
**sequence_filter** | [**GoogleAnalyticsAdminV1alphaAudienceSequenceFilter**](GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.md) |  | [optional] 
**simple_filter** | [**GoogleAnalyticsAdminV1alphaAudienceSimpleFilter**](GoogleAnalyticsAdminV1alphaAudienceSimpleFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_filter_clause import GoogleAnalyticsAdminV1alphaAudienceFilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterClause from a JSON string
google_analytics_admin_v1alpha_audience_filter_clause_instance = GoogleAnalyticsAdminV1alphaAudienceFilterClause.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceFilterClause.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_filter_clause_dict = google_analytics_admin_v1alpha_audience_filter_clause_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterClause from a dict
google_analytics_admin_v1alpha_audience_filter_clause_from_dict = GoogleAnalyticsAdminV1alphaAudienceFilterClause.from_dict(google_analytics_admin_v1alpha_audience_filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


