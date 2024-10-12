# EcommerceOrderLineItem

A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the product or variant associated with the line item. | [optional] 
**discounts** | [**List[EcommerceDiscount]**](EcommerceDiscount.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the product or variant associated with the line item. | 
**options** | [**List[EcommerceOrderLineItemOptionsInner]**](EcommerceOrderLineItemOptionsInner.md) |  | [optional] 
**product_id** | **str** | A unique identifier for the product associated with the line item. | [optional] 
**quantity** | **str** | The quantity of the product or variant associated with the line item. | 
**sku** | **str** | The SKU of the product or variant associated with the line item. | [optional] 
**tax_amount** | **str** | The total tax amount applied to the product or variant associated with the line item. | [optional] 
**tax_rate** | **str** | The tax rate applied to the product or variant associated with the line item. | [optional] 
**total_amount** | **str** | The total amount for the product(s) or variant associated with the line item, including taxes and discounts. | 
**unit_price** | **str** | The unit price of the product or variant associated with the line item. | [optional] 
**variant_id** | **str** | A unique identifier for the variant of the product associated with the line item, if applicable. | [optional] 

## Example

```python
from openapi_client.models.ecommerce_order_line_item import EcommerceOrderLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceOrderLineItem from a JSON string
ecommerce_order_line_item_instance = EcommerceOrderLineItem.from_json(json)
# print the JSON string representation of the object
print(EcommerceOrderLineItem.to_json())

# convert the object into a dict
ecommerce_order_line_item_dict = ecommerce_order_line_item_instance.to_dict()
# create an instance of EcommerceOrderLineItem from a dict
ecommerce_order_line_item_from_dict = EcommerceOrderLineItem.from_dict(ecommerce_order_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


