# AppInsightsProperties

Properties of App Insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | ARM resource ID of the App Insights. | [optional] 

## Example

```python
from openapi_client.models.app_insights_properties import AppInsightsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppInsightsProperties from a JSON string
app_insights_properties_instance = AppInsightsProperties.from_json(json)
# print the JSON string representation of the object
print(AppInsightsProperties.to_json())

# convert the object into a dict
app_insights_properties_dict = app_insights_properties_instance.to_dict()
# create an instance of AppInsightsProperties from a dict
app_insights_properties_from_dict = AppInsightsProperties.from_dict(app_insights_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


