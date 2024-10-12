# RegionHealthModelUsageMetricsInnerMetricsValueInner

Metrics for a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ma_counter_name** | **str** | Name of the counter. | [optional] 
**name** | **str** | Name of the usage metric. | [optional] 
**observed_timestamp** | **datetime** | Time counter was observed. | [optional] 
**source_name** | **str** | The origin of the metric. | [optional] 
**source_type** | **str** | Type of the source. | [optional] 
**unit** | **str** | The unit of the metric. | [optional] 
**value** | **float** | Name of the usage metric. | [optional] 

## Example

```python
from openapi_client.models.region_health_model_usage_metrics_inner_metrics_value_inner import RegionHealthModelUsageMetricsInnerMetricsValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealthModelUsageMetricsInnerMetricsValueInner from a JSON string
region_health_model_usage_metrics_inner_metrics_value_inner_instance = RegionHealthModelUsageMetricsInnerMetricsValueInner.from_json(json)
# print the JSON string representation of the object
print(RegionHealthModelUsageMetricsInnerMetricsValueInner.to_json())

# convert the object into a dict
region_health_model_usage_metrics_inner_metrics_value_inner_dict = region_health_model_usage_metrics_inner_metrics_value_inner_instance.to_dict()
# create an instance of RegionHealthModelUsageMetricsInnerMetricsValueInner from a dict
region_health_model_usage_metrics_inner_metrics_value_inner_from_dict = RegionHealthModelUsageMetricsInnerMetricsValueInner.from_dict(region_health_model_usage_metrics_inner_metrics_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


