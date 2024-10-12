# OrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**barcode** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**discount_amount** | **float** |  | [optional] 
**model** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**List[OrderItemOption]**](OrderItemOption.md) |  | [optional] 
**order_product_id** | **str** |  | [optional] 
**parent_order_product_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**price_inc_tax** | **float** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**tax_percent** | **float** |  | [optional] 
**tax_value** | **float** |  | [optional] 
**tax_value_after_discount** | **float** |  | [optional] 
**total_price** | **float** |  | [optional] 
**variant_id** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_item import OrderItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItem from a JSON string
order_item_instance = OrderItem.from_json(json)
# print the JSON string representation of the object
print(OrderItem.to_json())

# convert the object into a dict
order_item_dict = order_item_instance.to_dict()
# create an instance of OrderItem from a dict
order_item_from_dict = OrderItem.from_dict(order_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


