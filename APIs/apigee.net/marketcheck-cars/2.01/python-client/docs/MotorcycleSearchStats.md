# MotorcycleSearchStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**miles** | [**StatsItem**](StatsItem.md) |  | [optional] 
**price** | [**StatsItem**](StatsItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.motorcycle_search_stats import MotorcycleSearchStats

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleSearchStats from a JSON string
motorcycle_search_stats_instance = MotorcycleSearchStats.from_json(json)
# print the JSON string representation of the object
print(MotorcycleSearchStats.to_json())

# convert the object into a dict
motorcycle_search_stats_dict = motorcycle_search_stats_instance.to_dict()
# create an instance of MotorcycleSearchStats from a dict
motorcycle_search_stats_from_dict = MotorcycleSearchStats.from_dict(motorcycle_search_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


