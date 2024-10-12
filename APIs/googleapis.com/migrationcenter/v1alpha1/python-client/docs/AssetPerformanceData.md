# AssetPerformanceData

Performance data for an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_resource_usage_aggregations** | [**List[DailyResourceUsageAggregation]**](DailyResourceUsageAggregation.md) | Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent. | [optional] 

## Example

```python
from openapi_client.models.asset_performance_data import AssetPerformanceData

# TODO update the JSON string below
json = "{}"
# create an instance of AssetPerformanceData from a JSON string
asset_performance_data_instance = AssetPerformanceData.from_json(json)
# print the JSON string representation of the object
print(AssetPerformanceData.to_json())

# convert the object into a dict
asset_performance_data_dict = asset_performance_data_instance.to_dict()
# create an instance of AssetPerformanceData from a dict
asset_performance_data_from_dict = AssetPerformanceData.from_dict(asset_performance_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


