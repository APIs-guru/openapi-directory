# GoogleAnalyticsAdminV1alphaAudience

A resource message representing a GA4 Audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_personalization_enabled** | **bool** | Output only. It is automatically set by GA to false if this is an NPA Audience and is excluded from ads personalization. | [optional] [readonly] 
**description** | **str** | Required. The description of the Audience. | [optional] 
**display_name** | **str** | Required. The display name of the Audience. | [optional] 
**event_trigger** | [**GoogleAnalyticsAdminV1alphaAudienceEventTrigger**](GoogleAnalyticsAdminV1alphaAudienceEventTrigger.md) |  | [optional] 
**exclusion_duration_mode** | **str** | Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience. | [optional] 
**filter_clauses** | [**List[GoogleAnalyticsAdminV1alphaAudienceFilterClause]**](GoogleAnalyticsAdminV1alphaAudienceFilterClause.md) | Required. Immutable. Unordered list. Filter clauses that define the Audience. All clauses will be AND’ed together. | [optional] 
**membership_duration_days** | **int** | Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days. | [optional] 
**name** | **str** | Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId} | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience import GoogleAnalyticsAdminV1alphaAudience

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudience from a JSON string
google_analytics_admin_v1alpha_audience_instance = GoogleAnalyticsAdminV1alphaAudience.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudience.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_dict = google_analytics_admin_v1alpha_audience_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudience from a dict
google_analytics_admin_v1alpha_audience_from_dict = GoogleAnalyticsAdminV1alphaAudience.from_dict(google_analytics_admin_v1alpha_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


