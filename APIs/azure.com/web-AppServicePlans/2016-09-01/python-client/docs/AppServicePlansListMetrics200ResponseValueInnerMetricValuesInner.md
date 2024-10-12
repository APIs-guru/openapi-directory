# AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner

Value of resource metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Value average. | [optional] [readonly] 
**count** | **float** | Value count. | [optional] [readonly] 
**maximum** | **float** | Value maximum. | [optional] [readonly] 
**minimum** | **float** | Value minimum. | [optional] [readonly] 
**properties** | [**List[AppServicePlansListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner]**](AppServicePlansListMetrics200ResponseValueInnerMetricValuesInnerPropertiesInner.md) | Resource metric properties collection. | [optional] [readonly] 
**timestamp** | **str** | Value timestamp. | [optional] [readonly] 
**total** | **float** | Value total. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_list_metrics200_response_value_inner_metric_values_inner import AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
app_service_plans_list_metrics200_response_value_inner_metric_values_inner_instance = AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
app_service_plans_list_metrics200_response_value_inner_metric_values_inner_dict = app_service_plans_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner from a dict
app_service_plans_list_metrics200_response_value_inner_metric_values_inner_from_dict = AppServicePlansListMetrics200ResponseValueInnerMetricValuesInner.from_dict(app_service_plans_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


