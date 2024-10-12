# WebAppsListMetrics200ResponseValueInnerMetricValuesInner

Value of resource metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Value average. | [optional] [readonly] 
**count** | **float** | Value count. | [optional] [readonly] 
**maximum** | **float** | Value maximum. | [optional] [readonly] 
**minimum** | **float** | Value minimum. | [optional] [readonly] 
**properties** | [**List[WebAppsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner]**](WebAppsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner.md) | Resource metric properties collection. | [optional] [readonly] 
**timestamp** | **str** | Value timestamp. | [optional] [readonly] 
**total** | **float** | Value total. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_metrics200_response_value_inner_metric_values_inner import WebAppsListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
web_apps_list_metrics200_response_value_inner_metric_values_inner_instance = WebAppsListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
web_apps_list_metrics200_response_value_inner_metric_values_inner_dict = web_apps_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of WebAppsListMetrics200ResponseValueInnerMetricValuesInner from a dict
web_apps_list_metrics200_response_value_inner_metric_values_inner_from_dict = WebAppsListMetrics200ResponseValueInnerMetricValuesInner.from_dict(web_apps_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


