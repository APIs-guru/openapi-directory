# DailyResourceUsageAggregationNetwork

Statistical aggregation of network usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_bps** | [**DailyResourceUsageAggregationStats**](DailyResourceUsageAggregationStats.md) |  | [optional] 
**ingress_bps** | [**DailyResourceUsageAggregationStats**](DailyResourceUsageAggregationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.daily_resource_usage_aggregation_network import DailyResourceUsageAggregationNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of DailyResourceUsageAggregationNetwork from a JSON string
daily_resource_usage_aggregation_network_instance = DailyResourceUsageAggregationNetwork.from_json(json)
# print the JSON string representation of the object
print(DailyResourceUsageAggregationNetwork.to_json())

# convert the object into a dict
daily_resource_usage_aggregation_network_dict = daily_resource_usage_aggregation_network_instance.to_dict()
# create an instance of DailyResourceUsageAggregationNetwork from a dict
daily_resource_usage_aggregation_network_from_dict = DailyResourceUsageAggregationNetwork.from_dict(daily_resource_usage_aggregation_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


