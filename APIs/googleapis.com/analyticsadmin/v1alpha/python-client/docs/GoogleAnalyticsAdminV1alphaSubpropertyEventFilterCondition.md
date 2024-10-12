# GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition

A specific filter expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | Required. The field that is being filtered. | [optional] 
**null_filter** | **bool** | A filter for null values. | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter_condition import GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_condition_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_condition_dict = google_analytics_admin_v1alpha_subproperty_event_filter_condition_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_condition_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


