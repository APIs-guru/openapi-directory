# OrderStatusHistoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**comment** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**name** | **str** |  | [optional] 
**notify** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.order_status_history_item import OrderStatusHistoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatusHistoryItem from a JSON string
order_status_history_item_instance = OrderStatusHistoryItem.from_json(json)
# print the JSON string representation of the object
print(OrderStatusHistoryItem.to_json())

# convert the object into a dict
order_status_history_item_dict = order_status_history_item_instance.to_dict()
# create an instance of OrderStatusHistoryItem from a dict
order_status_history_item_from_dict = OrderStatusHistoryItem.from_dict(order_status_history_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


