# PlansListMetrics200ResponseValueInnerMetricValuesInner

Metric value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average value for metric sample period. | [optional] 
**count** | **int** | Number of measurements for metric sample period. | [optional] 
**maximum** | **float** | Maximum value for metric sample period. | [optional] 
**minimum** | **float** | Minimum value for metric sample period. | [optional] 
**properties** | **Dict[str, str]** | Extended properties. | [optional] 
**time_stamp** | **datetime** | Timestamp of when the metric value was collected. | [optional] 
**total** | **float** | Total value for metric sample period. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metrics200_response_value_inner_metric_values_inner import PlansListMetrics200ResponseValueInnerMetricValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetrics200ResponseValueInnerMetricValuesInner from a JSON string
plans_list_metrics200_response_value_inner_metric_values_inner_instance = PlansListMetrics200ResponseValueInnerMetricValuesInner.from_json(json)
# print the JSON string representation of the object
print(PlansListMetrics200ResponseValueInnerMetricValuesInner.to_json())

# convert the object into a dict
plans_list_metrics200_response_value_inner_metric_values_inner_dict = plans_list_metrics200_response_value_inner_metric_values_inner_instance.to_dict()
# create an instance of PlansListMetrics200ResponseValueInnerMetricValuesInner from a dict
plans_list_metrics200_response_value_inner_metric_values_inner_from_dict = PlansListMetrics200ResponseValueInnerMetricValuesInner.from_dict(plans_list_metrics200_response_value_inner_metric_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


