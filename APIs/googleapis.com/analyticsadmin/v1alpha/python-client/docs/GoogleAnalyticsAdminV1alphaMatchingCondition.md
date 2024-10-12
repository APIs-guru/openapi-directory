# GoogleAnalyticsAdminV1alphaMatchingCondition

Defines a condition for when an Event Edit or Event Creation rule applies to an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_type** | **str** | Required. The type of comparison to be applied to the value. | [optional] 
**var_field** | **str** | Required. The name of the field that is compared against for the condition. If &#39;event_name&#39; is specified this condition will apply to the name of the event. Otherwise the condition will apply to a parameter with the specified name. This value cannot contain spaces. | [optional] 
**negated** | **bool** | Whether or not the result of the comparison should be negated. For example, if &#x60;negated&#x60; is true, then &#39;equals&#39; comparisons would function as &#39;not equals&#39;. | [optional] 
**value** | **str** | Required. The value being compared against for this condition. The runtime implementation may perform type coercion of this value to evaluate this condition based on the type of the parameter value. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_matching_condition import GoogleAnalyticsAdminV1alphaMatchingCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaMatchingCondition from a JSON string
google_analytics_admin_v1alpha_matching_condition_instance = GoogleAnalyticsAdminV1alphaMatchingCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaMatchingCondition.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_matching_condition_dict = google_analytics_admin_v1alpha_matching_condition_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaMatchingCondition from a dict
google_analytics_admin_v1alpha_matching_condition_from_dict = GoogleAnalyticsAdminV1alphaMatchingCondition.from_dict(google_analytics_admin_v1alpha_matching_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


