# XPSStringStatsUnigramStats

The statistics of a unigram.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of occurrences of this unigram in the series. | [optional] 
**value** | **str** | The unigram. | [optional] 

## Example

```python
from openapi_client.models.xps_string_stats_unigram_stats import XPSStringStatsUnigramStats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSStringStatsUnigramStats from a JSON string
xps_string_stats_unigram_stats_instance = XPSStringStatsUnigramStats.from_json(json)
# print the JSON string representation of the object
print(XPSStringStatsUnigramStats.to_json())

# convert the object into a dict
xps_string_stats_unigram_stats_dict = xps_string_stats_unigram_stats_instance.to_dict()
# create an instance of XPSStringStatsUnigramStats from a dict
xps_string_stats_unigram_stats_from_dict = XPSStringStatsUnigramStats.from_dict(xps_string_stats_unigram_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


