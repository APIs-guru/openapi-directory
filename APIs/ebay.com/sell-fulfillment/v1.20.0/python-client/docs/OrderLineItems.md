# OrderLineItems

This type is used by the <strong>lineItems</strong> array that is used to identify one or more line items in the order with the payment dispute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | The unique identifier of the eBay listing associated with the order. | [optional] 
**line_item_id** | **str** | The unique identifier of the line item within the order. The &lt;strong&gt;lineItemId&lt;/strong&gt; value is created once the buyer actually purchases the item, or if there is a commitment to buy (such as an auction that is won by the buyer, an accepted Best Offer, or other situation that does not require immediate payment from the buyer). | [optional] 

## Example

```python
from openapi_client.models.order_line_items import OrderLineItems

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItems from a JSON string
order_line_items_instance = OrderLineItems.from_json(json)
# print the JSON string representation of the object
print(OrderLineItems.to_json())

# convert the object into a dict
order_line_items_dict = order_line_items_instance.to_dict()
# create an instance of OrderLineItems from a dict
order_line_items_from_dict = OrderLineItems.from_dict(order_line_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


