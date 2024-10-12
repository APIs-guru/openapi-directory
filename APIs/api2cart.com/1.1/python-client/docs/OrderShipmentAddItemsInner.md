# OrderShipmentAddItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_product_id** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_shipment_add_items_inner import OrderShipmentAddItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentAddItemsInner from a JSON string
order_shipment_add_items_inner_instance = OrderShipmentAddItemsInner.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentAddItemsInner.to_json())

# convert the object into a dict
order_shipment_add_items_inner_dict = order_shipment_add_items_inner_instance.to_dict()
# create an instance of OrderShipmentAddItemsInner from a dict
order_shipment_add_items_inner_from_dict = OrderShipmentAddItemsInner.from_dict(order_shipment_add_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


