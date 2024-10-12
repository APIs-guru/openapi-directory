# AppServicePlansListMetrics200ResponseValueInner

Object representing a metric for any resource .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Metric end time. | [optional] [readonly] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**metric_values** | [**List[AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner]**](AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner.md) | Metric values. | [optional] [readonly] 
**name** | [**AppServicePlansListMetricDefintions200ResponseValueInnerPropertiesName**](AppServicePlansListMetricDefintions200ResponseValueInnerPropertiesName.md) |  | [optional] 
**properties** | [**List[AppServicePlansListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner]**](AppServicePlansListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner.md) | Resource metric properties collection. | [optional] [readonly] 
**resource_id** | **str** | Metric resource Id. | [optional] [readonly] 
**start_time** | **datetime** | Metric start time. | [optional] [readonly] 
**time_grain** | **str** | Metric granularity. E.g PT1H, PT5M, P1D | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_list_metrics200_response_value_inner import AppServicePlansListMetrics200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListMetrics200ResponseValueInner from a JSON string
app_service_plans_list_metrics200_response_value_inner_instance = AppServicePlansListMetrics200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListMetrics200ResponseValueInner.to_json())

# convert the object into a dict
app_service_plans_list_metrics200_response_value_inner_dict = app_service_plans_list_metrics200_response_value_inner_instance.to_dict()
# create an instance of AppServicePlansListMetrics200ResponseValueInner from a dict
app_service_plans_list_metrics200_response_value_inner_from_dict = AppServicePlansListMetrics200ResponseValueInner.from_dict(app_service_plans_list_metrics200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


