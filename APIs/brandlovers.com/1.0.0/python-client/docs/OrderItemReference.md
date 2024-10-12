# OrderItemReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | Quantity of items | 
**sku_seller_id** | **str** | Unique Product Id (SKU) in the seller system. This is the key that defines witch product will be updated | 

## Example

```python
from openapi_client.models.order_item_reference import OrderItemReference

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItemReference from a JSON string
order_item_reference_instance = OrderItemReference.from_json(json)
# print the JSON string representation of the object
print(OrderItemReference.to_json())

# convert the object into a dict
order_item_reference_dict = order_item_reference_instance.to_dict()
# create an instance of OrderItemReference from a dict
order_item_reference_from_dict = OrderItemReference.from_dict(order_item_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


