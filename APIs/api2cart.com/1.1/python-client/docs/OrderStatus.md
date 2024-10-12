# OrderStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**history** | [**List[OrderStatusHistoryItem]**](OrderStatusHistoryItem.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**refund_info** | [**OrderStatusRefund**](OrderStatusRefund.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_status import OrderStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatus from a JSON string
order_status_instance = OrderStatus.from_json(json)
# print the JSON string representation of the object
print(OrderStatus.to_json())

# convert the object into a dict
order_status_dict = order_status_instance.to_dict()
# create an instance of OrderStatus from a dict
order_status_from_dict = OrderStatus.from_dict(order_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


