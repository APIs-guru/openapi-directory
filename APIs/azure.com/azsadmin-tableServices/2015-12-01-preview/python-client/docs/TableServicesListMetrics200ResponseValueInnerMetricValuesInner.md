# TableServicesListMetrics200ResponseValueInnerMetricValuesInner

Metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average value of metric. | [optional] [readonly] 
**count** | **int** | Count of metric values. | [optional] [readonly] 
**maximum** | **float** | Maximum value of metric. | [optional] [readonly] 
**minimum** | **float** | Minimum value of metric. | [optional] [readonly] 
**properties** | **str** | Metric value properties. | [optional] [readonly] 
**time_stamp** | **datetime** | Timestamp of metric value. | [optional] [readonly] 
**total** | **float** | Total value of metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.table_services_list_metrics200_response_value_inner_metric_values_inner import TableServicesListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableServicesListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
table_services_list_metrics200_response_value_inner_metric_values_inner_instance = TableServicesListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(TableServicesListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
table_services_list_metrics200_response_value_inner_metric_values_inner_dict = table_services_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of TableServicesListMetrics200ResponseValueInnerMetricValuesInner from a dict
table_services_list_metrics200_response_value_inner_metric_values_inner_from_dict = TableServicesListMetrics200ResponseValueInnerMetricValuesInner.from_dict(table_services_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


