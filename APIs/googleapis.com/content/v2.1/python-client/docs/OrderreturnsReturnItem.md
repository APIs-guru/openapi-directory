# OrderreturnsReturnItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund** | [**OrderreturnsRefundOperation**](OrderreturnsRefundOperation.md) |  | [optional] 
**reject** | [**OrderreturnsRejectOperation**](OrderreturnsRejectOperation.md) |  | [optional] 
**return_item_id** | **str** | Unit level ID for the return item. Different units of the same product will have different IDs. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_return_item import OrderreturnsReturnItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsReturnItem from a JSON string
orderreturns_return_item_instance = OrderreturnsReturnItem.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsReturnItem.to_json())

# convert the object into a dict
orderreturns_return_item_dict = orderreturns_return_item_instance.to_dict()
# create an instance of OrderreturnsReturnItem from a dict
orderreturns_return_item_from_dict = OrderreturnsReturnItem.from_dict(orderreturns_return_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


