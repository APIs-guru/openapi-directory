# ZoneStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | Report Date | 
**dec** | **int** | Increase | 
**inc** | **int** | Decrease | 
**total** | **int** | Total number of records | 
**zone** | **str** | TLD name | 

## Example

```python
from openapi_client.models.zone_statistics import ZoneStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneStatistics from a JSON string
zone_statistics_instance = ZoneStatistics.from_json(json)
# print the JSON string representation of the object
print(ZoneStatistics.to_json())

# convert the object into a dict
zone_statistics_dict = zone_statistics_instance.to_dict()
# create an instance of ZoneStatistics from a dict
zone_statistics_from_dict = ZoneStatistics.from_dict(zone_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


