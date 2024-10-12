# XPSTimestampStats

The data statistics of a series of TIMESTAMP values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**granular_stats** | [**Dict[str, XPSTimestampStatsGranularStats]**](XPSTimestampStatsGranularStats.md) | The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). | [optional] 
**median_timestamp_nanos** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.xps_timestamp_stats import XPSTimestampStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTimestampStats from a JSON string
xps_timestamp_stats_instance = XPSTimestampStats.from_json(json)
# print the JSON string representation of the object
print(XPSTimestampStats.to_json())

# convert the object into a dict
xps_timestamp_stats_dict = xps_timestamp_stats_instance.to_dict()
# create an instance of XPSTimestampStats from a dict
xps_timestamp_stats_from_dict = XPSTimestampStats.from_dict(xps_timestamp_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


