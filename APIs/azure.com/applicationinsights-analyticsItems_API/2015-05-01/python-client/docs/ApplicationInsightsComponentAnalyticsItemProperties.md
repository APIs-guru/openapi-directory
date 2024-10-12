# ApplicationInsightsComponentAnalyticsItemProperties

A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_alias** | **str** | A function alias, used when the type of the item is Function | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_analytics_item_properties import ApplicationInsightsComponentAnalyticsItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentAnalyticsItemProperties from a JSON string
application_insights_component_analytics_item_properties_instance = ApplicationInsightsComponentAnalyticsItemProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentAnalyticsItemProperties.to_json())

# convert the object into a dict
application_insights_component_analytics_item_properties_dict = application_insights_component_analytics_item_properties_instance.to_dict()
# create an instance of ApplicationInsightsComponentAnalyticsItemProperties from a dict
application_insights_component_analytics_item_properties_from_dict = ApplicationInsightsComponentAnalyticsItemProperties.from_dict(application_insights_component_analytics_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


