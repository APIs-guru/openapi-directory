# ApplicationInsightsComponentAnalyticsItem

Properties that define an Analytics item that is associated to an Application Insights component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content of this item | [optional] 
**id** | **str** | Internally assigned unique id of the item definition. | [optional] 
**name** | **str** | The user-defined name of the item. | [optional] 
**properties** | [**ApplicationInsightsComponentAnalyticsItemProperties**](ApplicationInsightsComponentAnalyticsItemProperties.md) |  | [optional] 
**scope** | **str** | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | [optional] 
**time_created** | **str** | Date and time in UTC when this item was created. | [optional] [readonly] 
**time_modified** | **str** | Date and time in UTC of the last modification that was made to this item. | [optional] [readonly] 
**type** | **str** | Enum indicating the type of the Analytics item. | [optional] 
**version** | **str** | This instance&#39;s version of the data model. This can change as new features are added. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_analytics_item import ApplicationInsightsComponentAnalyticsItem

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentAnalyticsItem from a JSON string
application_insights_component_analytics_item_instance = ApplicationInsightsComponentAnalyticsItem.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentAnalyticsItem.to_json())

# convert the object into a dict
application_insights_component_analytics_item_dict = application_insights_component_analytics_item_instance.to_dict()
# create an instance of ApplicationInsightsComponentAnalyticsItem from a dict
application_insights_component_analytics_item_from_dict = ApplicationInsightsComponentAnalyticsItem.from_dict(application_insights_component_analytics_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


