# OrderLineItemProductFee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**name** | **str** | Name of the fee. | [optional] 

## Example

```python
from openapi_client.models.order_line_item_product_fee import OrderLineItemProductFee

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemProductFee from a JSON string
order_line_item_product_fee_instance = OrderLineItemProductFee.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemProductFee.to_json())

# convert the object into a dict
order_line_item_product_fee_dict = order_line_item_product_fee_instance.to_dict()
# create an instance of OrderLineItemProductFee from a dict
order_line_item_product_fee_from_dict = OrderLineItemProductFee.from_dict(order_line_item_product_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


