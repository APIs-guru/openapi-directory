# DailyResourceUsageAggregationStats

Statistical aggregation of samples for a single resource usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average usage value. | [optional] 
**median** | **float** | Median usage value. | [optional] 
**nintey_fifth_percentile** | **float** | 95th percentile usage value. | [optional] 
**peak** | **float** | Peak usage value. | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation_stats import DailyResourceUsageAggregationStats

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregationStats from a JSON string
daily_resource_usage_aggregation_stats_instance = DailyResourceUsageAggregationStats.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregationStats.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_stats_dict = daily_resource_usage_aggregation_stats_instance.to_dict()
# create an instance of DailyResourceUsageAggregationStats from a dict
daily_resource_usage_aggregation_stats_from_dict = DailyResourceUsageAggregationStats.from_dict(daily_resource_usage_aggregation_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


