# DailyStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dom** | [**DailyStatsNestedJson**](DailyStatsNestedJson.md) |  | [optional] 
**miles_stats** | [**DailyStatsNestedJson**](DailyStatsNestedJson.md) |  | [optional] 
**price_stats** | [**DailyStatsNestedJson**](DailyStatsNestedJson.md) |  | [optional] 
**units_for_sale** | **float** | Number of units of this car for sale on the market | [optional] 

## Example

```python
from openapi_client.models.daily_stats import DailyStats

# TODO update the JSON string below
json = "{}"
# create an instance of DailyStats from a JSON string
daily_stats_instance = DailyStats.from_json(json)
# print the JSON string representation of the object
print(DailyStats.to_json())

# convert the object into a dict
daily_stats_dict = daily_stats_instance.to_dict()
# create an instance of DailyStats from a dict
daily_stats_from_dict = DailyStats.from_dict(daily_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


