# XPSDataStats

The data statistics of a series of values that share the same DataType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_stats** | [**XPSArrayStats**](XPSArrayStats.md) |  | [optional] 
**category_stats** | [**XPSCategoryStats**](XPSCategoryStats.md) |  | [optional] 
**distinct_value_count** | **str** | The number of distinct values. | [optional] 
**float64_stats** | [**XPSFloat64Stats**](XPSFloat64Stats.md) |  | [optional] 
**null_value_count** | **str** | The number of values that are null. | [optional] 
**string_stats** | [**XPSStringStats**](XPSStringStats.md) |  | [optional] 
**struct_stats** | [**XPSStructStats**](XPSStructStats.md) |  | [optional] 
**timestamp_stats** | [**XPSTimestampStats**](XPSTimestampStats.md) |  | [optional] 
**valid_value_count** | **str** | The number of values that are valid. | [optional] 

## Example

```python
from openapi_client.models.xps_data_stats import XPSDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSDataStats from a JSON string
xps_data_stats_instance = XPSDataStats.from_json(json)
# print the JSON string representation of the object
print(XPSDataStats.to_json())

# convert the object into a dict
xps_data_stats_dict = xps_data_stats_instance.to_dict()
# create an instance of XPSDataStats from a dict
xps_data_stats_from_dict = XPSDataStats.from_dict(xps_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


