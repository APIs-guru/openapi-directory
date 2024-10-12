# DailyResourceUsageAggregationCPU

Statistical aggregation of CPU usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utilization_percentage** | [**DailyResourceUsageAggregationStats**](DailyResourceUsageAggregationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation_cpu import DailyResourceUsageAggregationCPU

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregationCPU from a JSON string
daily_resource_usage_aggregation_cpu_instance = DailyResourceUsageAggregationCPU.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregationCPU.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_cpu_dict = daily_resource_usage_aggregation_cpu_instance.to_dict()
# create an instance of DailyResourceUsageAggregationCPU from a dict
daily_resource_usage_aggregation_cpu_from_dict = DailyResourceUsageAggregationCPU.from_dict(daily_resource_usage_aggregation_cpu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


