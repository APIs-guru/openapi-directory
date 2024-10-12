# WebAppsListMetrics200ResponseValueInner

Object representing a metric for any resource .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Metric end time. | [optional] [readonly] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**metric_values** | [**List[WebAppsListMetrics200ResponseValueInnerMetricValuesInner]**](WebAppsListMetrics200ResponseValueInnerMetricValuesInner.md) | Metric values. | [optional] [readonly] 
**name** | [**WebAppsListMetrics200ResponseValueInnerName**](WebAppsListMetrics200ResponseValueInnerName.md) |  | [optional] 
**properties** | [**List[WebAppsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner]**](WebAppsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner.md) | Resource metric properties collection. | [optional] [readonly] 
**resource_id** | **str** | Metric resource Id. | [optional] [readonly] 
**start_time** | **datetime** | Metric start time. | [optional] [readonly] 
**time_grain** | **str** | Metric granularity. E.g PT1H, PT5M, P1D | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_metrics200_response_value_inner import WebAppsListMetrics200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetrics200ResponseValueInner from a JSON string
web_apps_list_metrics200_response_value_inner_instance = WebAppsListMetrics200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetrics200ResponseValueInner.to_json())

# convert the object into a dict
web_apps_list_metrics200_response_value_inner_dict = web_apps_list_metrics200_response_value_inner_instance.to_dict()
# create an instance of WebAppsListMetrics200ResponseValueInner from a dict
web_apps_list_metrics200_response_value_inner_from_dict = WebAppsListMetrics200ResponseValueInner.from_dict(web_apps_list_metrics200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


