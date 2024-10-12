# FarmsListMetrics200ResponseValueInner

Metric information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Metric end time. | [optional] [readonly] 
**metric_unit** | **str** | Metric unit. | [optional] 
**metric_values** | [**List[FarmsListMetrics200ResponseValueInnerMetricValuesInner]**](FarmsListMetrics200ResponseValueInnerMetricValuesInner.md) | List of metric values. | [optional] [readonly] 
**name** | [**FarmsListMetricDefinitions200ResponseValueInnerName**](FarmsListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**start_time** | **datetime** | Metric start time. | [optional] [readonly] 
**time_grain** | **str** | Metric time grain. | [optional] [readonly] 

## Example

```python
from openapi_client.models.farms_list_metrics200_response_value_inner import FarmsListMetrics200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of FarmsListMetrics200ResponseValueInner from a JSON string
farms_list_metrics200_response_value_inner_instance = FarmsListMetrics200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(FarmsListMetrics200ResponseValueInner.to_json())

# convert the object into a dict
farms_list_metrics200_response_value_inner_dict = farms_list_metrics200_response_value_inner_instance.to_dict()
# create an instance of FarmsListMetrics200ResponseValueInner from a dict
farms_list_metrics200_response_value_inner_from_dict = FarmsListMetrics200ResponseValueInner.from_dict(farms_list_metrics200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


