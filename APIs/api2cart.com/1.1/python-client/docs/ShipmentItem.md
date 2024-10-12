# ShipmentItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**model** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**order_product_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**variant_id** | **str** |  | [optional] 

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


