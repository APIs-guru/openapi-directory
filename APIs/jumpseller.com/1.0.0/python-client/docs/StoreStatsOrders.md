# StoreStatsOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average order amount. | [optional] 
**count** | **int** | Total number of orders. | [optional] 
**data** | [**List[OrdersData]**](OrdersData.md) | Orders data. | [optional] 
**total** | **float** | Total amount from all orders. | [optional] 

## Example

```python
from openapi_client.models.store_stats_orders import StoreStatsOrders

# TODO update the JSON string below
json = "{}"
# create an instance of StoreStatsOrders from a JSON string
store_stats_orders_instance = StoreStatsOrders.from_json(json)
# print the JSON string representation of the object
print(StoreStatsOrders.to_json())

# convert the object into a dict
store_stats_orders_dict = store_stats_orders_instance.to_dict()
# create an instance of StoreStatsOrders from a dict
store_stats_orders_from_dict = StoreStatsOrders.from_dict(store_stats_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


