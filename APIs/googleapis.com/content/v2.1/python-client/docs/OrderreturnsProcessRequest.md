# OrderreturnsProcessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_charge_return_shipping_cost** | **bool** | Option to charge the customer return shipping cost. | [optional] 
**operation_id** | **str** | [required] The ID of the operation, unique across all operations for a given order return. | [optional] 
**refund_shipping_fee** | [**OrderreturnsRefundOperation**](OrderreturnsRefundOperation.md) |  | [optional] 
**return_items** | [**List[OrderreturnsReturnItem]**](OrderreturnsReturnItem.md) | The list of items to return. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_process_request import OrderreturnsProcessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsProcessRequest from a JSON string
orderreturns_process_request_instance = OrderreturnsProcessRequest.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsProcessRequest.to_json())

# convert the object into a dict
orderreturns_process_request_dict = orderreturns_process_request_instance.to_dict()
# create an instance of OrderreturnsProcessRequest from a dict
orderreturns_process_request_from_dict = OrderreturnsProcessRequest.from_dict(orderreturns_process_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


