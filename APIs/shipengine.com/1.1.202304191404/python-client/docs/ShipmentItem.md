# ShipmentItem

A shipment item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **str** | Amazon Standard Identification Number | [optional] 
**external_order_id** | **str** | external order id | [optional] 
**external_order_item_id** | **str** | external order item id | [optional] 
**name** | **str** | item name | [optional] 
**order_source_code** | [**OrderSourceName**](OrderSourceName.md) |  | [optional] 
**quantity** | **int** | The quantity of this item included in the shipment | [optional] 
**sales_order_id** | **str** | sales order id | [optional] 
**sales_order_item_id** | **str** | sales order item id | [optional] 
**sku** | **str** | Item Stock Keeping Unit | [optional] 

## Example

```python
from openapi_client.models.shipment_item import ShipmentItem

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentItem from a JSON string
shipment_item_instance = ShipmentItem.from_json(json)
# print the JSON string representation of the object
print(ShipmentItem.to_json())

# convert the object into a dict
shipment_item_dict = shipment_item_instance.to_dict()
# create an instance of ShipmentItem from a dict
shipment_item_from_dict = ShipmentItem.from_dict(shipment_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


