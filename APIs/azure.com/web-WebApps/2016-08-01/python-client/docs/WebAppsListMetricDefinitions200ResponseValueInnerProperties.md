# WebAppsListMetricDefinitions200ResponseValueInnerProperties

ResourceMetricDefinition resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**metric_availabilities** | [**List[WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner]**](WebAppsListMetricDefinitions200ResponseValueInnerPropertiesMetricAvailabilitiesInner.md) | List of time grains supported for the metric together with retention period. | [optional] [readonly] 
**name** | [**WebAppsListMetricDefinitions200ResponseValueInnerPropertiesName**](WebAppsListMetricDefinitions200ResponseValueInnerPropertiesName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Primary aggregation type. | [optional] [readonly] 
**properties** | **Dict[str, str]** | Resource metric definition properties. | [optional] [readonly] 
**resource_uri** | **str** | Resource URI. | [optional] [readonly] 
**unit** | **str** | Unit of the metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_metric_definitions200_response_value_inner_properties import WebAppsListMetricDefinitions200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetricDefinitions200ResponseValueInnerProperties from a JSON string
web_apps_list_metric_definitions200_response_value_inner_properties_instance = WebAppsListMetricDefinitions200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetricDefinitions200ResponseValueInnerProperties.to_json())

# convert the object into a dict
web_apps_list_metric_definitions200_response_value_inner_properties_dict = web_apps_list_metric_definitions200_response_value_inner_properties_instance.to_dict()
# create an instance of WebAppsListMetricDefinitions200ResponseValueInnerProperties from a dict
web_apps_list_metric_definitions200_response_value_inner_properties_from_dict = WebAppsListMetricDefinitions200ResponseValueInnerProperties.from_dict(web_apps_list_metric_definitions200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


