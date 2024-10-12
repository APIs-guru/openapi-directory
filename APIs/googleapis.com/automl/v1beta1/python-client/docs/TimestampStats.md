# TimestampStats

The data statistics of a series of TIMESTAMP values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granular_stats** | [**Dict[str, GranularStats]**](GranularStats.md) | The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). | [optional] 

## Example

```python
from openapi_client.models.timestamp_stats import TimestampStats

# TODO update the JSON string below
json = "{}"
# create an instance of TimestampStats from a JSON string
timestamp_stats_instance = TimestampStats.from_json(json)
# print the JSON string representation of the object
print(TimestampStats.to_json())

# convert the object into a dict
timestamp_stats_dict = timestamp_stats_instance.to_dict()
# create an instance of TimestampStats from a dict
timestamp_stats_from_dict = TimestampStats.from_dict(timestamp_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


