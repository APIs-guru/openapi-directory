# OrderShippment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier** | [**Courier**](Courier.md) |  | [optional] 
**cte** | **str** | Conhecimento de Transporte Eletôniconico | [optional] 
**invoice** | [**Invoice**](Invoice.md) |  | [optional] 
**items** | [**List[OrderItemReference]**](OrderItemReference.md) |  | [optional] 
**number** | **str** | Courier unique trackign Id associated with this shipment | [optional] 
**occurred_at** | **datetime** | Date that this shippment was shiped | [optional] 
**order** | **str** | Order unique Id | [optional] 
**seller_shipment_id** | **str** | Unique Seller shipment Id. This must be unique across all orders and shipments | [optional] 
**status** | **str** | Shipment status. | [optional] 
**tracking_url** | **str** | Courier tracking URL | [optional] 

## Example

```python
from openapi_client.models.order_shippment import OrderShippment

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippment from a JSON string
order_shippment_instance = OrderShippment.from_json(json)
# print the JSON string representation of the object
print(OrderShippment.to_json())

# convert the object into a dict
order_shippment_dict = order_shippment_instance.to_dict()
# create an instance of OrderShippment from a dict
order_shippment_from_dict = OrderShippment.from_dict(order_shippment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


