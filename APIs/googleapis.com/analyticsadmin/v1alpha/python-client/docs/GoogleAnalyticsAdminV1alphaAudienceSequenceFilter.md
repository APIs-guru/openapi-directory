# GoogleAnalyticsAdminV1alphaAudienceSequenceFilter

Defines filters that must occur in a specific order for the user to be a member of the Audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | Required. Immutable. Specifies the scope for this filter. | [optional] 
**sequence_maximum_duration** | **str** | Optional. Defines the time period in which the whole sequence must occur. | [optional] 
**sequence_steps** | [**List[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep]**](GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.md) | Required. An ordered sequence of steps. A user must complete each step in order to join the sequence filter. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_sequence_filter import GoogleAnalyticsAdminV1alphaAudienceSequenceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSequenceFilter from a JSON string
google_analytics_admin_v1alpha_audience_sequence_filter_instance = GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_sequence_filter_dict = google_analytics_admin_v1alpha_audience_sequence_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSequenceFilter from a dict
google_analytics_admin_v1alpha_audience_sequence_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceSequenceFilter.from_dict(google_analytics_admin_v1alpha_audience_sequence_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


