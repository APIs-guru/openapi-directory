# XPSTimestampStatsGranularStats

Stats split by a defined in context granularity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | **Dict[str, str]** | A map from granularity key to example count for that key. E.g. for hour_of_day &#x60;13&#x60; means 1pm, or for month_of_year &#x60;5&#x60; means May). | [optional] 

## Example

```python
from openapi_client.models.xps_timestamp_stats_granular_stats import XPSTimestampStatsGranularStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTimestampStatsGranularStats from a JSON string
xps_timestamp_stats_granular_stats_instance = XPSTimestampStatsGranularStats.from_json(json)
# print the JSON string representation of the object
print(XPSTimestampStatsGranularStats.to_json())

# convert the object into a dict
xps_timestamp_stats_granular_stats_dict = xps_timestamp_stats_granular_stats_instance.to_dict()
# create an instance of XPSTimestampStatsGranularStats from a dict
xps_timestamp_stats_granular_stats_from_dict = XPSTimestampStatsGranularStats.from_dict(xps_timestamp_stats_granular_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


