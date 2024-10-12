# PoolStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **datetime** |  | 
**resource_stats** | [**ResourceStatistics**](ResourceStatistics.md) |  | [optional] 
**start_time** | **datetime** |  | 
**url** | **str** |  | 
**usage_stats** | [**UsageStatistics**](UsageStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.pool_statistics import PoolStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of PoolStatistics from a JSON string
pool_statistics_instance = PoolStatistics.from_json(json)
# print the JSON string representation of the object
print(PoolStatistics.to_json())

# convert the object into a dict
pool_statistics_dict = pool_statistics_instance.to_dict()
# create an instance of PoolStatistics from a dict
pool_statistics_from_dict = PoolStatistics.from_dict(pool_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


