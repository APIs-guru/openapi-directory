# DailyResourceUsageAggregationDisk

Statistical aggregation of disk usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iops** | [**DailyResourceUsageAggregationStats**](DailyResourceUsageAggregationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation_disk import DailyResourceUsageAggregationDisk

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregationDisk from a JSON string
daily_resource_usage_aggregation_disk_instance = DailyResourceUsageAggregationDisk.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregationDisk.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_disk_dict = daily_resource_usage_aggregation_disk_instance.to_dict()
# create an instance of DailyResourceUsageAggregationDisk from a dict
daily_resource_usage_aggregation_disk_from_dict = DailyResourceUsageAggregationDisk.from_dict(daily_resource_usage_aggregation_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


