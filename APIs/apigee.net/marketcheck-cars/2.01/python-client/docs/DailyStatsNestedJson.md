# DailyStatsNestedJson

All nested JSON of stats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interquartile_range** | **float** | Interquartile range | [optional] 
**mean** | **float** | Mean | [optional] 
**median** | **float** | Median | [optional] 
**population_standard_deviation** | **float** | population standard deviation | [optional] 
**standard_deviation** | **float** | Standard Deviation | [optional] 
**trimmed_mean** | **float** | Trimmed Mean | [optional] 
**variance** | **float** | variance | [optional] 

## Example

```python
from openapi_client.models.daily_stats_nested_json import DailyStatsNestedJson

# TODO update the JSON string below
json = "{}"
# create an instance of DailyStatsNestedJson from a JSON string
daily_stats_nested_json_instance = DailyStatsNestedJson.from_json(json)
# print the JSON string representation of the object
print(DailyStatsNestedJson.to_json())

# convert the object into a dict
daily_stats_nested_json_dict = daily_stats_nested_json_instance.to_dict()
# create an instance of DailyStatsNestedJson from a dict
daily_stats_nested_json_from_dict = DailyStatsNestedJson.from_dict(daily_stats_nested_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


