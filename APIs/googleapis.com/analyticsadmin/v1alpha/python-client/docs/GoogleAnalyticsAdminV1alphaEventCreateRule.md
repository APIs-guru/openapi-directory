# GoogleAnalyticsAdminV1alphaEventCreateRule

An Event Create Rule defines conditions that will trigger the creation of an entirely new event based upon matched criteria of a source event. Additional mutations of the parameters from the source event can be defined. Unlike Event Edit rules, Event Creation Rules have no defined order. They will all be run independently. Event Edit and Event Create rules can't be used to modify an event created from an Event Create rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_event** | **str** | Required. The name of the new event to be created. This value must: * be less than 40 characters * consist only of letters, digits or _ (underscores) * start with a letter | [optional] 
**event_conditions** | [**List[GoogleAnalyticsAdminV1alphaMatchingCondition]**](GoogleAnalyticsAdminV1alphaMatchingCondition.md) | Required. Must have at least one condition, and can have up to 10 max. Conditions on the source event must match for this rule to be applied. | [optional] 
**name** | **str** | Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule} | [optional] [readonly] 
**parameter_mutations** | [**List[GoogleAnalyticsAdminV1alphaParameterMutation]**](GoogleAnalyticsAdminV1alphaParameterMutation.md) | Parameter mutations define parameter behavior on the new event, and are applied in order. A maximum of 20 mutations can be applied. | [optional] 
**source_copy_parameters** | **bool** | If true, the source parameters are copied to the new event. If false, or unset, all non-internal parameters are not copied from the source event. Parameter mutations are applied after the parameters have been copied. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_event_create_rule import GoogleAnalyticsAdminV1alphaEventCreateRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaEventCreateRule from a JSON string
google_analytics_admin_v1alpha_event_create_rule_instance = GoogleAnalyticsAdminV1alphaEventCreateRule.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaEventCreateRule.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_event_create_rule_dict = google_analytics_admin_v1alpha_event_create_rule_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaEventCreateRule from a dict
google_analytics_admin_v1alpha_event_create_rule_from_dict = GoogleAnalyticsAdminV1alphaEventCreateRule.from_dict(google_analytics_admin_v1alpha_event_create_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


