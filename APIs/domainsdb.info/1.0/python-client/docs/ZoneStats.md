# ZoneStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page** | **str** | Next page id | [optional] 
**time** | **str** | Time took | 
**total** | **int** | Total days reported | [optional] 
**statistics** | [**List[ZoneStatistics]**](ZoneStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.zone_stats import ZoneStats

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneStats from a JSON string
zone_stats_instance = ZoneStats.from_json(json)
# print the JSON string representation of the object
print(ZoneStats.to_json())

# convert the object into a dict
zone_stats_dict = zone_stats_instance.to_dict()
# create an instance of ZoneStats from a dict
zone_stats_from_dict = ZoneStats.from_dict(zone_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


