# Order

This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The e-commerce platform or environment where the order was created. Use the value &lt;code&gt;EBAY&lt;/code&gt; to get the rates available for eBay orders. | [optional] 
**order_id** | **str** | The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the &lt;b&gt;orderId&lt;/b&gt;. | [optional] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


