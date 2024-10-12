# DataStats

The data statistics of a series of values that share the same DataType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_stats** | [**ArrayStats**](ArrayStats.md) |  | [optional] 
**category_stats** | [**CategoryStats**](CategoryStats.md) |  | [optional] 
**distinct_value_count** | **str** | The number of distinct values. | [optional] 
**float64_stats** | [**Float64Stats**](Float64Stats.md) |  | [optional] 
**null_value_count** | **str** | The number of values that are null. | [optional] 
**string_stats** | [**StringStats**](StringStats.md) |  | [optional] 
**struct_stats** | [**StructStats**](StructStats.md) |  | [optional] 
**timestamp_stats** | [**TimestampStats**](TimestampStats.md) |  | [optional] 
**valid_value_count** | **str** | The number of values that are valid. | [optional] 

## Example

```python
from openapi_client.models.data_stats import DataStats

# TODO update the JSON string below
json = "{}"
# create an instance of DataStats from a JSON string
data_stats_instance = DataStats.from_json(json)
# print the JSON string representation of the object
print(DataStats.to_json())

# convert the object into a dict
data_stats_dict = data_stats_instance.to_dict()
# create an instance of DataStats from a dict
data_stats_from_dict = DataStats.from_dict(data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


