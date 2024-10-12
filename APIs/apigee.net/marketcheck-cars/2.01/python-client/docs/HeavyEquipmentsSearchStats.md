# HeavyEquipmentsSearchStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours_used** | [**StatsItem**](StatsItem.md) |  | [optional] 
**miles** | [**StatsItem**](StatsItem.md) |  | [optional] 
**price** | [**StatsItem**](StatsItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.heavy_equipments_search_stats import HeavyEquipmentsSearchStats

# TODO update the JSON string below
json = "{}"
# create an instance of HeavyEquipmentsSearchStats from a JSON string
heavy_equipments_search_stats_instance = HeavyEquipmentsSearchStats.from_json(json)
# print the JSON string representation of the object
print(HeavyEquipmentsSearchStats.to_json())

# convert the object into a dict
heavy_equipments_search_stats_dict = heavy_equipments_search_stats_instance.to_dict()
# create an instance of HeavyEquipmentsSearchStats from a dict
heavy_equipments_search_stats_from_dict = HeavyEquipmentsSearchStats.from_dict(heavy_equipments_search_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


