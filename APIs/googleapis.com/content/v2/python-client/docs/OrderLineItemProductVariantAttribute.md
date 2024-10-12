# OrderLineItemProductVariantAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | The dimension of the variant. | [optional] 
**value** | **str** | The value for the dimension. | [optional] 

## Example

```python
from openapi_client.models.order_line_item_product_variant_attribute import OrderLineItemProductVariantAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemProductVariantAttribute from a JSON string
order_line_item_product_variant_attribute_instance = OrderLineItemProductVariantAttribute.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemProductVariantAttribute.to_json())

# convert the object into a dict
order_line_item_product_variant_attribute_dict = order_line_item_product_variant_attribute_instance.to_dict()
# create an instance of OrderLineItemProductVariantAttribute from a dict
order_line_item_product_variant_attribute_from_dict = OrderLineItemProductVariantAttribute.from_dict(order_line_item_product_variant_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


