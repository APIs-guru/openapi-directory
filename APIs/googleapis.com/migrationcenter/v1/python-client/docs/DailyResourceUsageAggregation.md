# DailyResourceUsageAggregation

Usage data aggregation for a single day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | [**DailyResourceUsageAggregationCPU**](DailyResourceUsageAggregationCPU.md) |  | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**disk** | [**DailyResourceUsageAggregationDisk**](DailyResourceUsageAggregationDisk.md) |  | [optional] 
**memory** | [**DailyResourceUsageAggregationMemory**](DailyResourceUsageAggregationMemory.md) |  | [optional] 
**network** | [**DailyResourceUsageAggregationNetwork**](DailyResourceUsageAggregationNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation import DailyResourceUsageAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregation from a JSON string
daily_resource_usage_aggregation_instance = DailyResourceUsageAggregation.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregation.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_dict = daily_resource_usage_aggregation_instance.to_dict()
# create an instance of DailyResourceUsageAggregation from a dict
daily_resource_usage_aggregation_from_dict = DailyResourceUsageAggregation.from_dict(daily_resource_usage_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


