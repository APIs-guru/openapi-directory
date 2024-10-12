# OrderreturnsLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item. This value is assigned by Google when an order is created. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**quantity** | **int** | The quantity of this line item. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_line_item import OrderreturnsLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsLineItem from a JSON string
orderreturns_line_item_instance = OrderreturnsLineItem.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsLineItem.to_json())

# convert the object into a dict
orderreturns_line_item_dict = orderreturns_line_item_instance.to_dict()
# create an instance of OrderreturnsLineItem from a dict
orderreturns_line_item_from_dict = OrderreturnsLineItem.from_dict(orderreturns_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


