# PlansListMetrics200ResponseValueInner

The resource metric set that represents the metrics for a particular resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the metric. | [optional] 
**metric_unit** | **str** | The resource metric unit. | [optional] 
**metric_values** | [**List[PlansListMetrics200ResponseValueInnerMetricValuesInner]**](PlansListMetrics200ResponseValueInnerMetricValuesInner.md) | List of metric values. | [optional] 
**start_time** | **datetime** | Start time of the metric. | [optional] 
**time_grain** | **str** | Timespan of the metric. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metrics200_response_value_inner import PlansListMetrics200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetrics200ResponseValueInner from a JSON string
plans_list_metrics200_response_value_inner_instance = PlansListMetrics200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(PlansListMetrics200ResponseValueInner.to_json())

# convert the object into a dict
plans_list_metrics200_response_value_inner_dict = plans_list_metrics200_response_value_inner_instance.to_dict()
# create an instance of PlansListMetrics200ResponseValueInner from a dict
plans_list_metrics200_response_value_inner_from_dict = PlansListMetrics200ResponseValueInner.from_dict(plans_list_metrics200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


