# XPSStringStats

The data statistics of a series of STRING values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**top_unigram_stats** | [**List[XPSStringStatsUnigramStats]**](XPSStringStatsUnigramStats.md) | The statistics of the top 20 unigrams, ordered by StringStats.UnigramStats.count. | [optional] 

## Example

```python
from openapi_client.models.xps_string_stats import XPSStringStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSStringStats from a JSON string
xps_string_stats_instance = XPSStringStats.from_json(json)
# print the JSON string representation of the object
print(XPSStringStats.to_json())

# convert the object into a dict
xps_string_stats_dict = xps_string_stats_instance.to_dict()
# create an instance of XPSStringStats from a dict
xps_string_stats_from_dict = XPSStringStats.from_dict(xps_string_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


