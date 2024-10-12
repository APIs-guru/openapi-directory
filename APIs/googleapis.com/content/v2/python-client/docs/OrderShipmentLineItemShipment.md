# OrderShipmentLineItemShipment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity that is shipped. | [optional] 

## Example

```python
from openapi_client.models.order_shipment_line_item_shipment import OrderShipmentLineItemShipment

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentLineItemShipment from a JSON string
order_shipment_line_item_shipment_instance = OrderShipmentLineItemShipment.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentLineItemShipment.to_json())

# convert the object into a dict
order_shipment_line_item_shipment_dict = order_shipment_line_item_shipment_instance.to_dict()
# create an instance of OrderShipmentLineItemShipment from a dict
order_shipment_line_item_shipment_from_dict = OrderShipmentLineItemShipment.from_dict(order_shipment_line_item_shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


