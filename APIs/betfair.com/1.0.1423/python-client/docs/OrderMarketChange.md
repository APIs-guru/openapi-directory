# OrderMarketChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **int** |  | [optional] 
**closed** | **bool** |  | [optional] 
**full_image** | **bool** |  | [optional] 
**id** | **str** | Market Id - the id of the market the order is on | [optional] 
**orc** | [**List[OrderRunnerChange]**](OrderRunnerChange.md) | Order Changes - a list of changes to orders on a selection | [optional] 

## Example

```python
from openapi_client.models.order_market_change import OrderMarketChange

# TODO update the JSON string below
json = "{}"
# create an instance of OrderMarketChange from a JSON string
order_market_change_instance = OrderMarketChange.from_json(json)
# print the JSON string representation of the object
print(OrderMarketChange.to_json())

# convert the object into a dict
order_market_change_dict = order_market_change_instance.to_dict()
# create an instance of OrderMarketChange from a dict
order_market_change_from_dict = OrderMarketChange.from_dict(order_market_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


