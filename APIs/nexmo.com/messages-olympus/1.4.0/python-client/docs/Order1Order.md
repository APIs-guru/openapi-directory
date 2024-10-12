# Order1Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_id** | **str** | The ID of the catalog containing the products in this order. | 
**product_items** | [**List[Order1OrderProductItems]**](Order1OrderProductItems.md) |  | 

## Example

```python
from openapi_client.models.order1_order import Order1Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order1Order from a JSON string
order1_order_instance = Order1Order.from_json(json)
# print the JSON string representation of the object
print(Order1Order.to_json())

# convert the object into a dict
order1_order_dict = order1_order_instance.to_dict()
# create an instance of Order1Order from a dict
order1_order_from_dict = Order1Order.from_dict(order1_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


