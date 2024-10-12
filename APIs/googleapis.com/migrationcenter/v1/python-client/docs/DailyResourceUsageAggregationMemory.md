# DailyResourceUsageAggregationMemory

Statistical aggregation of memory usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utilization_percentage** | [**DailyResourceUsageAggregationStats**](DailyResourceUsageAggregationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation_memory import DailyResourceUsageAggregationMemory

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregationMemory from a JSON string
daily_resource_usage_aggregation_memory_instance = DailyResourceUsageAggregationMemory.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregationMemory.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_memory_dict = daily_resource_usage_aggregation_memory_instance.to_dict()
# create an instance of DailyResourceUsageAggregationMemory from a dict
daily_resource_usage_aggregation_memory_from_dict = DailyResourceUsageAggregationMemory.from_dict(daily_resource_usage_aggregation_memory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


