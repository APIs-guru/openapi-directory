# FarmsListMetrics200ResponseValueInnerMetricValuesInner

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
from openapi_client.models.farms_list_metrics200_response_value_inner_metric_values_inner import FarmsListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of FarmsListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
farms_list_metrics200_response_value_inner_metric_values_inner_instance = FarmsListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(FarmsListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
farms_list_metrics200_response_value_inner_metric_values_inner_dict = farms_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of FarmsListMetrics200ResponseValueInnerMetricValuesInner from a dict
farms_list_metrics200_response_value_inner_metric_values_inner_from_dict = FarmsListMetrics200ResponseValueInnerMetricValuesInner.from_dict(farms_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


