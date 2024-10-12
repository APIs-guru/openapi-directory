# GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep

A condition that must occur in the specified step order for this user to match the sequence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint_duration** | **str** | Optional. When set, this step must be satisfied within the constraint_duration of the previous step (For example, t[i] - t[i-1] &lt;&#x3D; constraint_duration). If not set, there is no duration requirement (the duration is effectively unlimited). It is ignored for the first step. | [optional] 
**filter_expression** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpression**](GoogleAnalyticsAdminV1alphaAudienceFilterExpression.md) |  | [optional] 
**immediately_follows** | **bool** | Optional. If true, the event satisfying this step must be the very next event after the event satisfying the last step. If unset or false, this step indirectly follows the prior step; for example, there may be events between the prior step and this step. It is ignored for the first step. | [optional] 
**scope** | **str** | Required. Immutable. Specifies the scope for this step. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step import GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep from a JSON string
google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step_instance = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step_dict = google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep from a dict
google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step_from_dict = GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep.from_dict(google_analytics_admin_v1alpha_audience_sequence_filter_audience_sequence_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


