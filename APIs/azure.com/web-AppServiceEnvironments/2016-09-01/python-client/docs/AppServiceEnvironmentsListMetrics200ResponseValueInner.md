# AppServiceEnvironmentsListMetrics200ResponseValueInner

Object representing a metric for any resource .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Metric end time. | [optional] [readonly] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**metric_values** | [**List[AppServiceEnvironmentsListMetrics200ResponseValueInnerMetricValuesInner]**](AppServiceEnvironmentsListMetrics200ResponseValueInnerMetricValuesInner.md) | Metric values. | [optional] [readonly] 
**name** | [**AppServiceEnvironmentsListMetrics200ResponseValueInnerName**](AppServiceEnvironmentsListMetrics200ResponseValueInnerName.md) |  | [optional] 
**properties** | [**List[AppServiceEnvironmentsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner]**](AppServiceEnvironmentsListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner.md) | Resource metric properties collection. | [optional] [readonly] 
**resource_id** | **str** | Metric resource Id. | [optional] [readonly] 
**start_time** | **datetime** | Metric start time. | [optional] [readonly] 
**time_grain** | **str** | Metric granularity. E.g PT1H, PT5M, P1D | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environments_list_metrics200_response_value_inner import AppServiceEnvironmentsListMetrics200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListMetrics200ResponseValueInner from a JSON string
app_service_environments_list_metrics200_response_value_inner_instance = AppServiceEnvironmentsListMetrics200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListMetrics200ResponseValueInner.to_json())

# convert the object into a dict
app_service_environments_list_metrics200_response_value_inner_dict = app_service_environments_list_metrics200_response_value_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListMetrics200ResponseValueInner from a dict
app_service_environments_list_metrics200_response_value_inner_from_dict = AppServiceEnvironmentsListMetrics200ResponseValueInner.from_dict(app_service_environments_list_metrics200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


