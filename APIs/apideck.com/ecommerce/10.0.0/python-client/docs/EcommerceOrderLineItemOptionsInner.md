# EcommerceOrderLineItemOptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for the option. | [optional] 
**name** | **str** | The name of the option. | [optional] 
**value** | **str** | The value of the option. | [optional] 

## Example

```python
from openapi_client.models.ecommerce_order_line_item_options_inner import EcommerceOrderLineItemOptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceOrderLineItemOptionsInner from a JSON string
ecommerce_order_line_item_options_inner_instance = EcommerceOrderLineItemOptionsInner.from_json(json)
# print the JSON string representation of the object
print(EcommerceOrderLineItemOptionsInner.to_json())

# convert the object into a dict
ecommerce_order_line_item_options_inner_dict = ecommerce_order_line_item_options_inner_instance.to_dict()
# create an instance of EcommerceOrderLineItemOptionsInner from a dict
ecommerce_order_line_item_options_inner_from_dict = EcommerceOrderLineItemOptionsInner.from_dict(ecommerce_order_line_item_options_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


