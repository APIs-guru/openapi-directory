# StoreStatsRegionOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_mode** | **str** | Can be &#39;regions&#39; when orders are specific of 1 country or &#39;auto&#39;. | [optional] 
**regions_orders** | [**List[CountryOrders]**](CountryOrders.md) | Orders per country and region(inside the country). | [optional] 

## Example

```python
from openapi_client.models.store_stats_region_orders import StoreStatsRegionOrders

# TODO update the JSON string below
json = "{}"
# create an instance of StoreStatsRegionOrders from a JSON string
store_stats_region_orders_instance = StoreStatsRegionOrders.from_json(json)
# print the JSON string representation of the object
print(StoreStatsRegionOrders.to_json())

# convert the object into a dict
store_stats_region_orders_dict = store_stats_region_orders_instance.to_dict()
# create an instance of StoreStatsRegionOrders from a dict
store_stats_region_orders_from_dict = StoreStatsRegionOrders.from_dict(store_stats_region_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


