# OrderreturnsCreateOrderReturnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_items** | [**List[OrderreturnsLineItem]**](OrderreturnsLineItem.md) | The list of line items to return. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**order_id** | **str** | The ID of the order. | [optional] 
**return_method_type** | **str** | The way of the package being returned. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_create_order_return_request import OrderreturnsCreateOrderReturnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsCreateOrderReturnRequest from a JSON string
orderreturns_create_order_return_request_instance = OrderreturnsCreateOrderReturnRequest.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsCreateOrderReturnRequest.to_json())

# convert the object into a dict
orderreturns_create_order_return_request_dict = orderreturns_create_order_return_request_instance.to_dict()
# create an instance of OrderreturnsCreateOrderReturnRequest from a dict
orderreturns_create_order_return_request_from_dict = OrderreturnsCreateOrderReturnRequest.from_dict(orderreturns_create_order_return_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


