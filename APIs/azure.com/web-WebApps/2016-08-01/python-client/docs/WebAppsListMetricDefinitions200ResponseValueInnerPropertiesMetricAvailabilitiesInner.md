# WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner

Metrics availability and retention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention period for the current time grain. | [optional] [readonly] 
**time_grain** | **str** | Time grain . | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner import WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner from a JSON string
web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_instance = WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.to_json())

# convert the object into a dict
web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_dict = web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_instance.to_dict()
# create an instance of WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner from a dict
web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_from_dict = WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.from_dict(web_apps_list_metric_definitions200_response_value_inner_properties_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


