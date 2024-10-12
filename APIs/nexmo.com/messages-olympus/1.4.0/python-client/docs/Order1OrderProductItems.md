# Order1OrderProductItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency code representing the currency for this specific item. | [optional] 
**item_price** | **str** | The unit price for this specific item. | [optional] 
**product_retailer_id** | **str** | The ID of the specific product being ordered. | [optional] 
**quantity** | **str** | The quantity ordered for this specific item. | [optional] 

## Example

```python
from openapi_client.models.order1_order_product_items import Order1OrderProductItems

# TODO update the JSON string below
json = "{}"
# create an instance of Order1OrderProductItems from a JSON string
order1_order_product_items_instance = Order1OrderProductItems.from_json(json)
# print the JSON string representation of the object
print(Order1OrderProductItems.to_json())

# convert the object into a dict
order1_order_product_items_dict = order1_order_product_items_instance.to_dict()
# create an instance of Order1OrderProductItems from a dict
order1_order_product_items_from_dict = Order1OrderProductItems.from_dict(order1_order_product_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


